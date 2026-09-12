import { Bilingual, Locale, PageId } from './locale';

/** Le voci dell'indice, nell'ordine in cui compaiono nel sommario. */
export interface NavEntry {
  page: PageId;
  label: Bilingual;
  note: Bilingual;
}

export const NAV: NavEntry[] = [
  {
    page: 'home',
    label: { it: 'Apertura', en: 'Opening' },
    note: { it: 'La cantina in una schermata', en: 'The estate at a glance' },
  },
  {
    page: 'estate',
    label: { it: 'La Cantina', en: 'The Estate' },
    note: { it: 'Tre generazioni, un registro', en: 'Three generations, one ledger' },
  },
  {
    page: 'wines',
    label: { it: 'I Vini', en: 'The Wines' },
    note: { it: 'Quattro etichette, quattro schede', en: 'Four labels, four records' },
  },
  {
    page: 'terroir',
    label: { it: 'Il Territorio', en: 'The Terroir' },
    note: { it: 'Sabbia, argilla, salso', en: 'Sand, clay, sea salt' },
  },
  {
    page: 'visits',
    label: { it: 'Visite', en: 'Visits' },
    note: { it: 'Degustazioni e vendemmia', en: 'Tastings and harvest' },
  },
  {
    page: 'trade',
    label: { it: 'Distribuzione', en: 'Export' },
    note: { it: 'Per ristorazione ed enoteche', en: 'Importers and distributors' },
  },
  {
    page: 'journal',
    label: { it: 'Diario', en: 'Journal' },
    note: { it: "Cosa succede in vigna, mese per mese", en: 'Field notes, month by month' },
  },
  {
    page: 'contact',
    label: { it: 'Contatti', en: 'Contact' },
    note: { it: 'Dove siamo e come scriverci', en: 'Where we are, how to reach us' },
  },
];

const STRINGS = {
  skipToContent: { it: 'Vai al contenuto', en: 'Skip to content' },
  index: { it: 'Indice', en: 'Index' },
  closeIndex: { it: "Chiudi l'indice", en: 'Close index' },
  language: { it: 'Lingua', en: 'Language' },
  switchTo: { it: 'Read in English', en: 'Leggi in italiano' },
  readMore: { it: 'Continua', en: 'Read on' },
  allWines: { it: 'Tutte le etichette', en: 'All labels' },
  backToWines: { it: 'Torna alle etichette', en: 'Back to the labels' },
  backToJournal: { it: 'Torna al diario', en: 'Back to the journal' },
  technicalSheet: { it: 'Scheda tecnica', en: 'Technical sheet' },
  tasting: { it: 'Degustazione', en: 'Tasting' },
  pairings: { it: 'Abbinamenti', en: 'Pairings' },
  service: { it: 'Servizio', en: 'Service' },
  profile: { it: 'Profilo', en: 'Profile' },
  vintage: { it: 'Annata', en: 'Vintage' },
  grape: { it: 'Vitigno', en: 'Grape' },
  denomination: { it: 'Denominazione', en: 'Appellation' },
  alcohol: { it: 'Grado', en: 'Alcohol' },
  bottles: { it: 'Bottiglie', en: 'Bottles' },
  parcels: { it: 'Parcelle', en: 'Parcels' },
  soil: { it: 'Suolo', en: 'Soil' },
  ageing: { it: 'Affinamento', en: 'Ageing' },
  vinification: { it: 'Vinificazione', en: 'Vinification' },
  altitude: { it: 'Altitudine', en: 'Altitude' },
  exposure: { it: 'Esposizione', en: 'Exposure' },
  planted: { it: 'Impianto', en: 'Planted' },
  surface: { it: 'Superficie', en: 'Surface' },
  newsletterTitle: { it: 'Il registro', en: 'The ledger' },
  newsletterText: {
    it: 'Due lettere l’anno: una a marzo quando esce l’annata, una a ottobre a vendemmia chiusa. Niente altro.',
    en: 'Two letters a year: one in March when the vintage is released, one in October when harvest is in. Nothing else.',
  },
  newsletterPlaceholder: { it: 'nome@esempio.it', en: 'name@example.com' },
  newsletterCta: { it: 'Iscrivimi', en: 'Sign me up' },
  newsletterOk: {
    it: 'Fatto. Ti scriviamo a marzo.',
    en: 'Done. We’ll write in March.',
  },
  newsletterConsent: {
    it: 'Acconsento a ricevere due comunicazioni l’anno. Posso cancellarmi da ogni email.',
    en: 'I agree to receive two emails a year. I can unsubscribe from any of them.',
  },
  required: { it: 'Campo obbligatorio', en: 'Required field' },
  invalidEmail: { it: 'Indirizzo non valido', en: 'Invalid address' },
  demoNotice: {
    it: 'Progetto dimostrativo — azienda, dati e contatti sono di fantasia.',
    en: 'Demonstration project — the estate, its data and contacts are fictional.',
  },
  builtBy: { it: 'Sito realizzato da', en: 'Site built by' },
} satisfies Record<string, Bilingual>;

export type UiKey = keyof typeof STRINGS;

export function t(key: UiKey, locale: Locale): string {
  return STRINGS[key][locale];
}
