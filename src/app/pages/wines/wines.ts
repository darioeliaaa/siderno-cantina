import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { WINES } from '../../data/wines';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-wines',
  imports: [RouterLink, Reveal],
  templateUrl: './wines.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wines {
  readonly i18n = inject(LocaleService);
  readonly wines = WINES;
  readonly steps = [1, 2, 3, 4, 5];

  constructor() {
    inject(SeoService).apply({
      page: 'wines',
      title: {
        it: 'I vini — Cirò Rosso, Rosato, Bianco e Riserva | Sìdero',
        en: 'The wines — Cirò Rosso, Rosato, Bianco and Riserva | Sìdero',
      },
      description: {
        it: 'Quattro etichette Cirò DOC: Rosso Classico, Rosato Punta Alice, Bianco Lipuda e Riserva. Schede tecniche, degustazione e abbinamenti.',
        en: 'Four Cirò DOC labels: Rosso Classico, Punta Alice rosato, Lipuda white and the Riserva. Technical sheets, tasting notes and pairings.',
      },
    });
  }
}
