import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private darkMode$ = new BehaviorSubject<boolean>(true);

    toggleDarkMode() {
        const newMode = !this.darkMode$.value;
        this.darkMode$.next(newMode);
        this.applyDarkModeToHtml(newMode);
    }

    setDarkMode(isDarkMode: boolean) {
        this.darkMode$.next(isDarkMode);
        this.applyDarkModeToHtml(isDarkMode);
    }

    isDarkMode() {
        return this.darkMode$.asObservable();
    }

    private applyDarkModeToHtml(isDarkMode: boolean) {
        const htmlEl = document.documentElement;
        if (isDarkMode) {
            htmlEl.classList.add('dark');
        } else {
            htmlEl.classList.remove('dark');
        }
    }
}
