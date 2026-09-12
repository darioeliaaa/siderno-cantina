import { Routes } from '@angular/router';

import { LOCALES, Locale, SLUGS } from './i18n/locale';

/**
 * Lo stesso albero di pagine, montato due volte con gli slug della rispettiva
 * lingua. Dieci componenti coprono trenta indirizzi: /it/vini/riserva e
 * /en/wines/riserva sono due URL diversi e indicizzabili separatamente, ma
 * dietro c'è una sola scheda da mantenere.
 */
function pagesFor(locale: Locale): Routes {
  const s = (key: keyof typeof SLUGS) => SLUGS[key][locale];

  return [
    { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
    {
      path: s('estate'),
      loadComponent: () => import('./pages/estate/estate').then((m) => m.Estate),
    },
    {
      path: s('wines'),
      loadComponent: () => import('./pages/wines/wines').then((m) => m.Wines),
    },
    {
      path: `${s('wine')}/:slug`,
      loadComponent: () => import('./pages/wine/wine').then((m) => m.WinePage),
    },
    {
      path: s('terroir'),
      loadComponent: () => import('./pages/terroir/terroir').then((m) => m.Terroir),
    },
    {
      path: s('visits'),
      loadComponent: () => import('./pages/visits/visits').then((m) => m.Visits),
    },
    {
      path: s('trade'),
      loadComponent: () => import('./pages/trade/trade').then((m) => m.Trade),
    },
    {
      path: s('journal'),
      loadComponent: () => import('./pages/journal/journal').then((m) => m.Journal),
    },
    {
      path: `${s('post')}/:slug`,
      loadComponent: () => import('./pages/post/post').then((m) => m.PostPage),
    },
    {
      path: s('contact'),
      loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    },
  ];
}

export const routes: Routes = [
  ...LOCALES.map((locale) => ({ path: locale, children: pagesFor(locale) })),
  { path: '', pathMatch: 'full' as const, redirectTo: '/it' },
  { path: '**', redirectTo: '/it' },
];
