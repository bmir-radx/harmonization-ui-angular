import { Component, effect, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { ProjectService, Project } from '../../../services/project.service';
import { HistoryService, HistoryItem } from '../../../services/history.service';
import { DatasetService } from '../../../services/dataset.service';
import { PersistenceService } from '../../../services/persistence.service';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
    selector: 'app-header-bar',
    imports: [CommonModule, Menubar],
    templateUrl: './header-bar.html',
    styleUrl: './header-bar.scss'
})
export class HeaderBar {
    isDarkMode = true;
    currentProject: Project | null = null;
    projectHistory: HistoryItem[] = [];

    isLeftVisible = model(true);
    isRightVisible = model(true);

    leftMenu: MenuItem[] | undefined;
    rightMenu: MenuItem[] | undefined;

    datasetService = inject(DatasetService);
    projectService = inject(ProjectService);
    historyService = inject(HistoryService);
    themeService = inject(ThemeService);
    persistenceService = inject(PersistenceService);

    constructor() {
        effect(() => {
            this.currentProject = this.projectService.currentProject();
            this.projectHistory = this.historyService.projectHistory();
            this.isDarkMode = this.themeService.isDarkMode()();

            this.leftMenu = this.buildLeftMenu();
            this.rightMenu = this.buildRightMenu();
        });
    }

    formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    getCSSVar(varName: string): string {
        return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    };

    buildLeftMenu(): MenuItem[] {
        return [
            {
                label: this.currentProject?.name,
                items: [
                    {
                        label: 'New Project',
                        sublabel: 'Create a new harmonization project',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Open Project',
                        sublabel: 'Open an existing project',
                        icon: 'pi pi-folder-open',
                        command: () => this.persistenceService.loadProjectWithDialog()
                    },
                    {
                        label: 'Get from Version Control',
                        sublabel: 'Clone project from repository',
                        icon: 'pi pi-share-alt'
                    },
                    {
                        separator: true
                    },
                    {
                        title: 'Recent Projects'
                    },
                    ...this.projectHistory.slice(0, 4),
                    {
                        separator: true
                    },
                    {
                        label: 'All Projects',
                        icon: 'pi pi-arrow-left'
                    }
                ]
            },
            {
                label: 'File',
                items: [
                    {
                        label: 'New Project...',
                        icon: 'pi pi-plus',
                        shortcut: 'Ctrl+Shift+N'
                    },
                    {
                        label: 'Open Project...',
                        icon: 'pi pi-folder-open',
                        shortcut: 'Ctrl+O',
                        command: () => this.persistenceService.loadProjectWithDialog()
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'New Mapping...',
                        icon: 'pi pi-file',
                        shortcut: 'Ctrl+N'
                    },
                    {
                        label: 'Import Data...',
                        icon: 'pi pi-upload',
                        shortcut: 'Ctrl+I'
                    },

                    {
                        separator: true
                    },
                    {
                        label: 'Save Project',
                        icon: 'pi pi-save',
                        shortcut: 'Ctrl+S',
                        command: () => this.persistenceService.saveProjectWithDialog()
                    },
                    {
                        label: 'Save Project As...',
                        icon: 'pi pi-folder-plus',
                        shortcut: 'Ctrl+Shift+S',
                        command: () => this.persistenceService.saveProjectWithDialog()
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export Results...',
                        icon: 'pi pi-download',
                        shortcut: 'Ctrl+E'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Recent Projects',
                        icon: 'pi pi-clock'
                    }
                ]
            },
            {
                label: 'View',
                items: [
                    {
                        label: 'Toggle Left Sidebar',
                        icon: 'pi pi-chevron-left',
                        shortcut: 'Ctrl+Shift+E',
                        command: () => this.isLeftVisible.set(!this.isLeftVisible())
                    },
                    {
                        label: 'Toggle Right Sidebar',
                        icon: 'pi pi-chevron-right',
                        shortcut: 'Ctrl+Shift+R',
                        command: () => this.isRightVisible.set(!this.isRightVisible())
                    },
                    {
                        label: 'Toggle All Sidebars',
                        icon: 'pi pi-eye',
                        shortcut: 'Ctrl+Shift+B',
                        command: () => {
                            const bothVisible = this.isLeftVisible() && this.isRightVisible();
                            this.isLeftVisible.set(!bothVisible);
                            this.isRightVisible.set(!bothVisible);
                        }
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Reset Layout',
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: 'Toggle Fullscreen',
                        icon: 'pi pi-arrow-up-right-and-arrow-down-left-from-center',
                        shortcut: 'F11'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Increase Font Size',
                        icon: 'pi pi-plus',
                        shortcut: 'Ctrl++',
                        command: () => this.themeService.increaseFontSize()
                    },
                    {
                        label: 'Decrease Font Size',
                        icon: 'pi pi-minus',
                        shortcut: 'Ctrl+-',
                        command: () => this.themeService.decreaseFontSize()
                    },
                    {
                        label: 'Reset Font Size',
                        icon: 'pi pi-cog',
                        shortcut: 'Ctrl+0',
                        command: () => this.themeService.resetFontSize()
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Toggle Theme',
                        icon: this.isDarkMode ? 'pi pi-sun' : 'pi pi-moon',
                        shortcut: this.isDarkMode ? 'Light' : 'Dark',
                        command: () => {
                            this.themeService.toggleDarkMode();
                        }
                    }
                ]
            }
        ]
    }


    buildRightMenu(): MenuItem[] {
        return [
            {
                icon: 'pi pi-user'
            },
            {
                icon: 'pi pi-search'
            },
            {
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Toggle Theme',
                        icon: this.isDarkMode ? 'pi pi-sun' : 'pi pi-moon',
                        shortcut: this.isDarkMode ? 'Light' : 'Dark',
                        command: () => {
                            this.themeService.toggleDarkMode();
                        }
                    },
                    {
                        separator: true
                    },
                    {
                        title: 'Font Size'
                    },
                    {
                        label: 'Increase Font Size',
                        icon: 'pi pi-plus',
                        shortcut: 'Ctrl++',
                        command: () => this.themeService.increaseFontSize()
                    },
                    {
                        label: 'Decrease Font Size',
                        icon: 'pi pi-minus',
                        shortcut: 'Ctrl+-',
                        command: () => this.themeService.decreaseFontSize()
                    },
                    {
                        label: 'Reset Font Size',
                        icon: 'pi pi-cog',
                        shortcut: '16px',
                        command: () => this.themeService.resetFontSize()
                    }
                ]
            }
        ]
    }
}
