import { Injectable, signal, computed } from '@angular/core';
import Papa from 'papaparse';

export interface UploadedFile {
  name: string;
  type: string;
  data: any[];
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  readonly triggerFileDialog = signal(false);
  visible = signal<boolean>(false);

  uploadedFile = signal<File | null>(null);
  uploadedFiles = signal<UploadedFile[]>([]);

  openedFiles = signal<UploadedFile[]>([]);
  activeFile = signal<UploadedFile | null>(null);

  hasFiles = computed(() => this.uploadedFiles().length > 0);

  openFileDialog() {
    this.triggerFileDialog.set(true);
  }

  resetFileDialog() {
    this.triggerFileDialog.set(false);
  }

  setFile(file: File | null) {
    this.uploadedFile.set(file);
  }

  addFile(file: UploadedFile) {
    this.uploadedFiles.update(files => [...files, file]);
  }

  openFile(file: UploadedFile) {
    this.openedFiles.update(files =>
        files.some(f => f.name === file.name) ? files : [...files, file]
    );
    this.activeFile.set(file);
    console.log(this.activeFile()?.name);
  }

  closeFile(file: UploadedFile) {
    this.openedFiles.update(files => files.filter(f => f.name !== file.name));
    const files = this.openedFiles();
    console.log(files);
    this.activeFile.set(files.length ? files[files.length - 1] : null);
    console.log(this.activeFile()?.name);
  }

  showDialog() {
    this.visible.set(true);
  }

  hideDialog() {
    this.visible.set(false);
  }

  onSelectType(type: string): void {
    if (this.uploadedFile) {
      this.parseCSV(this.uploadedFile()!, type);
    }

    this.hideDialog();
  }

  async parseCSV(file: File, type: string): Promise<void> {
    const text = await file.text();

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
        this.addFile({
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
