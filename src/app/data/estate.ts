import { Bilingual } from '../i18n/locale';

/**
 * Anagrafica dell'azienda. Sta in un file solo perché compare in tre punti
 * diversi — piede, contatti e dati strutturati per Google — e tre copie
 * dello stesso indirizzo sono tre occasioni di sbagliarne una.
 */
export const ESTATE = {
  legalName: 'Società Agricola Sìdero S.r.l.',
  name: 'Sìdero',
  street: 'Contrada Sèrrone, 12',
  postalCode: '88813',
  city: 'Cirò',
  province: 'KR',
  region: { it: 'Calabria', en: 'Calabria' } as Bilingual,
  country: { it: 'Italia', en: 'Italy' } as Bilingual,
  phone: '+39 0962 000 000',
  email: 'registro@sidero-ciro.it',
  tradeEmail: 'export@sidero-ciro.it',
  vat: 'IT 00000000000',
  coordinates: { lat: 39.3805, lng: 17.0631 },
};

export interface OpeningRow {
  days: Bilingual;
  hours: Bilingual;
}

export const OPENING: OpeningRow[] = [
  {
    days: { it: 'Lunedì — Venerdì', en: 'Monday — Friday' },
    hours: { it: '9:00 — 13:00 · 15:00 — 18:00', en: '9:00 — 13:00 · 15:00 — 18:00' },
  },
  {
    days: { it: 'Sabato', en: 'Saturday' },
    hours: { it: '10:00 — 13:00, su appuntamento', en: '10:00 — 13:00, by appointment' },
  },
  {
    days: { it: 'Domenica', en: 'Sunday' },
    hours: { it: 'Chiuso', en: 'Closed' },
  },
  {
    days: { it: 'Settembre', en: 'September' },
    hours: { it: 'Solo su appuntamento — si vendemmia', en: 'By appointment only — harvest' },
  },
];
