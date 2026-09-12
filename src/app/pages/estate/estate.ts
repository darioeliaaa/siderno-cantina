import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Bilingual } from '../../i18n/locale';
import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { ESTATE_TOTALS } from '../../data/parcels';
import { YearWheel } from '../../components/year-wheel/year-wheel';
import { Reveal } from '../../directives/reveal';

interface Chapter {
  year: string;
  title: Bilingual;
  text: Bilingual;
}

@Component({
  selector: 'app-estate',
  imports: [RouterLink, YearWheel, Reveal],
  templateUrl: './estate.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Estate {
  readonly i18n = inject(LocaleService);
  readonly totals = ESTATE_TOTALS;

  readonly chapters: Chapter[] = [
    {
      year: '1968',
      title: { it: 'Il primo registro', en: 'The first ledger' },
      text: {
        it: 'Nonno Antonio compra tre ettari al Sèrrone e comincia a scrivere su un quaderno a quadretti quanto raccoglie, quanto vende e a chi. Quel quaderno esiste ancora, e da allora non abbiamo mai smesso di tenerne uno.',
        en: 'Our grandfather Antonio buys three hectares at Sèrrone and starts writing down, in a squared notebook, how much he picks, how much he sells and to whom. That notebook still exists, and we have kept one ever since.',
      },
    },
    {
      year: '1994',
      title: { it: 'Si imbottiglia', en: 'Bottling begins' },
      text: {
        it: 'Fino a quell’anno l’uva andava alla cantina sociale. Mio padre decide di tenersene una parte e imbottigliarla con un’etichetta propria: 2.400 bottiglie, vendute quasi tutte nel raggio di venti chilometri.',
        en: 'Until that year the fruit went to the co-operative. Our father decides to keep part of it and bottle it under his own label: 2,400 bottles, nearly all sold within twenty kilometres.',
      },
    },
    {
      year: '2016',
      title: { it: 'Fuori dalla provincia', en: 'Beyond the province' },
      text: {
        it: 'La prima fiera all’estero, a Düsseldorf, con due casse e nessuna idea di cosa dire. Oggi un terzo della produzione esce dall’Italia, e la lezione più utile l’abbiamo imparata lì: spiegare il Gaglioppo prima di versarlo.',
        en: 'The first fair abroad, in Düsseldorf, with two cases and no idea what to say. Today a third of production leaves Italy, and the most useful lesson came from there: explain Gaglioppo before you pour it.',
      },
    },
  ];

  readonly principles: Chapter[] = [
    {
      year: '01',
      title: { it: 'Solo quello che c’è', en: 'Only what is there' },
      text: {
        it: 'Nel 2020 e nel 2021 la Riserva non è uscita. Nessuno ci obbliga a farla ogni anno, e un’etichetta che esce sempre uguale è un’etichetta che non racconta l’annata.',
        en: 'In 2020 and 2021 there was no Riserva. Nobody forces us to make it every year, and a label that comes out the same every vintage is a label that tells you nothing about the year.',
      },
    },
    {
      year: '02',
      title: { it: 'A mano, dove serve', en: 'By hand, where it counts' },
      text: {
        it: 'Vendemmia in cassette da 15 kg su tutte le parcelle, potatura a mano ovunque. Il resto — pompe, presse, imbottigliamento — è meccanico, e va benissimo così.',
        en: 'Harvest into 15 kg crates across every parcel, hand pruning everywhere. The rest — pumps, press, bottling line — is mechanical, and that is entirely fine.',
      },
    },
    {
      year: '03',
      title: { it: 'Niente legno nuovo', en: 'No new oak' },
      text: {
        it: 'Cemento per il Rosso e il Rosato, acciaio per il Bianco, botti grandi di rovere con almeno sei anni di servizio per la Riserva. Il Gaglioppo ha già il suo carattere: non ha bisogno che gliene prestiamo un altro.',
        en: 'Concrete for the red and the rosato, steel for the white, large oak casks with at least six years of service for the Riserva. Gaglioppo already has a character: it does not need us to lend it another.',
      },
    },
  ];

  constructor() {
    inject(SeoService).apply({
      page: 'estate',
      title: {
        it: 'La cantina — tre generazioni a Cirò | Sìdero',
        en: 'The estate — three generations in Cirò | Sìdero',
      },
      description: {
        it: 'Dal 1968 a Cirò: come è nata la cantina, come lavoriamo in vigna e in cantina, e perché certe annate non escono.',
        en: 'In Cirò since 1968: how the estate began, how we work in the vineyard and the cellar, and why some vintages never leave it.',
      },
    });
  }
}
