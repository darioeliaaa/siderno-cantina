import { Component, DOCUMENT, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { SiteHeader } from './components/site-header/site-header';
import { SiteFooter } from './components/site-footer/site-footer';
import { LocaleService } from './i18n/locale.service';
import { ESTATE, OPENING } from './data/estate';
import { SITE_URL } from './site.config';

const WINERY_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Winery',
  name: ESTATE.name,
  legalName: ESTATE.legalName,
  url: SITE_URL,
  telephone: ESTATE.phone,
  email: ESTATE.email,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ESTATE.street,
    addressLocality: ESTATE.city,
    addressRegion: ESTATE.province,
    postalCode: ESTATE.postalCode,
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: ESTATE.coordinates.lat,
    longitude: ESTATE.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '13:00',
    },
  ],
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './app.html',
})
export class App {
  readonly i18n = inject(LocaleService);
  readonly opening = OPENING;

  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  constructor() {
    this.meta.updateTag({ property: 'og:site_name', content: `${ESTATE.name} — Cirò` });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // I dati strutturati valgono più di qualsiasi meta tag per un'azienda con
    // una sede fisica: indirizzo, coordinate e orari finiscono nella scheda
    // laterale di Google, non solo nel risultato di ricerca.
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(WINERY_JSON_LD);
    this.doc.head.appendChild(script);
  }
}
