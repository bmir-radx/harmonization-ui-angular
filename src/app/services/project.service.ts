import { Injectable, signal } from '@angular/core';

export interface Project {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly _currentProject = signal<Project | null>(null);

  readonly currentProject = this._currentProject.asReadonly();

  setProject(project: Project) {
    this._currentProject.set(project);
  }
}
