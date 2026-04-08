import { provideHttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent } from './main-content';

describe('MainContent', () => {
  let component: MainContent;
  let fixture: ComponentFixture<MainContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), MessageService],
      imports: [MainContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
