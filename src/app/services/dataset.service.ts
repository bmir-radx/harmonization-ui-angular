import { Injectable, signal, computed, inject } from '@angular/core';
import Papa from 'papaparse';
import { UploadedFile } from '../models/mapping.model';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class DatasetService {
    private messageService = inject(MessageService);

    readonly triggerFileDialog = signal(false);
    readonly visible = signal<boolean>(false);
    readonly selectedFolder = signal<string | null>(null);

    readonly uploadedFile = signal<File | null>(null);
    readonly uploadedFiles = signal<UploadedFile[]>([]);
    readonly targetFiles = signal<UploadedFile[]>([]);

    readonly openedFiles = signal<UploadedFile[]>([]);
    readonly activeFile = signal<UploadedFile | null>(null);

    readonly hasFiles = computed(() => this.uploadedFiles().length > 0);

    readonly hasValidMappingState = computed(() => {
        const hasTarget = this.targetFiles().length > 0;
        const hasSourceGroup = this.uploadedFiles().some(f => {
            const folderFiles = this.uploadedFiles().filter(sf => sf.folder === f.folder);
            const hasDictionary = folderFiles.some(sf => sf.type === 'dictionary');
            const hasData = folderFiles.some(sf => sf.type === 'data');
            return hasDictionary && hasData;
        });

        return hasTarget && hasSourceGroup;
    });

    openFileDialog() {
        this.triggerFileDialog.set(true);
    }

    resetFileDialog() {
        this.triggerFileDialog.set(false);
    }

    openMappingsTab() {
        const mappingsFile: UploadedFile = {
            name: 'Mappings',
            type: 'mappings',
            data: [],
            text: '',
            folder: 'system'
        };

        this.openFile(mappingsFile);
    }

    setFile(file: File | null) {
        this.uploadedFile.set(file);
    }

    addFile(file: UploadedFile) {
        this.uploadedFiles.update(files => [...files, file]);
    }

    addFileFromText(name: string, text: string, type: string, folder: string, path?: string, parseAsCsv: boolean = false) {
        let data: any[] = [];
        if (parseAsCsv) {
            const result = Papa.parse(text, { header: true, skipEmptyLines: true });
            data = result.data;
        }

        const uploadedFile: UploadedFile = {
            name,
            type,
            data,
            text,
            folder,
            path
        };

        this.addFile(uploadedFile);
        return uploadedFile;
    }

    addTargetFile(file: UploadedFile) {
        this.targetFiles.update(files => [...files, file]);
    }

    openFile(file: UploadedFile) {
        this.openedFiles.update(files =>
            files.some(f => f.name === file.name) ? files : [...files, file]
        );
        this.activeFile.set(file);
    }

    closeFile(file: UploadedFile) {
        this.openedFiles.update(files => files.filter(f => f.name !== file.name));
        const files = this.openedFiles();
        this.activeFile.set(files.length ? files[files.length - 1] : null);
    }

    showDialog() {
        this.visible.set(true);
    }

    hideDialog() {
        this.visible.set(false);
    }

    selectFolder(folder: string) {
        this.selectedFolder.set(folder);
    }

    clearFolder() {
        this.selectedFolder.set(null);
    }

    async parseCSV(file: File, type: string): Promise<void> {
        const text = await file.text();

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                let filePath = (file as any).path;
                if (!filePath && (window as any).electron?.getFilePath) {
                    filePath = (window as any).electron.getFilePath(file);
                }

                this.addFile({
                    name: file.name,
                    type: type,
                    data: result.data,
                    text: text,
                    folder: this.selectedFolder() ?? this.getNextDatasetName(),
                    path: filePath
                });
            },
            error: (error) => {
                console.error('Error parsing CSV:', error);
                this.messageService.add({ severity: 'error', summary: 'Parse Error', detail: 'Could not parse CSV file.' });
            }
        });
    }

    async parseTargetCSV(file: File): Promise<void> {
        const text = await file.text();

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                let filePath = (file as any).path;
                if (!filePath && (window as any).electron?.getFilePath) {
                    filePath = (window as any).electron.getFilePath(file);
                }

                this.addTargetFile({
                    name: file.name,
                    type: 'dictionary',
                    data: result.data,
                    text: text,
                    folder: this.selectedFolder() ?? this.getNextDatasetName(),
                    path: filePath
                });
            },
            error: (error) => {
                console.error('Error parsing Target CSV:', error);
                this.messageService.add({ severity: 'error', summary: 'Parse Error', detail: 'Could not parse Target dictionary.' });
            }
        });
    }

    getNextDatasetName(): string {
        const folders = new Set<string>();
        this.uploadedFiles().forEach(f => folders.add(f.folder));
        this.targetFiles().forEach(f => folders.add(f.folder));

        const datasetFolders = Array.from(folders).filter(f => f && f.startsWith('Dataset '));

        if (datasetFolders.length === 0) return 'Dataset 1';

        let max = 0;
        datasetFolders.forEach(name => {
            const parts = name.split(' ');
            if (parts.length > 1) {
                const num = parseInt(parts[1]);
                if (!isNaN(num) && num > max) max = num;
            }
        });

        return `Dataset ${max + 1}`;
    }


}
