import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { POSTS_BY_DATE } from '../../data/posts';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-journal',
  imports: [RouterLink, Reveal],
  templateUrl: './journal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Journal {
  readonly i18n = inject(LocaleService);
  readonly posts = POSTS_BY_DATE;

  constructor() {
    inject(SeoService).apply({
      page: 'journal',
      title: {
        it: 'Diario — note dalla vigna e dalla cantina | Sìdero',
        en: 'Journal — notes from the vineyard and the cellar | Sìdero',
      },
      description: {
        it: 'Vendemmia, potatura, mercati: quello che succede in azienda, scritto mentre succede. Nessun comunicato stampa.',
        en: 'Harvest, pruning, markets: what happens on the estate, written while it happens. No press releases.',
      },
    });
  }
}
