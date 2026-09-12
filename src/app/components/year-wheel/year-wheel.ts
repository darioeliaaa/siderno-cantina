import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Bilingual } from '../../i18n/locale';
import { LocaleService } from '../../i18n/locale.service';

interface Phase {
  from: number;
  to: number;
  name: Bilingual;
  what: Bilingual;
}

const MONTHS: Record<'it' | 'en', string[]> = {
  it: ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'],
  en: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
};

/**
 * L'anno in vigna come un quadrante. Il mese corrente si calcola nel
 * costruttore con una semplice Date: nessun DOM, quindi il valore è già
 * giusto nell'HTML prerenderizzato — chi apre la pagina con JavaScript
 * lento non vede prima la fase sbagliata e poi quella buona.
 */
@Component({
  selector: 'app-year-wheel',
  templateUrl: './year-wheel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearWheel {
  readonly i18n = inject(LocaleService);

  readonly phases: Phase[] = [
    {
      from: 0,
      to: 2,
      name: { it: 'Potatura', en: 'Pruning' },
      what: {
        it: 'Forbice e sega a mano, gemma per gemma. Sul Sèrrone si comincia tardi apposta.',
        en: 'Secateurs and hand saw, bud by bud. At Sèrrone we start late on purpose.',
      },
    },
    {
      from: 2,
      to: 4,
      name: { it: 'Germogliamento', en: 'Budburst' },
      what: {
        it: 'Tre settimane col fiato sospeso: fino ai primi di aprile la gelata può ancora arrivare.',
        en: 'Three weeks of held breath: a frost can still arrive until early April.',
      },
    },
    {
      from: 4,
      to: 6,
      name: { it: 'Fioritura', en: 'Flowering' },
      what: {
        it: 'Dieci giorni che decidono quanta uva ci sarà. Non si può fare niente, solo guardare.',
        en: 'Ten days that decide how much fruit there will be. Nothing to do but watch.',
      },
    },
    {
      from: 6,
      to: 8,
      name: { it: 'Invaiatura', en: 'Veraison' },
      what: {
        it: 'L’uva cambia colore. Da qui si conta all’indietro per fissare la data di vendemmia.',
        en: 'The fruit changes colour. From here we count backwards to set the picking date.',
      },
    },
    {
      from: 8,
      to: 10,
      name: { it: 'Vendemmia', en: 'Harvest' },
      what: {
        it: 'A mano, in cassette da 15 kg. Nel 2025 sono bastati quattordici giorni.',
        en: 'By hand, in 15 kg crates. In 2025 it took just fourteen days.',
      },
    },
    {
      from: 10,
      to: 12,
      name: { it: 'Riposo', en: 'Dormancy' },
      what: {
        it: 'La vigna dorme, la cantina lavora: travasi, assaggi, decisione sulla Riserva.',
        en: 'The vineyard sleeps, the cellar works: rackings, tastings, the call on the Riserva.',
      },
    },
  ];

  readonly monthIndex = new Date().getMonth();
  readonly current =
    this.phases.find((p) => this.monthIndex >= p.from && this.monthIndex < p.to) ?? this.phases[0];

  readonly ticks = MONTHS.it.map((_, i) => ({
    index: i,
    at: this.pointOnCircle(i + 0.5, 128),
  }));

  readonly arcs = this.phases.map((phase) => ({
    phase,
    d: this.arcPath(phase.from, phase.to, 152),
    active: phase === this.current,
  }));

  readonly needle = this.pointOnCircle(this.monthIndex + 0.5, 152);

  monthLetter(i: number): string {
    return MONTHS[this.i18n.locale()][i];
  }

  private pointOnCircle(month: number, radius: number): { x: number; y: number } {
    const angle = ((month / 12) * 360 - 90) * (Math.PI / 180);
    return {
      x: +(200 + radius * Math.cos(angle)).toFixed(2),
      y: +(200 + radius * Math.sin(angle)).toFixed(2),
    };
  }

  private arcPath(from: number, to: number, radius: number): string {
    const start = this.pointOnCircle(from + 0.06, radius);
    const end = this.pointOnCircle(to - 0.06, radius);
    const large = to - from > 6 ? 1 : 0;
    return `M${start.x},${start.y} A${radius},${radius} 0 ${large} 1 ${end.x},${end.y}`;
  }
}
