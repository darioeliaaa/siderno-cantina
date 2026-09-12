import { Bilingual, BilingualList } from '../i18n/locale';

export interface Post {
  slug: string;
  /** ISO, per il <time> e per l'ordinamento. */
  date: string;
  dateLabel: Bilingual;
  kicker: Bilingual;
  title: Bilingual;
  standfirst: Bilingual;
  body: BilingualList;
}

export const POSTS: Post[] = [
  {
    slug: 'vendemmia-2025',
    date: '2025-10-06',
    dateLabel: { it: '6 ottobre 2025', en: '6 October 2025' },
    kicker: { it: 'Vendemmia', en: 'Harvest' },
    title: {
      it: 'Quattordici giorni, e poi basta',
      en: 'Fourteen days, and then it was over',
    },
    standfirst: {
      it: 'La 2025 è stata la vendemmia più corta da quando teniamo il registro. Non è una buona notizia, ma non è nemmeno quella cattiva che sembra.',
      en: 'The 2025 was the shortest harvest since we started keeping the ledger. That is not good news, but it is not the bad news it looks like either.',
    },
    body: {
      it: [
        'Abbiamo cominciato il 22 settembre a Punta Alice e chiuso il 5 ottobre al Sèrrone. Quattordici giorni. L’anno scorso ce ne erano voluti ventitré, nel 2019 addirittura trentuno.',
        'La ragione è l’agosto: trentotto giorni sopra i 35 °C e sedici millimetri di pioggia in tutto. Le uve hanno smesso di accumulare zucchero e hanno cominciato a perdere acidità tutte insieme, parcella dopo parcella, senza aspettare nessuno. Quando succede questo non puoi scaglionare: o raccogli, o perdi la freschezza.',
        'Abbiamo fatto tre turni di notte con i fari sul trattore, cosa che non facevamo dal 2017. L’uva entrava in cantina a 16 °C invece che a 28, ed è il motivo per cui il rosato di quest’anno, nonostante l’annata, ha la tensione che ha.',
        'Il dato che ci portiamo dietro: 37.600 bottiglie contro le 41.200 dell’anno scorso, meno 9%. Della Riserva, per la terza annata su sette, non se ne farà.',
      ],
      en: [
        'We started on 22 September at Punta Alice and finished on 5 October at Sèrrone. Fourteen days. Last year it took twenty-three; in 2019 it took thirty-one.',
        'The reason is August: thirty-eight days above 35 °C and sixteen millimetres of rain in total. The grapes stopped accumulating sugar and started shedding acidity all at once, parcel after parcel, waiting for nobody. When that happens you cannot stagger the picking: you either bring it in or you lose the freshness.',
        'We ran three night shifts with the tractor lights on, something we had not done since 2017. Fruit came into the cellar at 16 °C instead of 28 — which is why this year’s rosato, despite the vintage, has the tension it has.',
        'The number we are left with: 37,600 bottles against 41,200 last year, down 9%. And for the third time in seven vintages, there will be no Riserva.',
      ],
    },
  },
  {
    slug: 'potatura-secca',
    date: '2026-01-19',
    dateLabel: { it: '19 gennaio 2026', en: '19 January 2026' },
    kicker: { it: 'Vigna', en: 'Vineyard' },
    title: {
      it: 'Perché potiamo tardi, e ci costa',
      en: 'Why we prune late, and what it costs us',
    },
    standfirst: {
      it: 'Da sei anni spostiamo la potatura del Sèrrone a fine gennaio. Ogni anno qualcuno ci chiede se è saggio. La risposta breve è no.',
      en: 'For six years we have pushed pruning at Sèrrone to late January. Every year someone asks whether that is wise. The short answer is no.',
    },
    body: {
      it: [
        'La potatura tardiva ritarda il germogliamento di otto-dieci giorni. In un posto dove la gelata di ritorno arriva fino ai primi di aprile, quei dieci giorni sono l’unica assicurazione che possiamo permetterci.',
        'Il prezzo lo paghiamo in mano d’opera: a gennaio i tralci sono induriti, il taglio è più lento e la squadra fa metà filare in più di tempo rispetto a dicembre. Su tre ettari e mezzo di alberello sono circa quaranta ore in più.',
        'Sul Sèrrone le accettiamo perché sono viti del 1961 e una gelata sul germoglio non ci costerebbe un’annata: ci costerebbe una pianta. Sulle parcelle giovani, dove il rimpiazzo è un’operazione da un pomeriggio, potiamo a dicembre come tutti.',
        'Il metodo è quello di sempre, Guyot su tutto tranne il Sèrrone e il Trìvio. Nessuna sperimentazione, nessuna macchina: forbice, sega a mano e una persona che decide gemma per gemma.',
      ],
      en: [
        'Late pruning delays budburst by eight to ten days. In a place where a late frost can still arrive in early April, those ten days are the only insurance we can afford.',
        'We pay for it in labour: by January the canes have hardened, cutting is slower, and the team takes half a row longer than it would in December. Across three and a half hectares of bush vines that is about forty extra hours.',
        'At Sèrrone we accept the cost because these are 1961 vines, and a frost on the shoot would not cost us a vintage — it would cost us a plant. On the young parcels, where replacing a vine is an afternoon’s work, we prune in December like everybody else.',
        'The method is the same as always: Guyot everywhere except Sèrrone and Trìvio. No trials, no machines — secateurs, a hand saw, and one person deciding bud by bud.',
      ],
    },
  },
  {
    slug: 'gaglioppo-fuori-casa',
    date: '2026-04-11',
    dateLabel: { it: '11 aprile 2026', en: '11 April 2026' },
    kicker: { it: 'Mercati', en: 'Markets' },
    title: {
      it: 'Il Gaglioppo spiegato a chi non l’ha mai sentito',
      en: 'Explaining Gaglioppo to people who have never heard of it',
    },
    standfirst: {
      it: 'Tre anni di fiere fuori dall’Italia ci hanno insegnato che il problema non è il vino. È la prima frase che dici quando versi.',
      en: 'Three years of fairs outside Italy taught us the problem is not the wine. It is the first sentence you say while you pour.',
    },
    body: {
      it: [
        'Per molto tempo aprivamo dicendo “è un vitigno autoctono calabrese”. Nessuno sapeva cosa farsene: metà delle persone annuiva per educazione e l’altra metà chiedeva se somigliava al Nebbiolo.',
        'Adesso diciamo un’altra cosa: “è rosso, ma è pallido, e va servito fresco”. È una frase che disinnesca l’aspettativa sbagliata prima che il bicchiere arrivi al naso, e da quando la usiamo il numero di persone che torna al banco a fine giornata è più che raddoppiato.',
        'Il resto — i Greci, il Krimisa, gli atleti di Olimpia — lo raccontiamo dopo, se chiedono. È una bella storia, ma non vende una cassa. La temperatura di servizio sì.',
        'Sui mercati esteri oggi va un terzo della produzione: Germania e paesi nordici soprattutto, Giappone da due anni, Stati Uniti ancora no, e non per mancanza di interesse ma di volumi.',
      ],
      en: [
        'For a long time we opened with “it is an indigenous Calabrian variety”. Nobody knew what to do with that: half the room nodded out of politeness and the other half asked whether it was like Nebbiolo.',
        'Now we say something else: “it is red, but it is pale, and it should be served cool”. That sentence defuses the wrong expectation before the glass even reaches the nose, and since we started using it the number of people who come back to the table at the end of the day has more than doubled.',
        'The rest — the Greeks, Krimisa, the athletes of Olympia — we save for afterwards, if they ask. It is a good story, but it does not sell a case. Serving temperature does.',
        'A third of production now goes abroad: Germany and the Nordics above all, Japan for the past two years, the United States not yet — not for lack of interest, but for lack of volume.',
      ],
    },
  },
];

export function postBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Dal più recente. */
export const POSTS_BY_DATE = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
