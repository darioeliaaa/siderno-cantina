import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Bilingual, BilingualList } from '../../i18n/locale';
import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { OPENING } from '../../data/estate';
import { Reveal } from '../../directives/reveal';

interface Visit {
  id: string;
  name: Bilingual;
  duration: Bilingual;
  price: string;
  people: Bilingual;
  includes: BilingualList;
  note: Bilingual;
}

@Component({
  selector: 'app-visits',
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './visits.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Visits {
  readonly i18n = inject(LocaleService);
  readonly opening = OPENING;
  private readonly fb = inject(FormBuilder);

  readonly sent = signal(false);

  readonly visits: Visit[] = [
    {
      id: 'registro',
      name: { it: 'Il registro', en: 'The ledger' },
      duration: { it: '60 minuti', en: '60 minutes' },
      price: '15 €',
      people: { it: 'fino a 12 persone', en: 'up to 12 people' },
      includes: {
        it: ['Giro della cantina', 'Quattro vini in degustazione', 'Pane, olio e capocollo'],
        en: ['Cellar walk-through', 'Four wines tasted', 'Bread, oil and capocollo'],
      },
      note: {
        it: 'La visita base, quella che facciamo anche il sabato mattina. Si finisce seduti al tavolo grande con il quaderno del 1968 aperto davanti.',
        en: 'The basic visit, the one we also run on Saturday mornings. It ends around the big table with the 1968 notebook open in front of you.',
      },
    },
    {
      id: 'fossa',
      name: { it: 'La fossa', en: 'The pit' },
      duration: { it: '2 ore e mezza', en: '2.5 hours' },
      price: '35 €',
      people: { it: 'fino a 8 persone', en: 'up to 8 people' },
      includes: {
        it: [
          'Sopralluogo al Sèrrone, con la fossa aperta',
          'Le quattro etichette più una annata vecchia',
          'Tagliere e pasta fatta in casa',
        ],
        en: [
          'Walk up to Sèrrone, with the soil pit open',
          'All four labels plus one older vintage',
          'Local cured meats and home-made pasta',
        ],
      },
      note: {
        it: 'Si sale in vigna e si guarda il suolo in sezione, dentro la fossa che teniamo aperta apposta. È la visita che consigliamo a chi il vino lo vende.',
        en: 'We walk up into the vineyard and look at the soil in section, in the pit we keep open on purpose. This is the visit we recommend to people who sell wine for a living.',
      },
    },
    {
      id: 'vendemmia',
      name: { it: 'Vendemmia', en: 'Harvest day' },
      duration: { it: 'mezza giornata', en: 'half a day' },
      price: '60 €',
      people: { it: 'fino a 6 persone', en: 'up to 6 people' },
      includes: {
        it: [
          'Raccolta in cassette dalle 6:30 alle 10:00',
          'Colazione in vigna',
          'Pranzo con la squadra',
        ],
        en: ['Picking into crates from 6:30 to 10:00', 'Breakfast in the vineyard', 'Lunch with the crew'],
      },
      note: {
        it: 'Solo a settembre, e solo nei giorni in cui si vendemmia davvero — che decide l’uva, non il calendario. Vi avvisiamo con tre giorni di preavviso.',
        en: 'September only, and only on days when we are actually picking — which the fruit decides, not the calendar. We confirm three days ahead.',
      },
    },
  ];

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    visit: ['registro', Validators.required],
    date: ['', Validators.required],
    people: [2, [Validators.required, Validators.min(1), Validators.max(12)]],
    language: ['it', Validators.required],
    notes: [''],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
  }

  constructor() {
    inject(SeoService).apply({
      page: 'visits',
      title: {
        it: 'Visite e degustazioni in cantina a Cirò | Sìdero',
        en: 'Cellar visits and tastings in Cirò | Sìdero',
      },
      description: {
        it: 'Tre formule di visita su appuntamento, in italiano e in inglese: degustazione breve, sopralluogo in vigna con la fossa aperta, giornata di vendemmia a settembre.',
        en: 'Three visit formats by appointment, in Italian and English: short tasting, vineyard walk with the soil pit open, and a harvest morning in September.',
      },
    });
  }
}
