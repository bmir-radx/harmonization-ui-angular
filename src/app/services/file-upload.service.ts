import { Injectable, signal, computed, effect, untracked, inject } from '@angular/core';
import Papa from 'papaparse';
import { HarmonizationApiService } from './harmonization-api.service';

export interface UploadedFile {
  name: string;
  type: string;
  data: any[];
  text: string;
  folder: string;
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

  private harmonizationApi = inject(HarmonizationApiService);

  async runHarmonization() {
    console.log('Starting harmonization...');

    // TODO: In a real app, these paths would come from user input or file upload response
    const params = {
      data_file_path: '/tmp/source_data.csv',
      rules_file_path: '/tmp/rules.json',
      replay_log_file_path: '/tmp/replay.log',
      output_file_path: '/tmp/output.csv',
      mode: 'all' as const,
      overwrite: true
    };

    this.harmonizationApi.harmonize(params).subscribe({
      next: (response) => {
        console.log('Harmonization response:', response);
        if (response.job_id) {
          this.pollJob(response.job_id);
        }
      },
      error: (err) => console.error('Harmonization error:', err)
    });
  }

  pollJob(jobId: string) {
    const interval = setInterval(() => {
      this.harmonizationApi.getJob(jobId).subscribe({
        next: (res) => {
          console.log('Job status:', res);
          // Check for terminal status (success or error)
          // The API returns status: 'success' in the envelope,
          // but the result object inside might have its own status.
          // Adjusting based on standard patterns, assume result.status is the job status
          const jobStatus = res.result?.status || res.status;

          if (jobStatus === 'completed' || jobStatus === 'failed' || jobStatus === 'error' || res.status === 'success') {
            // For now stopping on 'success' envelope or explicit completion
            // Refine this based on actual API response structure for jobs
            if (res.result?.status === 'completed' || res.result?.status === 'failed') {
              clearInterval(interval);
            }
            // If the RPC call itself succeeded and we have a result, we might be done depending on how get_job works.
            // Usually get_job returns current status.
          }
        },
        error: (err) => {
          console.error('Polling error:', err);
          clearInterval(interval);
        }
      });
    }, 1000);
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
              return { ...step, transformation, params: {} };
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
