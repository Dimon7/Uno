import { Component, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menu, close, moon, sunny } from 'ionicons/icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu',
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <ion-menu contentId="main-content" side="start">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
          <ion-buttons slot="end">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon name="close"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-icon [name]="isDark() ? 'sunny' : 'moon'" slot="start"></ion-icon>
            <ion-label>Dark Mode</ion-label>
            <ion-toggle
              [checked]="isDark()"
              (ionChange)="toggleTheme()">
            </ion-toggle>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
  `,
  styles: [`
    :host {
      --background: #ffffff;
    }

    :host ion-content {
      --background: #ffffff;
    }

    :host ion-toolbar {
      --background: #ffffff;
    }

    :host ion-item {
      --background: #ffffff;
    }

    :host-context(html.dark) {
      --background: var(--ion-background-color);
    }

    :host-context(html.dark) ion-content {
      --background: var(--ion-background-color);
    }

    :host-context(html.dark) ion-toolbar {
      --background: var(--ion-toolbar-background);
    }

    :host-context(html.dark) ion-item {
      --background: transparent;
    }

    ion-icon[slot="start"] {
      margin-right: 12px;
      color: var(--ion-color-primary);
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonMenuToggle,
  ],
})
export class MenuComponent {
  readonly isDark = this.themeService.isDark;

  constructor(private themeService: ThemeService) {
    addIcons({ menu, close, moon, sunny });
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
