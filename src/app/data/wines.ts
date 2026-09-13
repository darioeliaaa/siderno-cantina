import { Bilingual, BilingualList } from '../i18n/locale';

export interface ProfileTrait {
  label: Bilingual;
  /** 0–5, mostrato come tacche su una scala, non come barretta colorata. */
  value: number;
}

export interface Wine {
  slug: string;
  /** Codice d'archivio: è così che i vini sono chiamati in cantina. */
  code: string;
  name: string;
  appellation: Bilingual;
  grape: Bilingual;
  /** Il solo nome del vitigno: serve dove "Gaglioppo 100%, viti del 1961" è troppo. */
  variety: string;
  vintage: string;
  alcohol: string;
  bottles: string;
  parcels: string[];
  soil: Bilingual;
  vinification: Bilingual;
  ageing: Bilingual;
  tagline: Bilingual;
  tasting: Bilingual;
  pairings: BilingualList;
  serve: Bilingual;
  profile: ProfileTrait[];
  /** Il colore del vino nel bicchiere: diventa l'accento della sua pagina. */
  color: string;
  onColor: string;
}

const ACIDITY: Bilingual = { it: 'Acidità', en: 'Acidity' };
const TANNIN: Bilingual = { it: 'Tannino', en: 'Tannin' };
const BODY: Bilingual = { it: 'Corpo', en: 'Body' };
const SALINITY: Bilingual = { it: 'Sapidità', en: 'Salinity' };

