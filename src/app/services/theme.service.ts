import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly _darkMode = signal<boolean>(false);
    readonly darkMode = this._darkMode.asReadonly();
    private readonly _fontSize = signal<number>(16);
    readonly fontSize = this._fontSize.asReadonly();
    readonly isChangingTheme = signal<boolean>(false);

    constructor() {
        this.applyDarkModeToHtml(this._darkMode(), false);
    }

    toggleDarkMode() {
        // Show loading spinner natively first
        this.isChangingTheme.set(true);

        // Wait 150ms to ensure the UI paints the loader
        setTimeout(() => {
            const newMode = !this._darkMode();
            this._darkMode.set(newMode);
            this.applyDarkModeToHtml(newMode, true);

            // Allow 400ms for browser to handle the massive repaint of tables
            setTimeout(() => {
                this.isChangingTheme.set(false);
                this.applyDarkModeToHtml(newMode, false);
            }, 400);
        }, 150);
    }

    setDarkMode(isDarkMode: boolean) {
        this._darkMode.set(isDarkMode);
        this.applyDarkModeToHtml(isDarkMode, false);
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

    private applyDarkModeToHtml(isDarkMode: boolean, isSwitching: boolean = false) {
        const htmlEl = document.documentElement;
        if (isDarkMode) {
            htmlEl.classList.add('dark');
        } else {
            htmlEl.classList.remove('dark');
        }

        if (isSwitching) {
            htmlEl.classList.add('theme-switching');
        } else {
            htmlEl.classList.remove('theme-switching');
        }
    }

    private applyFontSize(size: number) {
        document.documentElement.style.setProperty('--font-size', `${size}px`);
    }
}
