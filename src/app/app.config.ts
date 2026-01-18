import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Noir, MyPresets, Cyan } from '../ThemePreset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: MyPresets[localStorage.getItem("color-preset") || "Cyan"] || Cyan,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    }),
    provideAnimations()
  ]
};
