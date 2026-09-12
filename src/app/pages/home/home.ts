import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { WINES } from '../../data/wines';
import { ESTATE_TOTALS } from '../../data/parcels';
import { POSTS_BY_DATE } from '../../data/posts';
import { ParcelMap } from '../../components/parcel-map/parcel-map';
import { YearWheel } from '../../components/year-wheel/year-wheel';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ParcelMap, YearWheel, Reveal],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly i18n = inject(LocaleService);
  readonly wines = WINES;
  readonly totals = ESTATE_TOTALS;
  readonly latest = POSTS_BY_DATE.slice(0, 2);

  constructor() {
    inject(SeoService).apply({
      page: 'home',
      title: {
        it: 'Sìdero — Cantina in Cirò, costa ionica calabrese',
        en: 'Sìdero — Wine estate in Cirò, Calabria',
      },
      description: {
        it: 'Diciotto ettari di Gaglioppo e Greco Bianco a Cirò (KR). Quattro etichette, sei parcelle, vendemmia a mano. Visite in cantina su appuntamento.',
        en: 'Eighteen hectares of Gaglioppo and Greco Bianco in Cirò, Calabria. Four labels, six parcels, hand harvest. Cellar visits by appointment.',
      },
    });
  }
}
