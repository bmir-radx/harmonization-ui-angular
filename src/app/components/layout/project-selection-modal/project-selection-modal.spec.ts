import { provideHttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSelectionModal } from './project-selection-modal';

describe('ProjectSelectionModal', () => {
  let component: ProjectSelectionModal;
  let fixture: ComponentFixture<ProjectSelectionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), MessageService],
      imports: [ProjectSelectionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSelectionModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
