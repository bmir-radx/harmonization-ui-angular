import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { UploadService, UploadedFile } from '../../../services/file-upload.service';

type OutputItem = { label: string; type: string; selectable: boolean; children: { label: string; type: string; selectable: boolean; subtype: string; file: UploadedFile; children?: { selectable: boolean; type: string, datatype: string; field: string }[] }[] };

@Component({
  selector: 'app-right-sidebar',
  imports: [CommonModule, TooltipModule, TreeModule],
  templateUrl: './right-sidebar.html',
  styleUrl: './right-sidebar.scss'
})
export class RightSidebar {
  uploadService: UploadService = inject(UploadService);

  files: TreeNode[] = [];
  selectedNode!: TreeNode;

  constructor() {
    effect(() => {
      this.files = this.uploadService.targetFiles().map(file => ({
        label: file.name,
        type: 'file',
        data: file,
        expanded: true,
        children: file.data.length > 0 ? Object.keys(file.data[0]).map(key => ({
          label: key,
          type: 'field',
          selectable: false,
          data: { getType: () => 'string' } // Placeholder if type isn't known, or extract from valid rows
        })) : []
      }));
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadService.parseTargetCSV(input.files[0]);
    }
    input.value = '';
  }

  getDataClass(type: string): string {
    // Defaulting to string color for now as we might not have types in target dictionary implementation yet
    // or reusing logic if available.
    return 'text-[#4ec9b0]';
  }
}
