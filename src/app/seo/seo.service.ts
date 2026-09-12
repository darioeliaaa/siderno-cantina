import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { LocaleService } from '../i18n/locale.service';
import { Bilingual, LOCALES, Locale, PageId, pathFor } from '../i18n/locale';

/** Cambiando questo cambia ogni canonical, hreflang e og:url del sito. */
export const SITE_URL = 'https://sidero-cantina.vercel.app';

export interface PageSeo {
  page: PageId;
  param?: string;
  title: Bilingual;
  description: Bilingual;
}

/**
 * Un solo posto per title, description, canonical, hreflang e Open Graph.
 *
 * Su un sito in due lingue gli hreflang non sono un vezzo: senza, Google
 * tratta /it/vini e /en/wines come due pagine in concorrenza tra loro e ne
 * sceglie una — di solito quella sbagliata per chi cerca. Qui ogni pagina
 * dichiara sé stessa e la propria gemella, più un x-default che manda
 * all'italiano.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly locales = inject(LocaleService);

  apply(seo: PageSeo): void {
    const locale: Locale = this.locales.locale();

    this.locales.page.set({ id: seo.page, param: seo.param });

    const title = seo.title[locale];
    const description = seo.description[locale];
    const canonical = SITE_URL + pathFor(seo.page, locale, seo.param);

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.doc.documentElement.lang = locale;

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:locale', content: locale === 'it' ? 'it_IT' : 'en_GB' });

    this.link('canonical', canonical);
    for (const alt of LOCALES) {
      this.link('alternate', SITE_URL + pathFor(seo.page, alt, seo.param), alt);
    }
    this.link('alternate', SITE_URL + pathFor(seo.page, 'it', seo.param), 'x-default');
  }

  private link(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;

    let el = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
