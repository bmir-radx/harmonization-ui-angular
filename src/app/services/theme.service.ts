import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    private readonly _darkMode = signal<boolean>(true);
    readonly darkMode = this._darkMode.asReadonly();

    toggleDarkMode() {
        const newMode = !this._darkMode();
        this._darkMode.set(newMode);
        this.applyDarkModeToHtml(newMode);
    }

    setDarkMode(isDarkMode: boolean) {
        this._darkMode.set(isDarkMode);
        this.applyDarkModeToHtml(isDarkMode);
    }

    isDarkMode() {
        return this.darkMode;
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
