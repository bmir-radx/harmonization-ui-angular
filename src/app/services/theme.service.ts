import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly _darkMode = signal<boolean>(true);
    readonly darkMode = this._darkMode.asReadonly();
    private readonly _fontSize = signal<number>(16);
    readonly fontSize = this._fontSize.asReadonly();

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

    increaseFontSize() {
        const newSize = this._fontSize() + 1;
        this._fontSize.set(newSize);
        this.applyFontSize(newSize);
    }

    decreaseFontSize() {
        const newSize = Math.max(8, this._fontSize() - 1);
        this._fontSize.set(newSize);
        this.applyFontSize(newSize);
    }

    resetFontSize() {
        this._fontSize.set(16);
        this.applyFontSize(16);
    }

    private applyDarkModeToHtml(isDarkMode: boolean) {
        const htmlEl = document.documentElement;
        if (isDarkMode) {
            htmlEl.classList.add('dark');
        } else {
            htmlEl.classList.remove('dark');
        }
    }

    private applyFontSize(size: number) {
        document.documentElement.style.setProperty('--font-size', `${size}px`);
    }
}