export const WINES: Wine[] = [
  {
    slug: 'rosso-classico',
    code: 'SD—01',
    name: 'Sìdero Rosso Classico',
    appellation: { it: 'Cirò Rosso Classico DOC', en: 'Cirò Rosso Classico DOC' },
    grape: { it: 'Gaglioppo 100%', en: '100% Gaglioppo' },
    variety: 'Gaglioppo',
    vintage: '2022',
    alcohol: '13,5%',
    bottles: '18.400',
    parcels: ['Sèrrone', 'Vàsili'],
    soil: {
      it: 'Sabbie gialle su argilla compatta',
      en: 'Yellow sands over compact clay',
    },
    vinification: {
      it: 'Diraspatura soffice, macerazione 14 giorni in cemento, follature a mano',
      en: 'Gentle destemming, 14 days on skins in concrete, hand punch-downs',
    },
    ageing: {
      it: '10 mesi in cemento, 4 mesi in bottiglia',
      en: '10 months in concrete, 4 months in bottle',
    },
    tagline: {
      it: 'Il vino di tutti i giorni, che è la cosa più difficile da fare bene.',
      en: 'The everyday bottle — which is the hardest kind to get right.',
    },
    tasting: {
      it: 'Il Gaglioppo non è un vitigno da colore: nel bicchiere è rubino scarico, quasi trasparente sul bordo, e chi se lo aspetta nero resta spiazzato. Poi arriva il naso — arancia sanguinella, origano secco, un fondo di terra bagnata dopo il primo temporale d’agosto — e il tannino, fine ma presente, che tiene insieme tutto senza asciugare.',
      en: 'Gaglioppo is not a grape you drink with your eyes: pale ruby, almost see-through at the rim, and anyone expecting something black is caught off guard. Then the nose arrives — blood orange, dried oregano, wet earth after the first August storm — and the tannin, fine but there, holding it together without drying you out.',
    },
    pairings: {
      it: ['Capocollo e pane di grano duro', 'Pasta al sugo di maiale', 'Pecorino crotonese giovane'],
      en: ['Capocollo and durum bread', 'Pork ragù with pasta', 'Young pecorino crotonese'],
    },
    serve: { it: '16 °C, calice medio', en: '16 °C, medium bowl' },
    profile: [
      { label: ACIDITY, value: 4 },
      { label: TANNIN, value: 3 },
      { label: BODY, value: 3 },
      { label: SALINITY, value: 3 },
    ],
    color: '#7a2331',
    onColor: '#f0ebe0',
  },
  {
    slug: 'punta-alice',
    code: 'SD—02',
    name: 'Punta Alice',
    appellation: { it: 'Cirò Rosato DOC', en: 'Cirò Rosato DOC' },
    grape: { it: 'Gaglioppo 100%', en: '100% Gaglioppo' },
    variety: 'Gaglioppo',
    vintage: '2024',
    alcohol: '12,5%',
    bottles: '6.100',
    parcels: ['Punta Alice'],
    soil: { it: 'Sabbia marina su ciottoli', en: 'Marine sand over pebbles' },
    vinification: {
      it: 'Pressatura diretta all’alba, fermentazione a 14 °C in acciaio',
      en: 'Direct press at dawn, fermented at 14 °C in steel',
    },
    ageing: { it: '4 mesi sui lieviti fini', en: '4 months on fine lees' },
    tagline: {
      it: 'Vendemmiato alle cinque del mattino, perché alle otto è già tardi.',
      en: 'Picked at five in the morning, because by eight it is already too late.',
    },
    tasting: {
      it: 'Colore buccia di cipolla, quello vero, non il rosa da cartolina ottenuto con due ore di macerazione in più. Al naso pesca tabacchiera e una punta di salmastro che arriva dritta dal mare, che qui è a ottocento metri in linea d’aria. In bocca è teso, asciutto, e finisce prima che tu abbia finito di pensarci — ed è esattamente quello che deve fare.',
      en: 'Onion-skin colour — the real thing, not the postcard pink you get from two extra hours on the skins. Flat peach on the nose and a saline edge that comes straight off the sea, eight hundred metres away as the crow flies. Taut and dry in the mouth, and it finishes before you have finished thinking about it — which is exactly the point.',
    },
    pairings: {
      it: ['Alici marinate', 'Sarde sotto sale e cipolla di Tropea', 'Pasta con la mollica'],
      en: ['Marinated anchovies', 'Salted sardines with Tropea onion', 'Pasta with toasted breadcrumbs'],
    },
    serve: { it: '10 °C, calice slanciato', en: '10 °C, tall bowl' },
    profile: [
      { label: ACIDITY, value: 5 },
      { label: TANNIN, value: 1 },
      { label: BODY, value: 2 },
      { label: SALINITY, value: 5 },
    ],
    color: '#c9695c',
    onColor: '#1b1512',
  },
  {
    slug: 'lipuda',
    code: 'SD—03',
    name: 'Lipuda',
    appellation: { it: 'Cirò Bianco DOC', en: 'Cirò Bianco DOC' },
    grape: { it: 'Greco Bianco 100%', en: '100% Greco Bianco' },
    variety: 'Greco Bianco',
    vintage: '2024',
    alcohol: '12,5%',
    bottles: '8.900',
    parcels: ['Lipuda', 'Manche'],
    soil: { it: 'Argilla bianca e limo di fiume', en: 'White clay and river silt' },
    vinification: {
      it: 'Criomacerazione 6 ore, fermentazione spontanea in acciaio',
      en: 'Six-hour cold soak, spontaneous fermentation in steel',
    },
    ageing: { it: '6 mesi sui lieviti, bâtonnage settimanale', en: '6 months on lees, weekly bâtonnage' },
    tagline: {
      it: 'Il vitigno che i Greci portarono qui, ancora al suo posto.',
      en: 'The grape the Greeks brought here, still exactly where they left it.',
    },
    tasting: {
      it: 'Paglierino con riflessi verdi, il naso parte chiuso e va aperto con calma: cedro, camomilla, mandorla amara sul fondo. Il sorso è più largo di quanto il colore lasci immaginare, e la chiusura è amaricante — una caratteristica del Greco, non un difetto, e la ragione per cui regge un piatto di pesce grasso senza farsi schiacciare.',
      en: 'Straw-yellow with green glints. The nose starts closed and needs coaxing: citron, chamomile, bitter almond underneath. The palate is broader than the colour suggests, and it closes on a bitter note — a trait of Greco, not a flaw, and the reason it can stand up to oily fish without being flattened.',
    },
    pairings: {
      it: ['Baccalà con patate e peperoni cruschi', 'Fritto di paranza', 'Ricotta di pecora fresca'],
      en: ['Salt cod with potatoes and dried peppers', 'Mixed fried fish', 'Fresh sheep ricotta'],
    },
    serve: { it: '11 °C, calice ampio', en: '11 °C, wide bowl' },
    profile: [
      { label: ACIDITY, value: 4 },
      { label: TANNIN, value: 0 },
      { label: BODY, value: 3 },
      { label: SALINITY, value: 4 },
    ],
    color: '#bb9327',
    onColor: '#1b1512',
  },
  {
    slug: 'riserva',
    code: 'SD—04',
    name: 'Sìdero Riserva',
    appellation: {
      it: 'Cirò Rosso Classico Superiore Riserva DOC',
      en: 'Cirò Rosso Classico Superiore Riserva DOC',
    },
    grape: { it: 'Gaglioppo 100%, viti del 1961', en: '100% Gaglioppo, vines planted 1961' },
    variety: 'Gaglioppo',
    vintage: '2019',
    alcohol: '14%',
    bottles: '4.200',
    parcels: ['Sèrrone'],
    soil: { it: 'Argilla ferrosa con scheletro calcareo', en: 'Iron-rich clay with limestone skeleton' },
    vinification: {
      it: 'Grappoli interi al 30%, macerazione 28 giorni, nessun controllo di temperatura',
      en: '30% whole clusters, 28 days on skins, no temperature control',
    },
    ageing: {
      it: '24 mesi in botte grande di rovere di Slavonia, 12 in bottiglia',
      en: '24 months in large Slavonian oak, 12 in bottle',
    },
    tagline: {
      it: 'Si fa solo nelle annate in cui il Sèrrone decide di farla.',
      en: 'Made only in the years when Sèrrone decides it should be.',
    },
    tasting: {
      it: 'Della Riserva 2019 sono uscite 4.200 bottiglie, e nel 2020 e nel 2021 non ne è uscita nessuna: l’uva non c’era. Granato con l’unghia aranciata, naso di scorza d’arancia candita, china, cuoio, e quel timbro ferroso che dà il nome alla cantina. Il tannino è ormai risolto, la spina acida no — è quella che la porterà avanti altri dieci anni.',
      en: 'The 2019 Riserva ran to 4,200 bottles; 2020 and 2021 produced none at all — the fruit was not there. Garnet with an orange rim, candied orange peel, quinine, leather, and the iron note the estate takes its name from. The tannin has resolved by now; the acid spine has not — that is what will carry it another ten years.',
    },
    pairings: {
      it: ['Capretto al forno con patate', 'Selvaggina da penna', 'Formaggi di grotta stagionati'],
      en: ['Roast kid with potatoes', 'Game birds', 'Cave-aged hard cheeses'],
    },
    serve: { it: '18 °C, decantare un’ora', en: '18 °C, decant for an hour' },
    profile: [
      { label: ACIDITY, value: 4 },
      { label: TANNIN, value: 4 },
      { label: BODY, value: 5 },
      { label: SALINITY, value: 3 },
    ],
    color: '#551824',
    onColor: '#f0ebe0',
  },
];

export function wineBySlug(slug: string): Wine | undefined {
  return WINES.find((w) => w.slug === slug);
}
