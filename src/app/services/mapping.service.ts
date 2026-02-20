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

    readonly completedRulesCount = computed(() => {
        return this.mappingRows().filter(row => row.status === 'complete').length;
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
        console.log(`Updating mapping status for row ${rowIndex} to value:`, value);
        this.mappingRows.update(rows => {
            const newRows = [...rows];
            if (newRows[rowIndex]) {
                const currentStatus = newRows[rowIndex].status;
                newRows[rowIndex] = {
                    ...newRows[rowIndex],
                    targetElement: value,
                    // If we change the target element, maybe we should re-verify? 
                    // For now, keep as 'complete' if it was already complete, unless value is cleared.
                    status: !value ? 'attention' : (currentStatus === 'complete' ? 'complete' : 'attention')
                };
            }
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
        console.log('Attempting to save current rule for ID:', selectedId);
        if (selectedId === null) {
            console.warn('No row selected to save rule.');
            return;
        }

        this.mappingRows.update(rows => {
            return rows.map(row => {
                if (row.id === selectedId) {
                    console.log('Found row to save, targetElement:', row.targetElement);
                    if (!row.targetElement) {
                        console.warn('Cannot save rule without a target element.');
                        return row;
                    }
                    this.messageService.add({ severity: 'success', summary: 'Rule Saved', detail: `Rule for ${row.sourceElement} saved.` });
                    return { ...row, status: 'complete' as const };
                }
                return row;
            });
        });
    }

    getTargetDetails(variableName: string) {
        if (!variableName) return null;

        const searchName = String(variableName).trim();
        for (const file of this.datasetService.targetFiles()) {
            if (!file.data || !Array.isArray(file.data)) continue;

            const match = file.data.find(d => {
                const keys = ['Variable Name', 'Variable name', 'variable_name', 'Variable', 'variable', 'Id', 'ID', 'id', 'name', 'Name', 'Field Name', 'Field name', 'Label'];
                return keys.some(k => {
                    const val = d[k];
                    return val && String(val).trim() === searchName;
                });
            });
            if (match) return match;
        }
        return null;
    }
    getSourceDetails(variableName: string, dataset: string) {
        if (!variableName || !dataset) return null;

        const searchName = String(variableName).trim();
        for (const file of this.datasetService.uploadedFiles()) {
            if (file.folder === dataset && file.type === 'dictionary' && file.data && Array.isArray(file.data)) {
                const match = file.data.find(d => {
                    const keys = ['Variable Name', 'Variable name', 'variable_name', 'Variable', 'variable', 'Id', 'ID', 'id', 'name', 'Name', 'Field Name', 'Field name', 'Label'];
                    return keys.some(k => {
                        const val = d[k];
                        return val && String(val).trim() === searchName;
                    });
                });
                if (match) return match;
            }
        }
        return null;
    }

    // API Methods
    async runHarmonization() {
        console.log('Starting harmonization process...');
        const rulesOutput: Record<string, Record<string, any>> = {};
        const pairs: { source: string; target: string }[] = [];

        const completedRows = this.mappingRows().filter(row => row.status === 'complete');
        console.log(`Found ${completedRows.length} completed rules.`);

        if (completedRows.length === 0) {
            console.warn('No completed rules to harmonize.');
            this.messageService.add({ severity: 'warn', summary: 'No Rules', detail: 'Please save at least one rule first.' });
            return;
        }

        completedRows.forEach(row => {
            const operations = row.steps.map(step => {
                const combinedParams = { ...(step.params || {}) };

                // For enum_to_enum, ensure mapping is a clean object (no __empty_ keys)
                if (step.transformation === 'enum_to_enum' && combinedParams['mapping']) {
                    let mapping = combinedParams['mapping'];
                    if (typeof mapping === 'string') {
                        try { mapping = JSON.parse(mapping); } catch (e) { }
                    }

                    if (typeof mapping === 'object' && mapping !== null) {
                        const cleanMapping: Record<string, string> = {};
                        Object.entries(mapping).forEach(([key, val]) => {
                            if (!key.startsWith('__empty_')) {
                                cleanMapping[key] = String(val);
                            }
                        });
                        combinedParams['mapping'] = cleanMapping;
                    }
                }

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
        console.log('Target source file for harmonization:', sourceFile);

        if (!sourceFile) {
            console.error('No data file found for harmonization.');
            this.messageService.add({ severity: 'error', summary: 'Missing Data', detail: 'No data file found to harmonize.' });
            return;
        }

        let basePath = '/tmp'; // Default fallback
        if ((window as any).electron) {
            // Try to use a better default for Electron
            basePath = sourceFile.path ? sourceFile.path.substring(0, sourceFile.path.lastIndexOf('/')) : '';
        }

        const rulesPath = basePath ? `${basePath}/rules.json` : 'rules.json';
        const outputPath = basePath ? `${basePath}/output.csv` : 'output.csv';
        const replayLogPath = basePath ? `${basePath}/replay.log` : 'replay.log';

        console.log('Harmonization paths:', { rulesPath, outputPath, replayLogPath });

        try {
            if ((window as any).electron && (window as any).electron.saveFile) {
                console.log('Saving rules.json via Electron to:', rulesPath);
                await (window as any).electron.saveFile(rulesPath, JSON.stringify(rulesOutput, null, 2));
            } else {
                console.log('Skipping Electron file save (possibly web mode or API not available).');
            }

            const params: HarmonizeParams = {
                data_file_path: sourceFile.path || sourceFile.name,
                rules_file_path: rulesPath,
                replay_log_file_path: replayLogPath,
                output_file_path: outputPath,
                mode: 'pairs',
                pairs: pairs,
                overwrite: true
            };

            this.messageService.add({ severity: 'info', summary: 'Harmonization Submitted', detail: 'Submitting harmonization request to the server...', life: 15000 });

            console.log('\n--- HARMONIZATION REQUEST PARAMS ---');
            console.log(JSON.stringify(params, null, 2));

            this.harmonizationApi.harmonize(params).subscribe({
                next: (response: RpcResponse) => {
                    console.log('\n--- HARMONIZE API SUBMISSION RESPONSE ---');
                    console.log(JSON.stringify(response, null, 2));

                    const resultPaths = { outputPath, rulesPath, replayLogPath };
                    if (response.job_id) {
                        console.log('Starting job polling for:', response.job_id);
                        this.messageService.add({ severity: 'info', summary: 'Job Queued', detail: `Harmonization job queued. Waiting to start...`, life: 15000 });
                        this.pollJob(response.job_id, resultPaths, sourceFile!.folder);
                    } else if (response.result) {
                        this.messageService.add({ severity: 'info', summary: 'Running Synchronously', detail: `Job is executing and processing results...`, life: 15000 });
                        this.handleJobCompletion(resultPaths, sourceFile!.folder);
                    } else if (response.error) {
                        console.error('API returned error:', response.error);
                        this.handleError(response.error);
                    }
                },
                error: (err) => {
                    console.error('Harmonize API call failed:', err);
                    this.messageService.add({ severity: 'error', summary: 'API Error', detail: err.message || 'Harmonization call failed.' });
                }
            });
        } catch (err: any) {
            console.error('Unexpected error during harmonization preparation:', err);
            this.messageService.add({ severity: 'error', summary: 'Preparation Error', detail: err.message || 'An error occurred.' });
        }
    }

    private handleError(error: any) {
        const detail = typeof error === 'string' ? error : (error.message || 'An error occurred');
        this.messageService.add({ severity: 'error', summary: 'Error', detail });
    }

    private pollJob(jobId: string, resultPaths: { outputPath: string; rulesPath: string; replayLogPath: string }, targetFolder: string) {
        console.log(`Starting polling for job ID: ${jobId}`);
        let hasStarted = false;

        const interval = setInterval(() => {
            console.log(`Requesting status for job ${jobId}...`);
            this.harmonizationApi.getJob(jobId).subscribe({
                next: (res: RpcResponse) => {
                    console.log(`\n--- POLLING API RESPONSE FOR JOB ${jobId} ---`);
                    console.log(JSON.stringify(res, null, 2));


                    if (res.status === 'running' && !hasStarted) {
                        hasStarted = true;
                        this.messageService.add({ severity: 'info', summary: 'Job Started', detail: `Job is now actively running in the background...`, life: 15000 });
                    }

                    // Handle both 'completed' and 'success' as finished states
                    if (res.status === 'completed' || res.status === 'success') {
                        console.log(`Job ${jobId} marked as completed/success.`);
                        clearInterval(interval);
                        this.messageService.add({ severity: 'success', summary: 'Job Finished', detail: 'Harmonization completed remotely. Fetching output files...', life: 15000 });
                        this.handleJobCompletion(resultPaths, targetFolder);
                    } else if (res.status === 'failed' || res.status === 'error') {
                        console.error(`Job ${jobId} failed with error:`, res.error);
                        clearInterval(interval);
                        this.messageService.add({ severity: 'error', summary: 'Job Failed', detail: res.error || 'Harmonization failed during execution.', life: 15000 });
                    }
                },
                error: (err) => {
                    console.error(`Endpoint error while polling job ${jobId}:`, err);
                    // Do not clear interval on network blips, keep trying
                }
            });
        }, 3000);
    }

    private async handleJobCompletion(resultPaths: { outputPath: string; rulesPath: string; replayLogPath: string }, targetFolder: string) {
        console.log('Harmonization job completed. Processing results at paths:', resultPaths);

        try {
            if ((window as any).electron) {
                let loadedOutputs = 0;

                // Read and add output.csv
                try {
                    const outputText = await (window as any).electron.readFile(resultPaths.outputPath);
                    if (outputText) {
                        const outputFile = this.datasetService.addFileFromText('output.csv', outputText, 'data', targetFolder, resultPaths.outputPath, true);
                        this.datasetService.openFile(outputFile);
                        loadedOutputs++;
                        console.log('Added and opened output.csv');
                    } else {
                        throw new Error('File was empty or not found');
                    }
                } catch (e: any) {
                    console.warn('Could not read output.csv:', e);
                    this.messageService.add({ severity: 'warn', summary: 'Missing Output', detail: 'Could not load output.csv. It may be missing, too large, or failed locally.', life: 15000 });
                }

                // Read and add replay.log
                try {
                    const logText = await (window as any).electron.readFile(resultPaths.replayLogPath);
                    if (logText) {
                        this.datasetService.addFileFromText('replay.log', logText, 'replay', targetFolder, resultPaths.replayLogPath, false);
                        loadedOutputs++;
                        console.log('Added replay.log');
                    }
                } catch (e) {
                    console.warn('Could not read replay.log:', e);
                }

                // Read and add rules.json
                try {
                    const rulesText = await (window as any).electron.readFile(resultPaths.rulesPath);
                    if (rulesText) {
                        let formattedText = rulesText;
                        try {
                            const rulesObj = JSON.parse(rulesText);
                            formattedText = JSON.stringify(rulesObj, null, 2);
                        } catch (e) {
                            console.warn('Could not parse rules.json for formatting provided raw content instead.');
                        }
                        this.datasetService.addFileFromText('rules.json', formattedText, 'rules', targetFolder, resultPaths.rulesPath, false);
                        loadedOutputs++;
                        console.log('Added rules.json');
                    }
                } catch (e) {
                    console.warn('Could not read rules.json:', e);
                }

                if (loadedOutputs > 0) {
                    this.messageService.add({ severity: 'success', summary: 'Output Ready', detail: `Successfully loaded ${loadedOutputs} results to the sidebar.`, life: 15000 });
                }
            } else {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Harmonization completed.', life: 10000 });
            }

        } catch (err) {
            console.error('Error handling job completion:', err);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to process harmonization results.' });
        }
    }
}
