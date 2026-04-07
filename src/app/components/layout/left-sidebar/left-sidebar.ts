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

      const uploadedFiles = this.datasetService.uploadedFiles();
      const prevFiles = this.files;

      // Build the new tree structure with all nodes collapsed by default
      const newFiles: OutputItem[] = Object.values(
        uploadedFiles.reduce<Record<string, OutputItem>>((acc, file) => {
          if (!acc[file.folder]) {
            acc[file.folder] = {
              label: file.folder,
              type: 'folder',
              selectable: true,
              expanded: false,
              children: []
            };
          }

          const isDictionary = file.type === 'dictionary';
          const child = {
            label: file.name,
            type: 'file',
            subtype: file.type,
            file: file,
            selectable: true,
            expanded: false,
            ...(isDictionary ? {
              children: file.data.map(curr => ({
                type: 'field',
                selectable: false,
                field: curr.Id,
                datatype: curr.Datatype
              }))
            } : {})
          }
          acc[file.folder].children.push(child);
          return acc;
        }, {})
      );

      // Helper to synchronize expansion states from previous tree
      const syncExpansion = (targetNodes: any[], sourceNodes: any[]) => {
        targetNodes.forEach(tNode => {
          const sNode = sourceNodes.find(s => s.label === tNode.label && s.type === tNode.type);
          if (sNode) {
            tNode.expanded = sNode.expanded;
            if (tNode.children && sNode.children) {
              syncExpansion(tNode.children, sNode.children);
            }
          }
        });
      };

      if (prevFiles.length === 0) {
        // INITIAL LOAD (e.g., app start or first upload)
        if (newFiles.length > 0) {
          // Expand the first folder and its dictionaries by default
          newFiles[0].expanded = true;
          newFiles[0].children.forEach(child => {
            if (child.subtype === 'dictionary') child.expanded = true;
          });
        }
      } else {
        // UPDATE: Copy existing states first
        syncExpansion(newFiles, prevFiles);

        // Detect if a new file was just added
        const prevFileCount = prevFiles.reduce((count, f) => count + f.children.length, 0);
        const currFileCount = uploadedFiles.length;

        if (currFileCount > prevFileCount) {
          const lastFile = uploadedFiles[currFileCount - 1];
          const targetFolder = newFiles.find(f => f.label === lastFile.folder);

          if (targetFolder) {
            const isNewFolder = !prevFiles.some(f => f.label === lastFile.folder);

            if (lastFile.type === 'dictionary') {
              // RULE 1: Always expand parent folder and the dictionary itself when a dictionary is added
              targetFolder.expanded = true;
              const targetDictNode = targetFolder.children.find(c => c.label === lastFile.name);
              if (targetDictNode) targetDictNode.expanded = true;
            } else if (isNewFolder) {
              // RULE 2: Expand folder if it's the very first file for this dataset (standard UX)
              targetFolder.expanded = true;
            }
            // RULE 3: If it's a data file being added to an existing folder, we don't change anything 
            // (other dictionaries in this folder remain as they were thanks to syncExpansion)
          }
        }
      }

      this.files = newFiles;
    });
  }

  onNodeSelect(event: any) {
    const node = event.node;
    if (node.type === 'folder') {
      this.datasetService.selectFolder(node.label!);
    } else if (node.type === 'file') {
      this.datasetService.openFile(node.file);
    }
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

