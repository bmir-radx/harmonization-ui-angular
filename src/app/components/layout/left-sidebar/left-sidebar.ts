import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { DatasetService } from '../../../services/dataset.service';
import { MappingService } from '../../../services/mapping.service';
import { ThemeService } from '../../../services/theme.service';
import { TreeNode } from 'primeng/api';
import { UploadedFile } from '../../../models/mapping.model';

type OutputItem = {
  label: string;
  type: string;
  selectable: boolean;
  expanded?: boolean;
  children: {
    label: string;
    type: string;
    selectable: boolean;
    expanded?: boolean;
    subtype: string;
    file: UploadedFile;
    children?: { selectable: boolean; type: string, datatype: string; field: string }[]
  }[]
};

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule, TooltipModule, TreeModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.scss'
})
export class LeftSidebar {
  hasActiveFilters = false;
  isDarkMode = true;
  datasetService = inject(DatasetService);
  mappingService = inject(MappingService);

  files: OutputItem[] = [];
  selectedFolder!: TreeNode;

  constructor(private themeService: ThemeService) {
    effect(() => {
      this.isDarkMode = this.themeService.isDarkMode()();

      this.files = Object.values(
        this.datasetService.uploadedFiles().reduce<Record<string, OutputItem>>((acc, file) => {
          if (!acc[file.folder]) {
            acc[file.folder] = { label: file.folder, type: 'folder', selectable: true, expanded: true, children: [] };
          }
          const child = {
            label: file.name,
            type: 'file',
            subtype: file.type,
            file: file,
            selectable: false,
            expanded: true,
            ...(file.type === 'dictionary' ? { children: file.data.map(curr => ({ type: 'field', selectable: false, field: curr.Id, datatype: curr.Datatype })) } : {})
          }
          acc[file.folder].children.push(child);
          return acc;
        }, {})
      );
    });
  }

  getFiles() {
    return this.files;
  }

  get visible() {
    return this.datasetService.visible();
  }

  set visible(value: boolean) {
    this.datasetService.visible.set(value);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.datasetService.setFile(input.files[0]);
      this.datasetService.showDialog();
    }

    input.value = '';
  }
}

