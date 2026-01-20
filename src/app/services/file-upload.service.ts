import { Injectable, signal, computed, effect } from '@angular/core';
import Papa from 'papaparse';

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
              status: 'attention'
            });
          });
        }
      });
      this.mappingRows.set(rows);

      // Default select first row
      if (rows.length > 0 && !this.selectedMappingRow()) {
        this.selectMappingRow(rows[0]);
      }
    });
  }

  // Selected mapping for the rules engine
  selectedMappingRow = signal<any | null>(null);

  selectMappingRow(row: any) {
    this.selectedMappingRow.set(row);
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
        status: value ? 'complete' : 'attention'
      };

      // Also update selected row if it's the one being edited
      if (this.selectedMappingRow()?.id === newRows[rowIndex].id) {
        this.selectedMappingRow.set(newRows[rowIndex]);
      }

      return newRows;
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
