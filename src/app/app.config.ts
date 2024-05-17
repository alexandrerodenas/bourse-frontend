import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), {provide: LOCALE_ID, useValue: 'fr-FR' }]
};
