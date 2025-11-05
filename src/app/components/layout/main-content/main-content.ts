import { Component, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { TabsModule } from 'primeng/tabs';
import { Button } from '../../ui/button.component';
import { ThemeService } from '../../../services/theme.service';
import { UploadService } from '../../../services/file-upload.service';
import Papa from 'papaparse';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, Dialog, TabsModule, Button],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainContent {
  isDarkMode = true;
  constructor(public uploadService: UploadService, private themeService: ThemeService) {
    effect(() => {
      this.isDarkMode = this.themeService.isDarkMode()();
    });
  }

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  uploadedFile: File | null = null;

  visible: boolean = false;

  getHeaders(data: string[]) {
    return Object.keys(data[0]);
  }

  onUploadSourceData() {
    this.fileInput.nativeElement.click();
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      console.log('Selected file:', this.uploadedFile);

      this.showDialog();
    }

    input.value = '';
  }

  onSelectType(type: string): void {
    if (this.uploadedFile) {
      this.parseCSV(this.uploadedFile, type);
    }

    this.hideDialog();
  }

  async parseCSV(file: File, type: string): Promise<void> {
    const text = await file.text();

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
        console.log('Parsed CSV result:', result.data);
        this.uploadService.addFile({
          name: file.name,
          type: type,
          data: result.data,
          text: text
        });
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  }
}
