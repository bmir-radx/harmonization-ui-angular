import { Injectable, signal, computed, effect, untracked, inject } from '@angular/core';
import { MappingRow, TargetOption, TransformationStep, UploadedFile } from '../models/mapping.model';
import { DatasetService } from './dataset.service';
import { HarmonizationApiService, HarmonizeParams, RpcResponse } from './harmonization-api.service';
import { MessageService } from 'primeng/api';
import { PRIMITIVE_CONFIGS } from '../constants/transformations';

@Injectable({
    providedIn: 'root'
})
export class MappingService {
    private datasetService = inject(DatasetService);
    private harmonizationApi = inject(HarmonizationApiService);
    private messageService = inject(MessageService);

    readonly mappingRows = signal<MappingRow[]>([]);
    readonly selectedRowId = signal<number | null>(null);

    readonly selectedMappingRow = computed(() => {
        const id = this.selectedRowId();
        if (id === null) return null;
        return this.mappingRows().find(r => r.id === id) || null;
    });

    readonly isReady = computed(() => {
        return this.mappingRows().some(row => row.status === 'complete');
    });

    readonly targetOptions = computed<TargetOption[]>(() => {
        const options: TargetOption[] = [];
        const files = this.datasetService.targetFiles();

        files.forEach(file => {
            if (file.data && Array.isArray(file.data)) {
                file.data.forEach(element => {
                    const name = element['Variable Name'] || element['Variable name'] || element['variable_name'] ||
                        element['Id'] || element['ID'] || element['id'] || element['name'] || element['Name'];
                    const label = element['Label'] || element['label'] || element['Description'] || element['description'] || name;
                    const type = element['Type'] || element['type'] || element['Datatype'] || element['datatype'] || 'String';

                    if (name) {
                        options.push({
                            label: `${name}${label && label !== name ? ' - ' + label : ''}`,
                            value: name,
                            type: type
                        });
                    }
                });
            }
        });

        const unique = new Map<string, TargetOption>();
        options.forEach(o => unique.set(o.value, o));
        return Array.from(unique.values());
    });

    constructor() {
        effect(() => {
            const files = this.datasetService.uploadedFiles();
            const currentRows = untracked(() => this.mappingRows());

            const newRows: MappingRow[] = [];
            let maxId = currentRows.reduce((max, r) => Math.max(max, r.id), 0);

            files.forEach(file => {
                if (file.type === 'dictionary') {
                    file.data.forEach(element => {
                        const varName = element['Id'] || element['Variable Name'] || element['name'] || 'Unknown';
                        const dataset = file.folder;

                        const existing = currentRows.filter(r => r.sourceElement === varName && r.dataset === dataset);

                        if (existing.length > 0) {
                            newRows.push(...existing);
                        } else {
                            newRows.push({
                                id: ++maxId,
                                dataset: dataset,
                                sourceElement: varName,
                                targetElement: null,
                                status: 'attention',
                                steps: [],
                                selectedStepId: null
                            });
                        }
                    });
                }
            });

            this.mappingRows.set(newRows);

            const currentSelectedId = untracked(() => this.selectedRowId());
            if (newRows.length > 0 && (!currentSelectedId || !newRows.find(r => r.id === currentSelectedId))) {
                this.selectedRowId.set(newRows[0].id);
            }
        });
    }

    selectMappingRow(row: MappingRow | null) {
        this.selectedRowId.set(row ? row.id : null);
    }

    updateMappingStatus(rowIndex: number, value: any) {
        this.mappingRows.update(rows => {
            const newRows = [...rows];
            newRows[rowIndex] = {
                ...newRows[rowIndex],
                targetElement: value,
                status: newRows[rowIndex].status === 'complete' ? 'complete' as const : 'attention' as const
            };
            return newRows;
        });
    }

    selectTransformationStep(stepId: number | null) {
        this.mappingRows.update(rows => {
            const selectedId = this.selectedRowId();
            return rows.map(row => {
                if (row.id === selectedId) {
                    return { ...row, selectedStepId: stepId };
                }
                return row;
            });
        });
    }

    addTransformationStep() {
        const selectedId = this.selectedRowId();
        if (selectedId === null) return;

        const newStepId = Date.now();

        this.mappingRows.update(rows => {
            return rows.map(row => {
                if (row.id === selectedId) {
                    return {
                        ...row,
                        steps: [...(row.steps || []), { id: newStepId, transformation: '', params: {} }],
                        selectedStepId: newStepId
                    };
                }
                return row;
            });
        });
    }

    removeTransformationStep(stepIndex: number) {
        const selected = this.selectedMappingRow();
        if (!selected) return;

        this.mappingRows.update(rows => {
            return rows.map(row => {
                if (row.id === selected.id) {
                    const steps = row.steps.filter((_, i) => i !== stepIndex);
                    const wasSelected = row.selectedStepId === row.steps[stepIndex]?.id;

                    return {
                        ...row,
                        steps: steps,
                        selectedStepId: wasSelected ? (steps.length > 0 ? steps[steps.length - 1].id : null) : row.selectedStepId
                    };
                }
                return row;
            });
        });
    }

