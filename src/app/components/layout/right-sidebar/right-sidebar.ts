import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { DatasetService } from '../../../services/dataset.service';
import { MappingService } from '../../../services/mapping.service';
import { UploadedFile } from '../../../models/mapping.model';

@Component({
  selector: 'app-right-sidebar',
  imports: [CommonModule, TooltipModule, TreeModule],
  templateUrl: './right-sidebar.html',
  styleUrl: './right-sidebar.scss'
})
export class RightSidebar {
  datasetService = inject(DatasetService);
  mappingService = inject(MappingService);

  files: TreeNode[] = [];
  selectedNode!: TreeNode;

  getElementType(element: any): string {
    return element['Type'] || element['type'] || element['Datatype'] || element['datatype'] || 'String';
  }

  constructor() {
    effect(() => {
      this.files = this.datasetService.targetFiles().map(file => ({
        label: file.name,
        type: 'file',
        data: file,
        expanded: true,
        children: (file.data || []).map(element => {
          const name = element['Variable Name'] || element['Variable name'] || element['variable_name'] ||
            element['Id'] || element['ID'] || element['id'] || element['name'] || element['Name'];
          return {
            label: name || 'Unnamed Element',
            type: 'field',
            selectable: true,
            data: element
          };
        })
      }));
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.datasetService.parseTargetCSV(input.files[0]);
    }
    input.value = '';
  }
}

