import { Injectable, inject } from '@angular/core';
import { ProjectState } from '../models/mapping.model';
import { DatasetService } from './dataset.service';
import { MappingService } from './mapping.service';
import { ProjectService } from './project.service';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class PersistenceService {
    private datasetService = inject(DatasetService);
    private mappingService = inject(MappingService);
    private projectService = inject(ProjectService);
    private messageService = inject(MessageService);

    async saveProject(filePath: string): Promise<void> {
        const state: ProjectState = {
            projectName: this.projectService.currentProject()?.name || filePath.split('/').pop()?.replace('.harm', '') || 'Untitled Project',
            uploadedFiles: this.datasetService.uploadedFiles(),
            targetFiles: this.datasetService.targetFiles(),
            mappingRows: this.mappingService.mappingRows(),
            openedFiles: this.datasetService.openedFiles(),
            activeFileName: this.datasetService.activeFile()?.name || null,
            lastModified: new Date().toISOString(),
            version: '1.0.0'
        };

        try {
            if ((window as any).electron?.saveFile) {
                await (window as any).electron.saveFile(filePath, JSON.stringify(state, null, 2));
                this.messageService.add({
                    severity: 'success',
                    summary: 'Project Saved',
                    detail: `Project saved to ${filePath.split('/').pop()}`
                });
            } else {
                // Fallback for web
                const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'project.harm';
                a.click();
                URL.revokeObjectURL(url);
            }
        } catch (error: any) {
            this.messageService.add({ severity: 'error', summary: 'Save Failed', detail: error.message });
        }
    }

    async saveProjectWithDialog(): Promise<void> {
        if ((window as any).electron?.showSaveDialog) {
            const result = await (window as any).electron.showSaveDialog();
            if (!result.canceled && result.filePath) {
                await this.saveProject(result.filePath);
            }
        } else {
            await this.saveProject('project.harm');
        }
    }

    async loadProjectWithDialog(): Promise<void> {
        if ((window as any).electron?.showOpenDialog) {
            const result = await (window as any).electron.showOpenDialog();
            if (!result.canceled && result.filePaths.length > 0) {
                await this.loadProject(result.filePaths[0]);
            }
        }
    }

    async loadProject(filePath: string): Promise<void> {
        try {
            if ((window as any).electron?.readFile) {
                const content = await (window as any).electron.readFile(filePath);
                const state: ProjectState = JSON.parse(content);
                this.applyState(state);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Project Loaded',
                    detail: `Project loaded from ${filePath.split('/').pop()}`
                });
            }
        } catch (error: any) {
            this.messageService.add({ severity: 'error', summary: 'Load Failed', detail: error.message });
        }
    }

    private applyState(state: ProjectState) {
        // Clear current state first
        this.datasetService.uploadedFiles.set([]);
        this.datasetService.targetFiles.set([]);
        this.mappingService.mappingRows.set([]);
        this.datasetService.openedFiles.set([]);
        this.datasetService.activeFile.set(null);

        // Apply new state
        this.datasetService.uploadedFiles.set(state.uploadedFiles || []);
        this.datasetService.targetFiles.set(state.targetFiles || []);

        if (state.mappingRows) {
            this.mappingService.mappingRows.set(state.mappingRows);
        }

        if (state.projectName) {
            this.projectService.setProject({ name: state.projectName, description: '' });
        }

        // Restore UI state
        if (state.openedFiles && state.openedFiles.length > 0) {
            this.datasetService.openedFiles.set(state.openedFiles);
            const active = state.openedFiles.find(f => f.name === state.activeFileName) || state.openedFiles[0];
            this.datasetService.activeFile.set(active);
        } else if (this.datasetService.hasValidMappingState()) {
            this.datasetService.openMappingsTab();
        }
    }
}
