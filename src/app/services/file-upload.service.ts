import { Injectable, signal, computed, effect, untracked, inject } from '@angular/core';
import Papa from 'papaparse';
import { HarmonizationApiService } from './harmonization-api.service';
import { firstValueFrom } from 'rxjs';
import { MessageService } from 'primeng/api';

export interface UploadedFile {
  name: string;
  type: string;
  data: any[];
  text: string;
  folder: string;
  path?: string;
}

export interface TargetOption {
  label: string;
  value: string;
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

  primitiveConfigs: Record<string, any> = {
    'bin': {
      label: 'Bin',
      params: [
        { key: 'bins', label: 'Bins (JSON)', type: 'textarea', placeholder: '[{"label": 1, "start": 0, "end": 10}]' }
      ],
      example: () => ({
        input: `5`,
        output: `1`,
        context: `bins: [{label: 1, start: 0, end: 10}]`
      })
    },
    'cast': {
      label: 'Cast',
      params: [
        { key: 'target', label: 'Target Type', type: 'select', options: ['integer', 'string', 'decimal', 'boolean', 'float'] }
      ],
      example: () => ({
        input: `"123"`,
        output: `123`,
        context: `target: 'integer'`
      })
    },
    'convert_date': {
      label: 'Convert Date',
      params: [
        { key: 'source_format', label: 'Source Format', type: 'text', placeholder: '%Y-%m-%d' },
        { key: 'target_format', label: 'Target Format', type: 'text', placeholder: '%m/%d/%Y' }
      ],
      example: () => ({
        input: `"2020-01-01"`,
        output: `"01/01/2020"`,
        context: `format: %Y-%m-%d -> %m/%d/%Y`
      })
    },
    'convert_units': {
      label: 'Convert Units',
      params: [
        { key: 'source_unit', label: 'Source Unit', type: 'text', placeholder: 'meters' },
        { key: 'target_unit', label: 'Target Unit', type: 'text', placeholder: 'feet' }
      ],
      example: () => ({
        input: `1`,
        output: `3.28084`,
        context: `meters -> feet`
      })
    },
    'enum_to_enum': {
      label: 'Enum To Enum',
      params: [
        { key: 'mapping', label: 'Mapping (JSON)', type: 'textarea', placeholder: '{"A": "B", "1": "2"}' },
        { key: 'default', label: 'Default Value', type: 'text', placeholder: 'Optional' },
        { key: 'strict', label: 'Strict', type: 'boolean' }
      ],
      example: () => ({
        input: `"A"`,
        output: `"B"`,
        context: `mapping: {"A": "B"}`
      })
    },
    'format_number': {
      label: 'Format Number',
      params: [
        { key: 'precision', label: 'Precision', type: 'number', placeholder: '2', default: 2 }
      ],
      example: () => ({
        input: `10.567`,
        output: `"10.57"`,
        context: `precision: 2`
      })
    },
    'normalize_text': {
      label: 'Normalize Text',
      params: [
        { key: 'normalization', label: 'Normalization', type: 'select', options: ['strip', 'lower', 'upper', 'remove_accents', 'remove_punctuation', 'remove_special_characters'] }
      ],
      example: () => ({
        input: `" Hello "`,
        output: `"hello"`,
        context: `strip, lower`
      })
    },
    'offset': {
      label: 'Offset',
      params: [
        { key: 'offset', label: 'Offset Value', type: 'number', placeholder: '5' }
      ],
      example: () => ({
        input: `10`,
        output: `15`,
        context: `offset: 5`
      })
    },
    'reduce': {
      label: 'Reduce',
      params: [
        { key: 'reduction', label: 'Reduction Strategy', type: 'select', options: ['mean', 'sum', 'min', 'max'] }
      ],
      example: () => ({
        input: `[1,2,3]`,
        output: `2`,
        context: `using mean`
      })
    },
    'round': {
      label: 'Round',
      params: [
        { key: 'precision', label: 'Precision', type: 'number', placeholder: '0', default: 0 }
      ],
      example: () => ({
        input: `10.5`,
        output: `11`,
        context: `precision: 0`
      })
    },
    'scale': {
      label: 'Scale',
      params: [
        { key: 'scaling_factor', label: 'Scaling Factor', type: 'number', placeholder: '1.5' }
      ],
      example: () => ({
        input: `10`,
        output: `15`,
        context: `factor: 1.5`
      })
    },
    'substitute': {
      label: 'Substitute',
      params: [
        { key: 'expression', label: 'Regex Expression', type: 'text', placeholder: 'pattern' },
        { key: 'substitution', label: 'Replacement', type: 'text', placeholder: 'replacement' }
      ],
      example: () => ({
        input: `"Hello World"`,
        output: `"Hi World"`,
        context: `s/Hello/Hi/`
      })
    },
    'threshold': {
      label: 'Threshold',
      params: [
        { key: 'lower', label: 'Lower Bound', type: 'number', placeholder: '0' },
        { key: 'upper', label: 'Upper Bound', type: 'number', placeholder: '100' }
      ],
      example: () => ({
        input: `150`,
        output: `100`,
        context: `bounds: [0, 100]`
      })
    },
    'truncate': {
      label: 'Truncate',
      params: [
        { key: 'max_length', label: 'Max Length', type: 'number', placeholder: '10' }
      ],
      example: () => ({
        input: `"Long string"`,
        output: `"Long st..."`,
        context: `max: 8`
      })
    }
  };

