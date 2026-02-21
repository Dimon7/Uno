import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideZoneChangeDetection } from '@angular/core';

import { AppComponent } from './app/app.component';
import { HomePage } from './app/pages/home/home.page';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter([
      { path: '', component: HomePage },
    ]),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
});
