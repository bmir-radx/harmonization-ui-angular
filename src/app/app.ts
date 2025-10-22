import { Component, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { ProjectService } from './services/project.service';
import { SplitterModule } from 'primeng/splitter';
import { ProjectSelectionModal } from './components/layout/project-selection-modal/project-selection-modal';
import { HeaderBar } from './components/layout/header-bar/header-bar';
import { MainContent } from './components/layout/main-content/main-content';
import { LeftSidebar } from './components/layout/left-sidebar/left-sidebar';
import { RightSidebar } from './components/layout/right-sidebar/right-sidebar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, CommonModule, SplitterModule, ProjectSelectionModal,
    HeaderBar, MainContent, LeftSidebar, RightSidebar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('data-harmonization-angular');

  constructor(private projectService: ProjectService, private themeService: ThemeService) {}

  get project() {
    return this.projectService.currentProject;
  }

  ngOnInit() {
    this.themeService.setDarkMode(true);
  }
}