  private harmonizationApi = inject(HarmonizationApiService);
  private messageService = inject(MessageService);

  async runHarmonization() {
    console.log('Starting harmonization...');

    // Construct and log rules
    const rules: Record<string, Record<string, any>> = {};
    const pairs: { source: string; target: string }[] = [];

    this.mappingRows()
      .filter(row => row.status === 'complete')
      .forEach(row => {
        const operations = (row.steps || []).map((step: any) => {
          const config = this.primitiveConfigs[step.transformation];
          const combinedParams = { ...(step.params || {}) };

          // Apply defaults from config if params are missing
          if (config && config.params) {
            config.params.forEach((param: any) => {
              if (param.default !== undefined && combinedParams[param.key] === undefined) {
                combinedParams[param.key] = param.default;
              }
            });
          }

          console.log(`  Step: ${step.transformation}`, combinedParams);
          return {
            operation: step.transformation,
            ...combinedParams
          };
        });
        console.log(`  Constructed operations:`, operations);

        if (!rules[row.sourceElement]) {
          rules[row.sourceElement] = {};
        }

        rules[row.sourceElement][row.targetElement] = {
          source: row.sourceElement,
          target: row.targetElement,
          operations: operations
        };

        pairs.push({
          source: row.sourceElement,
          target: row.targetElement
        });
      });

    console.log('Constructed Harmonization Rules:', JSON.stringify(rules, null, 2));

    // Find source data file
    // Find source data file - Prefer the most recently added one
    // We reverse a copy of the array to find the last uploaded file
    const sourceFile = [...this.uploadedFiles()].reverse().find(f => f.type === 'data');
    if (!sourceFile) {
      console.error('No source data file found.');
      return;
    }

    // Determine working directory from source file path if available
    let basePath = '/Users/mete/HARMONIZATION/harmonization-ui-angular/tmp';
    if (sourceFile.path) {
      // Assume '/' separator for Mac
      const lastSlash = sourceFile.path.lastIndexOf('/');
      if (lastSlash !== -1) {
        basePath = sourceFile.path.substring(0, lastSlash);
      }
    }

    const sourceDataPath = sourceFile.path || `${basePath}/${sourceFile.name}`;
    const rulesPath = `${basePath}/rules.json`;
    const outputPath = `${basePath}/output.csv`;
    const replayLogPath = `${basePath}/replay.log`;

    console.log('Starting harmonization job...');
    console.log('Base Working Directory:', basePath);
    console.log('Data Path:', sourceDataPath);
    console.log('Rules Path:', rulesPath);
    console.log('Output Path:', outputPath);

    try {
      if ((window as any).electron) {
        console.log('Electron detected. Saving rules to disk...');
        await (window as any).electron.saveFile(rulesPath, JSON.stringify(rules, null, 2));
      } else {
        console.warn('Electron not detected. Rules file cannot be saved to disk directly.');
      }

      const params = {
        data_file_path: sourceDataPath,
        rules_file_path: rulesPath,
        replay_log_file_path: replayLogPath,
        output_file_path: outputPath,
        mode: 'pairs' as const,
        pairs: pairs,
        overwrite: true
      };

      this.harmonizationApi.harmonize(params).subscribe({
        next: (response) => {
          console.log('Harmonization response:', response);
          if (response.job_id) {
            this.pollJob(response.job_id, outputPath);
          } else {
            console.log('Command finished immediately', response);
          }
        },
        error: (err) => console.error('Harmonization error:', err)
      });
    } catch (err) {
      console.error('Error during harmonization preparation:', err);
    }

  }

