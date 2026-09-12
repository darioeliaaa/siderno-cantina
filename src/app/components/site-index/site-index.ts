import { ChangeDetectionStrategy, Component, DOCUMENT, OnDestroy, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { NAV } from '../../i18n/ui';

/**
 * Il sommario a tutta pagina. Con quindici pagine per lingua una barra di
 * navigazione orizzontale sarebbe una fila di link illeggibile: qui l'indice
 * è una pagina a sé, numerata come il sommario di un libro, e ogni voce si
 * porta dietro la riga che spiega cosa ci troverai.
 */
@Component({
  selector: 'app-site-index',
  imports: [RouterLink],
  templateUrl: './site-index.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'index-sheet',
    role: 'dialog',
    'aria-modal': 'true',
    '(document:keydown.escape)': 'close.emit()',
  },
})
export class SiteIndex implements OnDestroy {
  readonly close = output<void>();
  readonly i18n = inject(LocaleService);
  readonly entries = NAV;

  private readonly doc = inject(DOCUMENT);
  private readonly previousOverflow = this.doc.body.style.overflow;

  constructor() {
    this.doc.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    this.doc.body.style.overflow = this.previousOverflow;
  }

  number(i: number): string {
    return String(i + 1).padStart(2, '0');
  }
}
