import { Component, ViewChild, ElementRef, effect, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';

import { Button } from '../../ui/button.component';
import { ThemeService } from '../../../services/theme.service';
import { UploadService } from '../../../services/file-upload.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { SplitterModule } from 'primeng/splitter';

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
    FormsModule
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainContent {
  isDarkMode = true;

  uploadService: UploadService = inject(UploadService);

  constructor(private themeService: ThemeService) {
    effect(() => {
      this.isDarkMode = this.themeService.isDarkMode()();

      if (this.uploadService.triggerFileDialog()) {
        this.onUploadSourceData();
        this.uploadService.resetFileDialog();
      }
    });
  }

  get visible() {
    return this.uploadService.visible();
  }

  set visible(value: boolean) {
    this.uploadService.visible.set(value);
  }

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  onUploadSourceData() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadService.setFile(input.files[0]);

      this.uploadService.showDialog();
    }

    input.value = '';
  }

  getHeaders(data: string[]) {
    return Object.keys(data[0]);
  }

  primitiveConfigs: Record<string, any> = {
    'Convert Units': {
      params: [
        { key: 'source', label: 'Source unit', type: 'text', placeholder: 'meters' },
        { key: 'target', label: 'Target unit', type: 'text', placeholder: 'kilometers' }
      ],
      example: (params: any) => ({
        input: `1000`,
        output: `1`,
        context: `params: {source: ${params?.source || 'meters'}, target: ${params?.target || 'kilometers'}}`
      })
    },
    'Truncate': {
      params: [
        { key: 'max_length', label: 'Max length', type: 'number', placeholder: '10' }
      ],
      example: (params: any) => ({
        input: `"94305-2005"`,
        output: `"{{'94305-2005' | slice:0:${params?.max_length || 0}}}"`,
        context: `params: {length: ${params?.max_length || 0}}`
      })
    },
    'Cast': {
      params: [
        { key: 'type', label: 'Target Type', type: 'select', options: ['String', 'Integer', 'Float', 'Boolean', 'Date'] }
      ],
      example: (params: any) => ({
        input: `"123"`,
        output: `123`,
        context: `as ${params?.type || 'Type'}`
      })
    },
    'Enum To Enum': {
      params: [
        { key: 'mapping', label: 'Mapping JSON', type: 'text', placeholder: '{"A": "B"}' }
      ],
      example: (params: any) => ({
        input: `"A"`,
        output: `"B"`,
        context: ` using mapping`
      })
    },
    'Bin': {
      params: [
        { key: 'bin_size', label: 'Bin Size', type: 'number', placeholder: '10' }
      ],
      example: (params: any) => ({
        input: `25`,
        output: `20`,
        context: `bin size: ${params?.bin_size || 10}`
      })
    },
    'Reduce': {
      params: [
        { key: 'strategy', label: 'Strategy', type: 'select', options: ['Mean', 'Sum', 'Min', 'Max'] }
      ],
      example: (params: any) => ({
        input: `[1,2,3]`,
        output: `2`,
        context: `using ${params?.strategy || 'Mean'}`
      })
    },
    'Convert Date': {
      params: [
        { key: 'format', label: 'Output Format', type: 'text', placeholder: 'YYYY-MM-DD' }
      ],
      example: (params: any) => ({
        input: `"01/01/2020"`,
        output: `"2020-01-01"`,
        context: `format: ${params?.format || 'YYYY-MM-DD'}`
      })
    },
    'Round': {
      params: [
        { key: 'decimals', label: 'Decimals', type: 'number', placeholder: '2' }
      ],
      example: (params: any) => ({
        input: `10.567`,
        output: `10.57`,
        context: `decimals: ${params?.decimals || 2}`
      })
    },
    'Threshold': {
      params: [
        { key: 'value', label: 'Threshold', type: 'number', placeholder: '50' }
      ],
      example: (params: any) => ({
        input: `42`,
        output: `false`,
        context: `threshold: ${params?.value || 50}`
      })
    }
  };

  get transformationOptions() {
    return Object.keys(this.primitiveConfigs);
  }

  get activeConfig() {
    const step = this.currentStep();
    if (!step) return null;
    const config = this.primitiveConfigs[step.transformation];
    return config ? { ...config, name: step.transformation } : null;
  }

  getStepIndex(row: any, stepId: number): number {
    if (!row || !row.steps) return -1;
    return row.steps.findIndex((s: any) => s.id === stepId);
  }

  currentStep = computed(() => {
    const selected = this.uploadService.selectedMappingRow();
    if (!selected || !selected.selectedStepId) return null;
    return selected.steps.find((s: any) => s.id === selected.selectedStepId);
  });

  updateTransformation(transformation: string) {
    this.uploadService.updateTransformation(transformation);
  }

  updateParam(key: string, value: any) {
    this.uploadService.updateParam(key, value);
  }
}
