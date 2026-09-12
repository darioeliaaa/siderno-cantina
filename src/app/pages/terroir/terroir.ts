import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Bilingual } from '../../i18n/locale';
import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { ParcelMap } from '../../components/parcel-map/parcel-map';
import { SoilProfile } from '../../components/soil-profile/soil-profile';
import { Reveal } from '../../directives/reveal';

interface Reading {
  label: Bilingual;
  value: string;
  note: Bilingual;
}

@Component({
  selector: 'app-terroir',
  imports: [ParcelMap, SoilProfile, Reveal],
  templateUrl: './terroir.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Terroir {
  readonly i18n = inject(LocaleService);

  /** Medie della stazione aziendale, 2015–2025. */
  readonly climate: Reading[] = [
    {
      label: { it: 'Pioggia annua', en: 'Annual rainfall' },
      value: '612 mm',
      note: {
        it: 'Quasi tutta tra novembre e febbraio. D’estate non piove, e il calcolo si fa su questo.',
        en: 'Nearly all of it between November and February. It does not rain in summer, and every decision assumes that.',
      },
    },
    {
      label: { it: 'Giorni sopra 35 °C', en: 'Days above 35 °C' },
      value: '31',
      note: {
        it: 'Erano 18 nel 2015. È il dato che ci ha fatto spostare la potatura e rivedere le altezze di chioma.',
        en: 'It was 18 in 2015. This is the number that made us move pruning and rethink canopy height.',
      },
    },
    {
      label: { it: 'Escursione agosto', en: 'August day–night swing' },
      value: '13,4 °C',
      note: {
        it: 'La brezza serale da mare entra alle sei e raffredda i grappoli: è quella che tiene su l’acidità.',
        en: 'The evening sea breeze arrives at six and cools the bunches: that is what keeps the acidity up.',
      },
    },
    {
      label: { it: 'Distanza dal mare', en: 'Distance to the sea' },
      value: '0,8 km',
      note: {
        it: 'Alla parcella più bassa. Sale sulle foglie a fine estate, e nel bicchiere si sente.',
        en: 'At the lowest parcel. Salt settles on the leaves by late summer, and you taste it in the glass.',
      },
    },
  ];

  constructor() {
    inject(SeoService).apply({
      page: 'terroir',
      title: {
        it: 'Il territorio — suolo, mare e clima a Cirò | Sìdero',
        en: 'The terroir — soil, sea and climate in Cirò | Sìdero',
      },
      description: {
        it: 'Sabbie gialle, argilla ferrosa e scheletro calcareo a ottocento metri dallo Ionio. Sezione del suolo, dati climatici e le sei parcelle una per una.',
        en: 'Yellow sands, iron-rich clay and limestone skeleton, eight hundred metres from the Ionian. Soil profile, climate data and all six parcels.',
      },
    });
  }
}
