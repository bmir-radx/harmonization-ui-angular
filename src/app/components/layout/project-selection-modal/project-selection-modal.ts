import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { ProjectService } from '../../../services/project.service';
import { HistoryService, HistoryItem } from '../../../services/history.service';
import { FormsModule } from '@angular/forms';
import { Button } from '../../ui/button.component';

@Component({
  selector: 'app-project-selection-modal',
  imports: [CommonModule, Button, FormsModule],
  templateUrl: './project-selection-modal.html',
  styleUrl: './project-selection-modal.scss'
})
export class ProjectSelectionModal {
    isDarkMode = true;
    showCreateDialog = false;

    name: string = '';
    description: string = '';

    searchTerm: string = '';
    projectHistory: HistoryItem[] = [];

    setShowCreateDialog(value: boolean) {
        this.showCreateDialog = value;
    }

    setProject(name: string, description: string) {
        this.projectService.setProject({
            name: name,
            description: description
        })
    }

    formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
        });
    };

    formatRelativeTime = (date: Date) => {
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        
        if (diffInDays === 0) return 'Today';
        if (diffInDays === 1) return 'Yesterday';
        if (diffInDays < 7) return `${diffInDays} days ago`;
        if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
        return this.formatDate(date);
    };

    get filteredProjects() {
        const term = this.searchTerm.toLowerCase();
        return this.projectHistory.filter(project => project.name.toLowerCase().includes(term) || project.description.toLowerCase().includes(term));
    }
    
    constructor(private projectService: ProjectService, private historyService: HistoryService, private themeService: ThemeService) {
        effect(() => {
            this.isDarkMode = this.themeService.isDarkMode()();
            this.projectHistory = this.historyService.projectHistory();
        })
    }
}
