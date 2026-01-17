import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Noir, MyPresets } from '../ThemePreset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: MyPresets[localStorage.getItem("color-preset") || "Noir"] || Noir,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    }),
    provideAnimations()
  ]
};
