import { provideHttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBar } from './header-bar';

describe('HeaderBar', () => {
  let component: HeaderBar;
  let fixture: ComponentFixture<HeaderBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), MessageService],
      imports: [HeaderBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
