import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { UploadService } from '../../../services/file-upload.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule, TooltipModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.scss'
})
export class LeftSidebar {
  hasActiveFilters = false;
  isDarkMode = true;
  constructor(public uploadService: UploadService, private themeService: ThemeService) {
    effect(() => {
      this.isDarkMode = this.themeService.isDarkMode()();
    });
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
