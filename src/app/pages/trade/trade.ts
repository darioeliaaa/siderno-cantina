import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { ESTATE } from '../../data/estate';
import { Reveal } from '../../directives/reveal';

interface Term {
  label: string;
  value: string;
}

/**
 * La pagina in cui il multilingua smette di essere traduzione.
 *
 * L'italiano parla a un ristorante di Cosenza: cartoni da sei, consegna in
 * settimana, agente di zona. L'inglese parla a un importatore di Amburgo:
 * pallet interi, Incoterms, accise, esclusiva di territorio. Sono due
 * pubblici con due domande diverse, e tradurre la pagina italiana avrebbe
 * risposto alla domanda sbagliata in entrambe le lingue.
 */
@Component({
  selector: 'app-trade',
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './trade.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trade {
  readonly i18n = inject(LocaleService);
  readonly estate = ESTATE;
  private readonly fb = inject(FormBuilder);

  readonly sent = signal(false);

  readonly termsIt: Term[] = [
    { label: 'Formato', value: 'Cartone da 6 bottiglie · 0,75 l' },
    { label: 'Ordine minimo', value: '2 cartoni, anche misti' },
    { label: 'Consegna', value: '5 — 7 giorni lavorativi, corriere refrigerato da maggio a settembre' },
    { label: 'Pagamento', value: 'Bonifico a 30 giorni data fattura, dal secondo ordine' },
    { label: 'Porto franco', value: 'Sopra i 6 cartoni' },
    { label: 'Materiali', value: 'Schede tecniche, foto ad alta risoluzione e testi per la carta dei vini' },
  ];

  readonly termsEn: Term[] = [
    { label: 'Minimum order', value: 'One mixed pallet — 600 bottles' },
    { label: 'Incoterms', value: 'EXW Cirò (KR) or FCA, carrier of your choice' },
    { label: 'Lead time', value: '3 weeks from confirmed order' },
    { label: 'Territory', value: 'Exclusivity considered from the second full pallet' },
    { label: 'Documents', value: 'e-AD, full analysis, COLA-ready labels, organic certificate' },
    { label: 'Samples', value: 'Two bottles per label, freight at your cost' },
  ];

  readonly marketsIt = [
    'Calabria',
    'Sicilia',
    'Campania',
    'Lazio',
    'Lombardia',
    'Emilia-Romagna',
    'Piemonte',
    'Veneto',
    'Toscana',
    'Puglia',
  ];

  readonly marketsEn = [
    'Germany — covered',
    'Denmark — covered',
    'Sweden — covered',
    'Norway — covered',
    'Netherlands — covered',
    'Japan — covered',
    'United Kingdom — open',
    'United States — open',
    'Canada — open',
    'Switzerland — open',
  ];

  readonly channelsIt = ['Ristorante', 'Enoteca', 'Wine bar', 'Gastronomia', 'Hotel'];
  readonly channelsEn = ['Importer', 'Distributor', 'Retail chain', 'On-trade group', 'E-commerce'];

  readonly form = this.fb.nonNullable.group({
    company: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    channel: ['', Validators.required],
    market: ['', Validators.required],
    volume: [''],
    message: [''],
  });

  /**
   * Nella demo il lead si ferma qui e si mostra: è esattamente il corpo
   * JSON che un webhook consegnerebbe ad Airtable, HubSpot o un foglio
   * strutturato, con la lingua della richiesta già dentro — perché il
   * commerciale deve sapere in che lingua richiamare.
   */
  readonly payload = computed(() =>
    JSON.stringify(
      {
        source: 'sidero-ciro.it',
        locale: this.i18n.locale(),
        received_at: new Date().toISOString().slice(0, 19) + 'Z',
        lead: this.form.getRawValue(),
        owner: this.i18n.locale() === 'it' ? 'agente.italia' : 'export.manager',
      },
      null,
      2,
    ),
  );

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
  }

  constructor() {
    inject(SeoService).apply({
      page: 'trade',
      title: {
        it: 'Distribuzione — per ristoranti ed enoteche | Sìdero',
        en: 'Export — importers and distributors | Sìdero Cirò DOC',
      },
      description: {
        it: 'Condizioni per la ristorazione e le enoteche italiane: cartoni da sei, ordine minimo due cartoni, consegna in una settimana, materiali per la carta dei vini.',
        en: 'Cirò DOC from Calabria for importers and distributors: one-pallet minimum, EXW or FCA, three-week lead time, territory exclusivity from the second pallet.',
      },
    });
  }
}
