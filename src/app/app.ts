import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { SplitterModule } from 'primeng/splitter';
import { HeaderBar } from './components/layout/header-bar/header-bar';
import { MainContent } from './components/layout/main-content/main-content';
import { LeftSidebar } from './components/layout/left-sidebar/left-sidebar';
import { RightSidebar } from './components/layout/right-sidebar/right-sidebar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, SplitterModule,
    HeaderBar, MainContent, LeftSidebar, RightSidebar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('data-harmonization-angular');

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setDarkMode(true);
  }
}
