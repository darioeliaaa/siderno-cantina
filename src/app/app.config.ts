import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Su un sito di quindici pagine è la differenza tra arrivare in cima
      // alla scheda del vino e arrivare a metà, dove ti aveva lasciato la
      // pagina precedente.
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      // Lo slug del vino arriva alla pagina come input(), non pescato da uno
      // snapshot: così passare da un'etichetta all'altra aggiorna davvero la
      // scheda invece di lasciare in pagina quella vecchia.
      withComponentInputBinding(),
    ),
    provideClientHydration(),
  ],
};
