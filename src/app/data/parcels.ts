import { Bilingual } from '../i18n/locale';

export interface Parcel {
  name: string;
  /** Poligono nel sistema di coordinate della mappa (viewBox 0 0 720 520). */
  shape: string;
  labelAt: { x: number; y: number };
  hectares: string;
  altitude: string;
  exposure: Bilingual;
  grape: Bilingual;
  planted: string;
  soil: Bilingual;
  note: Bilingual;
  /** Slug delle etichette che nascono qui. */
  wines: string[];
}

/**
 * Le sei parcelle aziendali. La geometria è disegnata a mano: non è una
 * mappa reale, è una tavola — l'equivalente disegnato di quello che in
 * cantina sta appeso al muro accanto alla porta dell'ufficio.
 */
export const PARCELS: Parcel[] = [
  {
    name: 'Sèrrone',
    shape: 'M96,74 L214,52 L262,128 L196,186 L108,160 Z',
    labelAt: { x: 174, y: 118 },
    hectares: '3,4 ha',
    altitude: '232 m',
    exposure: { it: 'Sud-ovest', en: 'South-west' },
    grape: { it: 'Gaglioppo', en: 'Gaglioppo' },
    planted: '1961',
    soil: { it: 'Argilla ferrosa, scheletro calcareo', en: 'Iron-rich clay, limestone skeleton' },
    note: {
      it: 'Le viti più vecchie dell’azienda, ad alberello. Si vendemmia a mano in cassette da 15 kg perché il trattore lì non entra.',
      en: 'The oldest vines on the estate, bush-trained. Picked by hand into 15 kg crates because no tractor fits between the rows.',
    },
    wines: ['riserva', 'rosso-classico'],
  },
  {
    name: 'Vàsili',
    shape: 'M262,128 L214,52 L338,40 L392,112 L318,168 Z',
    labelAt: { x: 306, y: 100 },
    hectares: '4,1 ha',
    altitude: '198 m',
    exposure: { it: 'Sud', en: 'South' },
    grape: { it: 'Gaglioppo', en: 'Gaglioppo' },
    planted: '1994',
    soil: { it: 'Sabbie gialle su argilla', en: 'Yellow sands over clay' },
    note: {
      it: 'La parcella più regolare e la più generosa: è da qui che esce la spina dorsale del Rosso Classico.',
      en: 'The most even and most generous parcel: this is where the backbone of the Rosso Classico comes from.',
    },
    wines: ['rosso-classico'],
  },
  {
    name: 'Manche',
    shape: 'M196,186 L262,128 L318,168 L300,252 L204,262 Z',
    labelAt: { x: 254, y: 206 },
    hectares: '2,2 ha',
    altitude: '160 m',
    exposure: { it: 'Est', en: 'East' },
    grape: { it: 'Greco Bianco', en: 'Greco Bianco' },
    planted: '2008',
    soil: { it: 'Argilla bianca', en: 'White clay' },
    note: {
      it: 'Esposta a est: prende il sole presto e lo perde presto, e per un bianco in Calabria è mezza vendemmia salvata.',
      en: 'East-facing: it gets the sun early and loses it early, which in Calabria is half the battle for a white.',
    },
    wines: ['lipuda'],
  },
  {
    name: 'Lipuda',
    shape: 'M108,160 L196,186 L204,262 L150,330 L74,268 Z',
    labelAt: { x: 140, y: 244 },
    hectares: '3,0 ha',
    altitude: '96 m',
    exposure: { it: 'Nord-est', en: 'North-east' },
    grape: { it: 'Greco Bianco', en: 'Greco Bianco' },
    planted: '2001',
    soil: { it: 'Limo di fiume su argilla bianca', en: 'River silt over white clay' },
    note: {
      it: 'Costeggia il torrente. Nelle annate secche è l’unica che non soffre, in quelle piovose è la prima a dare problemi.',
      en: 'It runs along the stream. In dry years it is the only parcel that does not suffer; in wet ones it is the first to give trouble.',
    },
    wines: ['lipuda'],
  },
  {
    name: 'Trìvio',
    shape: 'M204,262 L300,252 L346,318 L268,374 L150,330 Z',
    labelAt: { x: 248, y: 310 },
    hectares: '2,8 ha',
    altitude: '112 m',
    exposure: { it: 'Sud-est', en: 'South-east' },
    grape: { it: 'Gaglioppo', en: 'Gaglioppo' },
    planted: '1987',
    soil: { it: 'Sabbia e ciottoli', en: 'Sand and pebbles' },
    note: {
      it: 'Prende il nome dall’incrocio di tre strade poderali. Matura una settimana prima di tutto il resto.',
      en: 'Named after the junction of three farm tracks. It ripens a week ahead of everything else.',
    },
    wines: ['rosso-classico'],
  },
  {
    name: 'Punta Alice',
    shape: 'M392,112 L318,168 L300,252 L346,318 L448,286 L470,170 Z',
    labelAt: { x: 388, y: 214 },
    hectares: '2,6 ha',
    altitude: '48 m',
    exposure: { it: 'Est, verso il mare', en: 'East, facing the sea' },
    grape: { it: 'Gaglioppo', en: 'Gaglioppo' },
    planted: '2012',
    soil: { it: 'Sabbia marina su ciottoli', en: 'Marine sand over pebbles' },
    note: {
      it: 'Ottocento metri dalla battigia. Sulle foglie, a fine estate, resta un velo di sale che si sente nel bicchiere.',
      en: 'Eight hundred metres from the shoreline. By late summer a film of salt sits on the leaves — and you taste it in the glass.',
    },
    wines: ['punta-alice'],
  },
];

export const ESTATE_TOTALS = {
  hectares: '18,1',
  parcels: PARCELS.length,
  bottles: '37.600',
  firstVintage: '1968',
};
