export type Locale = 'it' | 'en';

export const LOCALES: readonly Locale[] = ['it', 'en'];
export const DEFAULT_LOCALE: Locale = 'it';

/** Testo che esiste in entrambe le lingue. */
export type Bilingual = Record<Locale, string>;
export type BilingualList = Record<Locale, string[]>;

export type PageId =
  | 'home'
  | 'estate'
  | 'wines'
  | 'wine'
  | 'terroir'
  | 'visits'
  | 'trade'
  | 'journal'
  | 'post'
  | 'contact';

/**
 * Gli slug cambiano lingua per lingua. È la differenza tra un sito
 * "tradotto" e un sito davvero multilingua: /en/wines e /it/vini sono due
 * URL distinti, ognuno indicizzabile per le parole che il suo pubblico
 * digita davvero. Il PageId è il ponte tra i due — serve al selettore
 * lingua per portarti sulla stessa pagina e non sulla home.
 */
export const SLUGS: Record<PageId, Bilingual> = {
  home: { it: '', en: '' },
  estate: { it: 'cantina', en: 'estate' },
  wines: { it: 'vini', en: 'wines' },
  wine: { it: 'vini', en: 'wines' },
  terroir: { it: 'territorio', en: 'terroir' },
  visits: { it: 'visite', en: 'visits' },
  trade: { it: 'distribuzione', en: 'export' },
  journal: { it: 'diario', en: 'journal' },
  post: { it: 'diario', en: 'journal' },
  contact: { it: 'contatti', en: 'contact' },
};

/**
 * Path assoluto di una pagina in una data lingua. Lo slash iniziale non è un
 * dettaglio: senza, routerLink lo tratta come indirizzo relativo e da
 * /it/vini/riserva si finisce su /it/vini/riserva/it/vini.
 */
export function pathFor(page: PageId, locale: Locale, param?: string): string {
  const segments = [locale, SLUGS[page][locale], param].filter(
    (segment): segment is string => !!segment,
  );
  return `/${segments.join('/')}`;
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'it' || value === 'en';
}
