import { Component, ViewChild, ElementRef, effect, inject, computed, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { MessageService } from 'primeng/api';

import { Button } from '../../ui/button.component';
import { ThemeService } from '../../../services/theme.service';
import { DatasetService } from '../../../services/dataset.service';
import { MappingService } from '../../../services/mapping.service';
import { PRIMITIVE_CONFIGS } from '../../../constants/transformations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelect } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { SplitterModule } from 'primeng/splitter';

import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-main-content',
  imports: [
    CommonModule,
    Dialog,
    TabsModule,
    SplitterModule,
    Button,
    TableModule,
    SelectModule,
    MultiSelect,
    FormsModule,
    TooltipModule
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainContent {
  isDarkMode = true;

  datasetService = inject(DatasetService);
  mappingService = inject(MappingService);
  themeService = inject(ThemeService);
  messageService = inject(MessageService);
  sanitizer = inject(DomSanitizer);

  getHighlightedText(file: any): SafeHtml {
    if (!file || !file.text) return '';

    const text = file.text.slice(0, 50000); // reduced size for safety
    const truncated = file.text.length > 50000 ? '\n\n[Content truncated for preview]' : '';

    // Check if it looks like JSON if type is missing or 'text'
    const looksLikeJson = file.type === 'rules' ||
      file.type === 'json' ||
      file.name.toLowerCase().endsWith('.json') ||
      (text.trim().startsWith('{') || text.trim().startsWith('['));

    if (looksLikeJson && text) {
      try {
        const highlighted = this.highlightJson(text);
        return this.sanitizer.bypassSecurityTrustHtml(`<div class="json-wrapper">${highlighted}${truncated}</div>`);
      } catch (e) {
        console.error('JSON highlighting failed', e);
      }
    }

    const escapedText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return this.sanitizer.bypassSecurityTrustHtml(escapedText + truncated);
  }

  private highlightJson(json: string): string {
    const escaped = json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    const jsonRegex = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

    return escaped.replace(jsonRegex, (match) => {
      let cls = 'json-string';
      let style = 'color: #ce9178;';

      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'json-key';
          style = 'color: #9cdcfe;';
        } else {
          cls = 'json-string';
          style = 'color: #ce9178;';
        }
      } else if (/true|false/.test(match)) {
        cls = 'json-boolean';
        style = 'color: #569cd6;';
      } else if (/null/.test(match)) {
        cls = 'json-null';
        style = 'color: #569cd6;';
      } else if (/[0-9]/.test(match)) {
        cls = 'json-number';
        style = 'color: #b5cea8;';
      }
      return `<span class="${cls}" style="${style}">${match}</span>`;
    });
  }

  searchTerm = signal<string>('');
  selectedDatasets = signal<string[]>([]);
  availableDatasets = computed(() => {
    const datasets = Array.from(new Set(this.mappingService.mappingRows().map(r => r.dataset)));
    return datasets.map(d => ({ label: d, value: d }));
  });

  allColumns = [
    { field: 'index', header: '#', class: 'index-col' },
    { field: 'dataset', header: 'DATA SET' },
    { field: 'sourceElement', header: 'SOURCE DATA ELEMENT' },
    { field: 'targetElement', header: 'TARGET DATA ELEMENT' },
    { field: 'status', header: 'STATUS', class: 'status-col' },
    { field: 'actions', header: 'ACTIONS', class: 'actions-col w-[80px]' }
  ];
  visibleColumns = signal<string[]>(['index', 'dataset', 'sourceElement', 'targetElement', 'status', 'actions']);

  filteredMappingRows = computed(() => {
    let rows = this.mappingService.mappingRows();
    const term = this.searchTerm().toLowerCase().trim();
    const datasets = this.selectedDatasets();

    if (datasets.length > 0) {
      rows = rows.filter(row => datasets.includes(row.dataset));
    }

    if (!term) return rows;

    return rows.filter(row =>
      row.sourceElement.toLowerCase().includes(term) ||
      (row.targetElement && row.targetElement.toLowerCase().includes(term)) ||
      row.dataset.toLowerCase().includes(term)
    );
  });

  constructor() {
    effect(() => {
      this.isDarkMode = this.themeService.isDarkMode()();

      if (this.datasetService.triggerFileDialog()) {
        this.onUploadSourceData();
        this.datasetService.resetFileDialog();
      }
    });

    // Auto-initialize mappings from source enums when enum_to_enum is selected
    effect(() => {
      const step = this.currentStep();
      if (step && step.transformation === 'enum_to_enum') {
        const sourceEnums = this.sourceEnums();
        const currentMapping = step.params['mapping'] || {};

        let hasChanges = false;
        const newMapping = { ...currentMapping };

        // Ensure all source enums have at least an entry in mapping if empty
        if (Object.keys(currentMapping).length === 0 && sourceEnums.length > 0) {
          sourceEnums.forEach(s => {
            newMapping[s.value] = '';
          });
          hasChanges = true;
        }

        if (hasChanges) {
          this.updateParam('mapping', newMapping);
        }
      }
    });
  }

  get visible() {
    return this.datasetService.visible();
  }

  set visible(value: boolean) {
    this.datasetService.visible.set(value);
  }

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  onUploadSourceData() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.datasetService.setFile(input.files[0]);
      this.datasetService.showDialog();
    }

    input.value = '';
  }

  onSelectType(type: string): void {
    const file = this.datasetService.uploadedFile();
    if (file) {
      if (file.name.toLowerCase().endsWith('.json') || type === 'rules' || type === 'json') {
        file.text().then(text => {
          let formatted = text;
          try {
            formatted = JSON.stringify(JSON.parse(text), null, 2);
          } catch (e) {
            console.warn('Could not prettify JSON', e);
          }
          this.datasetService.addFileFromText(
            file.name,
            formatted,
            type,
            this.datasetService.selectedFolder() ?? this.datasetService.getNextDatasetName(),
            (file as any).path
          );
        });
      } else {
        this.datasetService.parseCSV(file, type);
      }
    }

    this.datasetService.hideDialog();
  }


  getHeaders(data: string[]) {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]);
  }

  transformationOptions = computed(() => {
    return Object.entries(PRIMITIVE_CONFIGS).map(([key, config]) => ({
      label: config.label,
      value: key
    }));
  });

  activeConfig = computed(() => {
    const step = this.currentStep();
    if (!step) return null;
    const config = PRIMITIVE_CONFIGS[step.transformation];
    return config ? { ...config, name: step.transformation } : null;
  });

  getStepIndex(row: any, stepId: number | null | undefined): number {
    if (!row || !row.steps || stepId === null || stepId === undefined) return -1;
    return row.steps.findIndex((s: any) => s.id === stepId);
  }


  currentStep = computed(() => {
    const selected = this.mappingService.selectedMappingRow();
    if (!selected || !selected.selectedStepId) return null;
    return selected.steps.find((s: any) => s.id === selected.selectedStepId);
  });

  private getEnumsFromDetails(details: any): { label: string, value: string }[] {
    if (!details) return [];
    const detailKeys = Object.keys(details);

    // 1. Try exact (case-insensitive) matches for known enumeration keys
    const enumKeys = [
      'enumeration', 'enumerations', 'enum', 'values', 'categories', 'options', 'choices',
      'permissible values', 'permissible_values', 'permissible value', 'permissible_value',
      'codes', 'codelist', 'labels', 'levels', 'pv', 'pvs'
    ];

    let foundKey = detailKeys.find(k => enumKeys.some(ek => k.toLowerCase() === ek));

    // 2. If no exact match, try finding a key that CONTAINS these words
    if (!foundKey) {
      const fuzzyKeys = ['enum', 'value', 'code', 'choice', 'option', 'category'];
      foundKey = detailKeys.find(k => fuzzyKeys.some(fk => k.toLowerCase().includes(fk)));
    }

    if (foundKey && details[foundKey]) {
      const val = details[foundKey];
      if (Array.isArray(val)) return val.map(v => ({ label: String(v), value: String(v) }));

      if (typeof val === 'string' && val.trim()) {
        // Handle pipe-separated quoted values: "Value 1" | "Value 2" or "1"=[Working]
        if (val.includes('|')) {
          const parts = val.split('|');
          const parsed = parts.map(p => {
            const hasEq = p.includes('=');
            const hasColon = p.includes(':');

            if (hasEq || hasColon) {
              const separator = hasEq ? '=' : ':';
              const [left, ...rest] = p.split(separator);
              const right = rest.join(separator);

              const value = left.replace(/"/g, '').trim();
              let labelText = right.trim();
              if (labelText.startsWith('[') && labelText.endsWith(']')) {
                labelText = labelText.substring(1, labelText.length - 1);
              } else {
                labelText = labelText.replace(/"/g, '');
              }

              return { value, label: value === labelText ? value : `${value} - ${labelText}` };
            }

            const match = p.match(/"([^"]+)"/);
            const value = match ? match[1] : p.trim();
            return { value, label: value };
          }).filter(p => p.value);

          if (parsed.length > 0) return parsed;
        }

        // Handle common formats like "1=Male, 2=Female" or "1:Male; 2:Female"
        const pairs = val.includes(';') ? val.split(';') : val.split(',');
        const parsed = pairs.map(p => {
          const parts = p.includes('=') ? p.split('=') : p.split(':');
          if (parts.length === 2) {
            return { value: parts[0].trim(), label: `${parts[0].trim()} - ${parts[1].trim()}` };
          }
          return { value: p.trim(), label: p.trim() };
        }).filter(p => p.label || p.value);

        if (parsed.length > 0) return parsed;
      }

      const stringVal = String(val).trim();
      if (stringVal) return [{ label: stringVal, value: stringVal }];
    }
    return [];
  }

  sourceEnums = computed(() => {
    const selected = this.mappingService.selectedMappingRow();
    if (!selected) return [];

    // 1. Primary: Parse from source dictionary to capture meanings/labels
    const details = this.mappingService.getSourceDetails(selected.sourceElement, selected.dataset);
    const dictEnums = this.getEnumsFromDetails(details);
    if (dictEnums.length > 0) {
      return dictEnums;
    }

    // 2. Fallback: Try to get unique values from source data files
    const dataFile = this.datasetService.uploadedFiles().find(f => f.folder === selected.dataset && f.type === 'data');
    if (dataFile && dataFile.data) {
      const values = dataFile.data.map(row => row[selected.sourceElement])
        .filter(v => v !== undefined && v !== null && v !== '');

      if (values.length > 0) {
        return Array.from(new Set(values)).sort().map(v => ({ label: String(v), value: String(v) }));
      }
    }

    return [];
  });

  targetEnums = computed(() => {
    const selected = this.mappingService.selectedMappingRow();
    if (!selected || !selected.targetElement) return [];

    const targetElement = selected.targetElement;

    // 1. Primary: Parse from target dictionary to capture meanings/labels
    const details = this.mappingService.getTargetDetails(targetElement);
    const dictEnums = this.getEnumsFromDetails(details);
    if (dictEnums.length > 0) {
      return dictEnums;
    }

    // 2. Fallback: Try to get unique values from target data files
    const targetDataFile = this.datasetService.targetFiles().find(f => f.type === 'data');
    if (targetDataFile && targetDataFile.data) {
      const values = targetDataFile.data.map(row => row[targetElement])
        .filter(v => v !== undefined && v !== null && v !== '');

      if (values.length > 0) {
        return Array.from(new Set(values)).sort().map(v => ({ label: String(v), value: String(v) }));
      }
    }

    return [];
  });

  enumMappings = computed(() => {
    const step = this.currentStep();
    if (!step || step.transformation !== 'enum_to_enum') return [];

    const mappingJson = step.params['mapping'];
    if (!mappingJson) return [];

    try {
      const obj = typeof mappingJson === 'string' ? JSON.parse(mappingJson) : mappingJson;
      return Object.entries(obj).map(([source, target]) => ({
        source: source.startsWith('__empty_') ? '' : String(source),
        target: String(target)
      }));
    } catch (e) {
      console.warn('Failed to parse mapping JSON', e);
      return [];
    }
  });

  addEnumMapping() {
    const currentMappings = this.enumMappings();
    const newMappings = [...currentMappings, { source: '', target: '' }];
    this.updateEnumMappingParam(newMappings);
  }


  updateEnumMapping(index: number, field: 'source' | 'target', value: any) {
    const currentMappings = this.enumMappings();
    const newMappings = [...currentMappings];
    newMappings[index] = { ...newMappings[index], [field]: String(value || '') };
    this.updateEnumMappingParam(newMappings);
  }

  updateEnumMappingBySource(sourceValue: string, targetValue: string) {
    const step = this.currentStep();
    if (!step) return;

    const currentMapping = { ...(step.params['mapping'] || {}) };
    currentMapping[sourceValue] = targetValue;
    this.updateParam('mapping', currentMapping);
  }

  getMappedValue(sourceValue: string): string {
    const step = this.currentStep();
    if (!step || !step.params['mapping']) return '';
    return step.params['mapping'][sourceValue] || '';
  }

  removeEnumMapping(index: number) {
    const currentMappings = this.enumMappings();
    const newMappings = currentMappings.filter((_, i) => i !== index) as { source: string, target: string }[];
    this.updateEnumMappingParam(newMappings);
  }

  private updateEnumMappingParam(mappings: { source: string, target: string }[]) {
    const obj: Record<string, string> = {};
    mappings.forEach((m, idx) => {
      // Use idx if source is empty to ensure unique keys in the temporary object
      const key = m.source || `__empty_${idx}`;
      obj[key] = m.target || '';
    });
    this.updateParam('mapping', obj);
  }

  updateTransformation(transformation: string) {
    this.mappingService.updateTransformation(transformation);
  }

  updateParam(key: string, value: any) {
    this.mappingService.updateParam(key, value);
  }
}

