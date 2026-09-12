import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { WINES, wineBySlug } from '../../data/wines';
import { PARCELS } from '../../data/parcels';
import { Reveal } from '../../directives/reveal';

/**
 * La scheda di un'etichetta. È l'unica pagina del sito che cambia colore:
 * --vino prende il colore del vino nel bicchiere e con lui si tingono
 * testata, tacche del profilo, link e bordi dei campi. Quattro vini, quattro
 * pagine che sembrano quattro posti diversi, con un foglio di stile solo.
 */
@Component({
  selector: 'app-wine',
  imports: [RouterLink, Reveal],
  templateUrl: './wine.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--vino]': 'wine()?.color',
    '[style.--on-vino]': 'wine()?.onColor',
  },
})
export class WinePage {
  readonly slug = input.required<string>();
  readonly i18n = inject(LocaleService);
  private readonly seo = inject(SeoService);

  readonly wine = computed(() => wineBySlug(this.slug()));
  readonly steps = [1, 2, 3, 4, 5];

  readonly parcels = computed(() => {
    const wine = this.wine();
    return wine ? PARCELS.filter((p) => wine.parcels.includes(p.name)) : [];
  });

  readonly siblings = computed(() => {
    const i = WINES.findIndex((w) => w.slug === this.slug());
    return {
      previous: i > 0 ? WINES[i - 1] : WINES[WINES.length - 1],
      next: i < WINES.length - 1 ? WINES[i + 1] : WINES[0],
    };
  });

  constructor() {
    effect(() => {
      const wine = this.wine();
      if (!wine) return;

      this.seo.apply({
        page: 'wine',
        param: wine.slug,
        title: {
          it: `${wine.name} — ${wine.appellation.it} ${wine.vintage} | Sìdero`,
          en: `${wine.name} — ${wine.appellation.en} ${wine.vintage} | Sìdero`,
        },
        description: {
          it: `${wine.tagline.it} ${wine.grape.it}, ${wine.alcohol}, ${wine.bottles} bottiglie. Scheda tecnica, degustazione e abbinamenti.`,
          en: `${wine.tagline.en} ${wine.grape.en}, ${wine.alcohol}, ${wine.bottles} bottles. Technical sheet, tasting note and pairings.`,
        },
      });
    });
  }
}
