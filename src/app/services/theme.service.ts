import { Injectable, signal, effect, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';

  readonly isDark = signal<boolean>(false);

  constructor() {
    this.loadFromStorage();
    
    // Apply theme when signal changes
    effect(() => {
      const dark = this.isDark();
      if (dark) {
        document.body.classList.add('dark-theme');
        document.documentElement.classList.add('dark');
      } else {
        document.body.classList.remove('dark-theme');
        document.documentElement.classList.remove('dark');
      }
    });
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.isDark.set(stored === 'dark');
    } else {
      // Check system preference
      this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, this.isDark() ? 'dark' : 'light');
  }

  toggle(): void {
    this.isDark.update(dark => !dark);
    this.saveToStorage();
  }
}
