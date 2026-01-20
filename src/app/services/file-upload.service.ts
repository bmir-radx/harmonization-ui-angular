import { Injectable, signal, computed } from '@angular/core';
import Papa from 'papaparse';

export interface UploadedFile {
  name: string;
  type: string;
  data: any[];
  text: string;
  folder: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  readonly triggerFileDialog = signal(false);
  visible = signal<boolean>(false);

  selectedFolder = signal<string | null>(null);

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

  selectFolder(name: string) {
    this.selectedFolder.set(name);
  }

  clearFolder() {
    this.selectedFolder.set(null);
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
    console.log('Setting active file: ', this.activeFile()?.name);
  }

  closeFile(file: UploadedFile) {
    this.openedFiles.update(files => files.filter(f => f.name !== file.name));
    const files = this.openedFiles();
    console.log('Closed tabs. Remaining opened files: ', files);
    this.activeFile.set(files.length ? files[files.length - 1] : null);
    console.log('Setting active file: ', this.activeFile()?.name);
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
          text: text,
          folder: this.selectedFolder() ?? file.name
        });
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  }

  // Target Data Dictionary Management
  targetFiles = signal<UploadedFile[]>([]);

  addTargetFile(file: UploadedFile) {
    this.targetFiles.update(files => [...files, file]);
  }

  async parseTargetCSV(file: File): Promise<void> {
    const text = await file.text();

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
        this.addTargetFile({
          name: file.name,
          type: 'dictionary',
          data: result.data,
          text: text,
          folder: file.name // Default to filename as folder/group
        });
      },
      error: (error) => {
        console.error('Error parsing Target CSV:', error);
      }
    });
  }
}