  pollJob(jobId: string, outputPath: string) {
    this.messageService.add({ severity: 'info', summary: 'Job Started', detail: 'Harmonization job submitted. Waiting for completion...' });

    const interval = setInterval(() => {
      this.harmonizationApi.getJob(jobId).subscribe({
        next: async (res) => {
          console.log('Job status:', res);
          const jobStatus = res.result?.status || res.status;

          // Check for terminal status
          if (res.result?.status === 'completed' || res.status === 'success') {
            clearInterval(interval);
            console.log('Job completed successfully');
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Harmonization completed successfully.' });

            // Read output file via Electron
            if ((window as any).electron) {
              try {
                console.log('Reading output file from:', outputPath);
                const csvContent = await (window as any).electron.readFile(outputPath);

                // Parse and add to UI
                Papa.parse(csvContent, {
                  header: true,
                  skipEmptyLines: true,
                  complete: (result) => {
                    const newFile: UploadedFile = {
                      name: 'output.csv',
                      type: 'data', // Treat as data to show in table
                      data: result.data as any[],
                      text: csvContent,
                      folder: 'Output'
                    };

                    // Add to uploaded files
                    this.uploadedFiles.update(files => [...files, newFile]);

                    // Open the file in a new tab
                    this.openFile(newFile);

                    this.messageService.add({ severity: 'info', summary: 'Result Loaded', detail: 'Output file opened in new tab.' });
                  }
                });
              } catch (e) {
                console.error('Error reading output file:', e);
                this.messageService.add({ severity: 'error', summary: 'Read Error', detail: 'Could not read output file from disk.' });
              }
            } else {
              console.warn('Electron not detected, cannot read output file automatically.');
            }

          } else if (jobStatus === 'failed' || jobStatus === 'error') {
            clearInterval(interval);
            console.error('Job failed:', res);
            this.messageService.add({ severity: 'error', summary: 'Job Failed', detail: 'The harmonization job failed. Check logs.' });
          }
        },
        error: (err) => {
          console.error('Polling error:', err);
          clearInterval(interval);
          this.messageService.add({ severity: 'error', summary: 'Polling Error', detail: 'Lost connection to backend job.' });
        }
      });
    }, 2000); // Poll every 2 seconds
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
        let filePath = (file as any).path;
        if (!filePath && (window as any).electron?.getFilePath) {
          filePath = (window as any).electron.getFilePath(file);
        }

        console.log('Parsed CSV File:', file.name, 'Final Path:', filePath);

        this.addFile({
          name: file.name,
          type: type,
          data: result.data,
          text: text,
          folder: this.selectedFolder() ?? file.name,
          path: filePath
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
        let filePath = (file as any).path;
        if (!filePath && (window as any).electron?.getFilePath) {
          filePath = (window as any).electron.getFilePath(file);
        }

        this.addTargetFile({
          name: file.name,
          type: 'dictionary',
          data: result.data,
          text: text,
          folder: file.name, // Default to filename as folder/group
          path: filePath
        });
      },
      error: (error) => {
        console.error('Error parsing Target CSV:', error);
      }
    });
  }

  // Mappings Tab Management
  hasValidMappingState = computed(() => {
    const hasTarget = this.targetFiles().length > 0;
    const hasSourceGroup = this.uploadedFiles().some(f => {
      // Check if there are other files in the same folder
      const folderFiles = this.uploadedFiles().filter(sf => sf.folder === f.folder);
      const hasDictionary = folderFiles.some(sf => sf.type === 'dictionary');
      const hasData = folderFiles.some(sf => sf.type === 'data');
      return hasDictionary && hasData;
    });

    return hasTarget && hasSourceGroup;
  });

  openMappingsTab() {
    // Create a virtual file for the Mappings tab
    const mappingsFile: UploadedFile = {
      name: 'Mappings',
      type: 'mappings',
      data: [],
      text: '',
      folder: 'system'
    };

    this.openFile(mappingsFile);
  }

  loadTestData() {
    // 1. Mock Target Dictionary
    const targetData = [
      { "Variable Name": "t_age", "Label": "Target Age", "Type": "Integer" },
      { "Variable Name": "t_gender", "Label": "Target Gender", "Type": "String" }
    ];
    this.addTargetFile({
      name: 'target_dict.csv',
      type: 'dictionary',
      data: targetData,
      text: Papa.unparse(targetData),
      folder: 'target_dict.csv'
    });

    // 2. Mock Source Dictionary
    const sourceDictData = [
      { "Id": "s_dob", "Label": "Date of Birth", "Datatype": "Date" },
      { "Id": "s_sex", "Label": "Sex", "Datatype": "String" }
    ];
    this.addFile({
      name: 'source_dict.csv',
      type: 'dictionary',
      data: sourceDictData,
      text: Papa.unparse(sourceDictData),
      folder: 'Source Dataset A'
    });

    // 3. Mock Source Data
    const sourceDataData = [
      { "s_dob": "1990-01-01", "s_sex": "M" },
      { "s_dob": "1992-05-20", "s_sex": "F" }
    ];
    this.addFile({
      name: 'source_data.csv',
      type: 'data',
      data: sourceDataData,
      text: Papa.unparse(sourceDataData),
      folder: 'Source Dataset A'
    });
  }

  // Mapping Rows for the Mapping Table
  mappingRows = signal<any[]>([]);

  constructor() {
    // Initialize mapping rows whenever uploadedFiles change
    effect(() => {
      const files = this.uploadedFiles();
      const rows: any[] = [];
      let counter = 1;

      files.forEach(file => {
        if (file.type === 'dictionary') {
          file.data.forEach(element => {
            rows.push({
              id: counter++,
              dataset: file.folder,
              sourceElement: element['Id'] || element['Variable Name'] || element['name'] || 'Unknown',
              targetElement: null,
              status: 'attention',
              steps: [],
              selectedStepId: null
            });
          });
        }
      });
      this.mappingRows.set(rows);

      // Default select first row
      const currentSelectedId = untracked(() => this.selectedRowId());
      if (rows.length > 0 && !currentSelectedId) {
        this.selectedRowId.set(rows[0].id);
      }
    });
  }

  // Selected mapping for the rules engine
  selectedRowId = signal<number | null>(null);

  selectedMappingRow = computed(() => {
    const id = this.selectedRowId();
    if (id === null) return null;
    return this.mappingRows().find(r => r.id === id) || null;
  });

  selectMappingRow(row: any) {
    this.selectedRowId.set(row ? row.id : null);
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
            steps: [...(row.steps || []), { id: newStepId, params: {} }],
            selectedStepId: newStepId
          };
        }
        return row;
      });
    });
  }

  updateTransformation(transformation: string) {
    const selectedId = this.selectedRowId();
    const row = this.selectedMappingRow();
    const stepId = row?.selectedStepId;
    if (selectedId === null || !stepId) return;

    this.mappingRows.update(rows => {
      return rows.map(row => {
        if (row.id === selectedId) {
          const updatedSteps = row.steps.map((step: any) => {
            if (step.id === stepId) {
              const config = this.primitiveConfigs[transformation];
              const defaultParams: Record<string, any> = {};
              if (config && config.params) {
                config.params.forEach((p: any) => {
                  if (p.default !== undefined) {
                    defaultParams[p.key] = p.default;
                  }
                });
              }
              return { ...step, transformation, params: defaultParams };
            }
            return step;
          });
          return { ...row, steps: updatedSteps };
        }
        return row;
      });
    });
  }

  updateParam(key: string, value: any) {
    const selectedId = this.selectedRowId();
    const row = this.selectedMappingRow();
    const stepId = row?.selectedStepId;
    if (selectedId === null || !stepId) return;

    this.mappingRows.update(rows => {
      return rows.map(row => {
        if (row.id === selectedId) {
          const updatedSteps = row.steps.map((step: any) => {
            if (step.id === stepId) {
              return {
                ...step,
                params: { ...(step.params || {}), [key]: value }
              };
            }
            return step;
          });
          return { ...row, steps: updatedSteps };
        }
        return row;
      });
    });
  }

  removeTransformationStep(stepIndex: number) {
    const selected = this.selectedMappingRow();
    if (!selected) return;

    let updatedSelectedRow = null;

    this.mappingRows.update(rows => {
      return rows.map(row => {
        if (row.id === selected.id) {
          const steps = row.steps.filter((_: any, i: number) => i !== stepIndex);
          const wasSelected = row.selectedStepId === row.steps[stepIndex]?.id;

          updatedSelectedRow = {
            ...row,
            steps: steps,
            selectedStepId: wasSelected ? (steps.length > 0 ? steps[steps.length - 1].id : null) : row.selectedStepId
          };
          return updatedSelectedRow;
        }
        return row;
      });
    });

    if (updatedSelectedRow) {
      // Propagation is automatic via computed selectedMappingRow
    }
  }

  // Helper to get target element details
  getTargetDetails(variableName: string) {
    for (const file of this.targetFiles()) {
      const match = file.data.find(d =>
        (d['Variable Name'] || d['Variable name'] || d['variable_name'] || d['Id'] || d['name']) === variableName
      );
      if (match) return match;
    }
    return null;
  }

  // Update status when targetElement changes
  updateMappingStatus(rowIndex: number, value: any) {
    this.mappingRows.update(rows => {
      const newRows = [...rows];
      newRows[rowIndex] = {
        ...newRows[rowIndex],
        targetElement: value,
        // Status remains 'attention' until manually saved
        status: newRows[rowIndex].status === 'complete' ? 'complete' : 'attention'
      };
      return newRows;
    });
  }

  saveCurrentRule() {
    const selectedId = this.selectedRowId();
    if (selectedId === null) return;

    this.mappingRows.update(rows => {
      return rows.map(row => {
        if (row.id === selectedId) {
          // Validate if target is selected
          if (!row.targetElement) return row;

          // Construct and log the harmonization rule
          const operations = (row.steps || []).map((step: any) => ({
            operation: step.transformation,
            ...step.params
          }));

          const rule = {
            source: row.sourceElement,
            target: row.targetElement,
            operations: operations
          };

          console.log('Constructed Harmonization Rule:', rule);

          return {
            ...row,
            status: 'complete'
          };
        }
        return row;
      });
    });
  }

  // Ready button state
  isReady = computed(() => {
    return this.mappingRows().some(row => row.status === 'complete');
  });

  // Target Options for the searchable dropdown
  targetOptions = computed<TargetOption[]>(() => {
    const options: TargetOption[] = [];
    const files = this.targetFiles();

    files.forEach(file => {
      if (file.data && Array.isArray(file.data)) {
        file.data.forEach(element => {
          const name = element['Variable Name'] || element['Variable name'] || element['variable_name'] ||
            element['Id'] || element['ID'] || element['id'] || element['name'] || element['Name'];
          const label = element['Label'] || element['label'] || element['Description'] || element['description'] || name;

          if (name) {
            options.push({
              label: `${name}${label && label !== name ? ' - ' + label : ''}`,
              value: name
            });
          }
        });
      }
    });

    // Remove duplicates
    const unique = new Map<string, TargetOption>();
    options.forEach(o => unique.set(o.value, o));
    const result = Array.from(unique.values());

    console.log('Target options computed:', result.length, 'options');
    return result;
  });
}