    updateTransformation(transformation: string) {
        const selectedId = this.selectedRowId();
        if (selectedId === null) return;

        this.mappingRows.update(rows => {
            return rows.map(row => {
                if (row.id === selectedId) {
                    const steps = (row.steps || []).map(step => {
                        if (step.id === row.selectedStepId) {
                            return { ...step, transformation, params: {} };
                        }
                        return step;
                    });
                    return { ...row, steps };
                }
                return row;
            });
        });
    }

    updateParam(key: string, value: any) {
        const selectedId = this.selectedRowId();
        if (selectedId === null) return;

        this.mappingRows.update(rows => {
            return rows.map(row => {
                if (row.id === selectedId) {
                    const steps = (row.steps || []).map(step => {
                        if (step.id === row.selectedStepId) {
                            return { ...step, params: { ...step.params, [key]: value } };
                        }
                        return step;
                    });
                    return { ...row, steps };
                }
                return row;
            });
        });
    }

    duplicateMappingRow(row: MappingRow) {
        this.mappingRows.update(rows => {
            const maxId = rows.reduce((max, r) => Math.max(max, r.id), 0);
            const newRow = {
                ...row,
                id: maxId + 1,
                targetElement: null,
                status: 'attention' as const,
                steps: [],
                selectedStepId: null
            };
            const index = rows.findIndex(r => r.id === row.id);
            const newRows = [...rows];
            newRows.splice(index + 1, 0, newRow);
            return newRows;
        });
    }

    removeMappingRow(row: MappingRow) {
        this.mappingRows.update(rows => {
            const newRows = rows.filter(r => r.id !== row.id);
            if (this.selectedRowId() === row.id) {
                this.selectedRowId.set(newRows.length > 0 ? newRows[0].id : null);
            }
            return newRows;
        });
    }

    saveCurrentRule() {
        const selectedId = this.selectedRowId();
        if (selectedId === null) return;

        this.mappingRows.update(rows => {
            return rows.map(row => {
                if (row.id === selectedId) {
                    if (!row.targetElement) return row;
                    return { ...row, status: 'complete' as const };
                }
                return row;
            });
        });
    }

    getTargetDetails(variableName: string) {
        for (const file of this.datasetService.targetFiles()) {
            const match = file.data.find(d =>
                (d['Variable Name'] || d['Variable name'] || d['variable_name'] || d['Id'] || d['name']) === variableName
            );
            if (match) return match;
        }
        return null;
    }

    // API Methods
    async runHarmonization() {
        console.log('Starting harmonization...');
        const rulesOutput: Record<string, Record<string, any>> = {};
        const pairs: { source: string; target: string }[] = [];

        this.mappingRows()
            .filter(row => row.status === 'complete')
            .forEach(row => {
                const operations = row.steps.map(step => {
                    const combinedParams = { ...(step.params || {}) };
                    return { operation: step.transformation, ...combinedParams };
                });

                if (!rulesOutput[row.sourceElement]) rulesOutput[row.sourceElement] = {};
                rulesOutput[row.sourceElement][row.targetElement!] = {
                    source: row.sourceElement,
                    target: row.targetElement,
                    operations: operations
                };

                pairs.push({ source: row.sourceElement, target: row.targetElement! });
            });

        const sourceFile = [...this.datasetService.uploadedFiles()].reverse().find(f => f.type === 'data');
        if (!sourceFile) return;

        let basePath = '/Users/mete/HARMONIZATION/harmonization-ui-angular/tmp';
        if (sourceFile.path) {
            const lastSlash = sourceFile.path.lastIndexOf('/');
            if (lastSlash !== -1) basePath = sourceFile.path.substring(0, lastSlash);
        }

        const rulesPath = `${basePath}/rules.json`;
        const outputPath = `${basePath}/output.csv`;
        const replayLogPath = `${basePath}/replay.log`;

        try {
            if ((window as any).electron) {
                await (window as any).electron.saveFile(rulesPath, JSON.stringify(rulesOutput, null, 2));
            }

            const params: HarmonizeParams = {
                data_file_path: sourceFile.path || `${basePath}/${sourceFile.name}`,
                rules_file_path: rulesPath,
                replay_log_file_path: replayLogPath,
                output_file_path: outputPath,
                mode: 'pairs',
                pairs: pairs,
                overwrite: true
            };

            this.harmonizationApi.harmonize(params).subscribe({
                next: (response: RpcResponse) => {
                    if (response.job_id) {
                        this.pollJob(response.job_id, outputPath, sourceFile!.folder);
                    }
                },
                error: (err) => {
                    this.messageService.add({ severity: 'error', summary: 'Harmonization Failed', detail: err.message });
                }
            });
        } catch (err) {
            console.error('Error during harmonization preparation:', err);
        }
    }

    private pollJob(jobId: string, outputPath: string, targetFolder: string) {
        const interval = setInterval(() => {
            this.harmonizationApi.getJob(jobId).subscribe({
                next: (res: RpcResponse) => {
                    if (res.status === 'completed') {
                        clearInterval(interval);
                        this.handleJobCompletion(res, targetFolder);
                    } else if (res.status === 'failed') {
                        clearInterval(interval);
                        this.messageService.add({ severity: 'error', summary: 'Job Failed', detail: 'Harmonization failed.' });
                    }
                },
                error: () => clearInterval(interval)
            });
        }, 2000);
    }

    private handleJobCompletion(result: any, targetFolder: string) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Harmonization completed.' });
    }
}
