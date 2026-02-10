import { Component, OnInit, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { ProjectService } from './services/project.service';
import { DatasetService } from './services/dataset.service';
import { MappingService } from './services/mapping.service';
import { SplitterModule } from 'primeng/splitter';
import { ToastModule } from 'primeng/toast';
import { ProjectSelectionModal } from './components/layout/project-selection-modal/project-selection-modal';
import { HeaderBar } from './components/layout/header-bar/header-bar';
import { MainContent } from './components/layout/main-content/main-content';
import { LeftSidebar } from './components/layout/left-sidebar/left-sidebar';
import { RightSidebar } from './components/layout/right-sidebar/right-sidebar';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, SplitterModule, ToastModule, ProjectSelectionModal,
    HeaderBar, MainContent, LeftSidebar, RightSidebar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('data-harmonization-angular');

  projectService = inject(ProjectService);
  themeService = inject(ThemeService);
  datasetService = inject(DatasetService);
  mappingService = inject(MappingService);

  get project() {
    return this.projectService.currentProject;
  }

  ngOnInit() {
    this.themeService.setDarkMode(true);

    // Auto-create a default project for testing purposes
    this.projectService.setProject({
      name: 'Test Project',
      description: 'Auto-created for testing'
    });
  }
}

