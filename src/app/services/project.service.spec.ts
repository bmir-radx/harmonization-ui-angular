import { TestBed } from '@angular/core/testing';
import { ProjectService, Project } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with null project', () => {
    expect(service.currentProject()).toBeNull();
  });

  it('should correctly set and emit project details', () => {
    const testProject: Project = {
      name: 'Alpha Harmonization',
      description: 'Testing the harmonizer functionality'
    };

    service.setProject(testProject);
    
    expect(service.currentProject()?.name).toBe('Alpha Harmonization');
    expect(service.currentProject()?.description).toBe('Testing the harmonizer functionality');
  });
});
