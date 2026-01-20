import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { UploadService, UploadedFile } from '../../../services/file-upload.service';
import { ThemeService } from '../../../services/theme.service';
import { TreeNode } from 'primeng/api';

type OutputItem = { label: string; type: string; selectable: boolean; expanded?: boolean; children: { label: string; type: string; selectable: boolean; expanded?: boolean; subtype: string; file: UploadedFile; children?: { selectable: boolean; type: string, datatype: string; field: string }[] }[] };

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule, TooltipModule, TreeModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.scss'
})
export class LeftSidebar {
  hasActiveFilters = false;
  isDarkMode = true;
  uploadService: UploadService = inject(UploadService);

  files: OutputItem[] = [];
  selectedFolder!: TreeNode;

  constructor(private themeService: ThemeService) {
    effect(() => {
      this.isDarkMode = this.themeService.isDarkMode()();

      this.files = Object.values(
        this.uploadService.uploadedFiles().reduce<Record<string, OutputItem>>((acc, file) => {
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
    return this.uploadService.visible();
  }

  set visible(value: boolean) {
    this.uploadService.visible.set(value);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadService.setFile(input.files[0]);

      this.uploadService.showDialog();
    }

    input.value = '';
  }

  getDataClass(type: string): string {
    const dataType = type.toLowerCase();

    switch (dataType) {
      case 'string':
      case 'text':
      case 'varchar':
      case 'char':
      case 'str':
      case 'categorical':
        return 'text-[#4ec9b0]';

      case 'integer':
      case 'int':
      case 'number':
      case 'numeric':
      case 'whole':
        return 'text-[#007fd4]';

      case 'decimal':
      case 'float':
      case 'double':
      case 'real':
      case 'currency':
      case 'money':
        return 'text-[#ff9500]';

      case 'date':
      case 'time':
      case 'datetime':
      case 'timestamp':
      case 'temporal':
        return 'text-[#c586c0]';

      case 'boolean':
      case 'bool':
      case 'logical':
      case 'binary':
      case 'flag':
      case 'indicator':
        return 'text-[#ff6b6b]';

      default:
        return 'text-[#606060]';
    }

  }
}
