import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Bilingual } from '../../i18n/locale';
import { LocaleService } from '../../i18n/locale.service';

interface Layer {
  y: number;
  height: number;
  depth: string;
  fill: string;
  name: Bilingual;
  note: Bilingual;
}

/**
 * La sezione del suolo del Sèrrone, disegnata come su un quaderno di
 * pedologia. È l'unica immagine che serve davvero per spiegare perché il
 * vino sa di quello che sa: il resto sono aggettivi.
 */
@Component({
  selector: 'app-soil-profile',
  templateUrl: './soil-profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoilProfile {
  readonly i18n = inject(LocaleService);

  readonly layers: Layer[] = [
    {
      y: 62,
      height: 52,
      depth: '0 — 30 cm',
      fill: 'url(#sand)',
      name: { it: 'Sabbia gialla', en: 'Yellow sand' },
      note: {
        it: 'Drena in fretta: dopo un temporale d’agosto l’acqua sparisce in un’ora.',
        en: 'Drains fast: after an August storm the water is gone within the hour.',
      },
    },
    {
      y: 114,
      height: 78,
      depth: '30 — 90 cm',
      fill: 'url(#clayLight)',
      name: { it: 'Argilla sabbiosa', en: 'Sandy clay' },
      note: {
        it: 'Dove sta la maggior parte delle radici delle viti giovani.',
        en: 'Where most of the roots of the young vines sit.',
      },
    },
    {
      y: 192,
      height: 128,
      depth: '90 — 180 cm',
      fill: 'url(#clayIron)',
      name: { it: 'Argilla ferrosa', en: 'Iron-rich clay' },
      note: {
        it: 'Il ferro che dà il nome alla cantina. Trattiene acqua per tutto luglio.',
        en: 'The iron the estate is named after. Holds water right through July.',
      },
    },
    {
      y: 320,
      height: 100,
      depth: '180 — 300 cm',
      fill: 'url(#pebbles)',
      name: { it: 'Scheletro calcareo', en: 'Limestone skeleton' },
      note: {
        it: 'Ci arrivano solo le viti del 1961, ed è il motivo per cui sopravvivono alla siccità.',
        en: 'Only the 1961 vines reach this far — which is why they survive the drought.',
      },
    },
  ];
}
