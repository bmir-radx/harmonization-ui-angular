import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created and default to dark mode false', () => {
    expect(service).toBeTruthy();
    expect(service.darkMode()).toBeFalse();
  });

  it('should set an explicit dark mode state', () => {
    service.setDarkMode(true);
    expect(service.darkMode()).toBeTrue();
    expect(document.documentElement.classList.contains('dark')).toBeTrue();
    
    service.setDarkMode(false);
    expect(service.darkMode()).toBeFalse();
    expect(document.documentElement.classList.contains('dark')).toBeFalse();
  });

  it('should toggle dark mode via time-gated transition', fakeAsync(() => {
    expect(service.darkMode()).toBeFalse();
    
    service.toggleDarkMode();
    
    // Initial loader state lock
    expect(service.isChangingTheme()).toBeTrue();
    
    // Fast forward to mode switch
    tick(150);
    expect(service.darkMode()).toBeTrue();
    expect(document.documentElement.classList.contains('dark')).toBeTrue();
    expect(document.documentElement.classList.contains('theme-switching')).toBeTrue();
    
    // Fast forward to complete transition unlock
    tick(400);
    expect(service.isChangingTheme()).toBeFalse();
    expect(document.documentElement.classList.contains('theme-switching')).toBeFalse();
  }));

  it('should correctly shift font size', () => {
    expect(service.fontSize()).toBe(16);
    
    service.increaseFontSize();
    expect(service.fontSize()).toBe(17);
    
    service.decreaseFontSize();
    service.decreaseFontSize();
    expect(service.fontSize()).toBe(15);
    
    service.resetFontSize();
    expect(service.fontSize()).toBe(16);
  });

  it('should prevent font size from going below 8', () => {
    service.resetFontSize(); // 16
    for(let i = 0; i < 20; i++) {
        service.decreaseFontSize();
    }
    expect(service.fontSize()).toBe(8);
  });
});
