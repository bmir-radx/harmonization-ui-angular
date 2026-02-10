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

  get transformationOptions() {
    return Object.entries(this.uploadService.primitiveConfigs).map(([key, config]) => ({
      label: config.label,
      value: key
    }));
  }

  get activeConfig() {
    const step = this.currentStep();
    if (!step) return null;
    const config = this.uploadService.primitiveConfigs[step.transformation];
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

  getDataClass(type: string): string {
    const dataType = (type || '').toLowerCase();

    switch (dataType) {
      case 'string':
      case 'text':
      case 'varchar':
      case 'char':
      case 'str':
      case 'categorical':
        return 'text-[#4ec9b0]';

      case 'integer':
      case 'int':
      case 'number':
      case 'numeric':
      case 'whole':
        return 'text-[#007fd4]';

      case 'decimal':
      case 'float':
      case 'double':
      case 'real':
      case 'currency':
      case 'money':
        return 'text-[#ff9500]';

      case 'date':
      case 'time':
      case 'datetime':
      case 'timestamp':
      case 'temporal':
        return 'text-[#c586c0]';

      case 'boolean':
      case 'bool':
      case 'logical':
      case 'binary':
      case 'flag':
      case 'indicator':
        return 'text-[#ff6b6b]';

      default:
        return 'text-[#606060]';
    }
  }

  getDataChar(type: string): string {
    const dataType = (type || 'string').toLowerCase();
    return dataType === 'datetime' ? 't' : (dataType.charAt(0) || 's').toLowerCase();
  }
}
