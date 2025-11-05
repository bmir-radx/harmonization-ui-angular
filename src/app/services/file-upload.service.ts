import { Injectable, signal, computed } from '@angular/core';

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
  uploadedFiles = signal<UploadedFile[]>([]);
  openedFiles = signal<UploadedFile[]>([]);
  activeFile = signal<string>('');

  hasFiles = computed(() => this.uploadedFiles().length > 0);

  addFile(file: UploadedFile) {
    this.uploadedFiles.update(files => [...files, file]);
  }

  clearFiles() {
    this.uploadedFiles.set([]);
  }

  openFile(file: UploadedFile) {
    this.openedFiles.update(files =>
        files.some(f => f.name === file.name) ? files : [...files, file]
    );
    this.activeFile.set(file.name);
    console.log(this.activeFile());
  }

  closeFile(file: UploadedFile) {
    this.openedFiles.update(files => files.filter(f => f.name !== file.name));
    const files = this.openedFiles();
    console.log(files);
    this.activeFile.set(files.length ? files[files.length - 1].name : '');
    console.log(this.activeFile());
  }
}
