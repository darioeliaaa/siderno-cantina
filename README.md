# 🍷 Sìdero — Cantina in Cirò

Demo — fascia **Sito Aziendale (1.200€)** del listino. Angular 22
standalone, zoneless, SSR con prerendering di **30 pagine statiche**
(15 per lingua), multilingua IT/EN con slug localizzati.

Un'azienda vitivinicola immaginaria a Cirò, sulla costa ionica calabrese.
L'idea di partenza non era una brochure di vino — foto di vigneto al
tramonto, serif dorato, "la nostra passione dal 1968" — ma un **archivio**:
ogni vino è una scheda catalogata, ogni parcella una voce con i suoi dati,
il territorio una sezione stratigrafica. Carta di calce, inchiostro ferroso,
righe sottili come su una tavola catastale.

L'unico colore forte è il vino stesso: `--vino` cambia da una scheda
all'altra e con lui si tingono testata, tacche del profilo e bordi dei
campi. Quattro etichette, quattro pagine che sembrano quattro posti
diversi, con un foglio di stile solo.

## Cosa dimostra della fascia

| Voce di listino | Dove si vede |
|---|---|
| Fino a 15 pagine | 15 pagine per lingua, tutte prerenderizzate in build |
| Supporto multilingua | IT/EN con **slug diversi per lingua** (`/it/vini` ↔ `/en/wines`), hreflang, x-default, selettore che resta sulla stessa pagina |
| Integrazione newsletter/CRM | Iscrizione al "registro" nel piede, e nella pagina Distribuzione un form B2B che mostra il **payload JSON** che finirebbe in Airtable o HubSpot |

## Il multilingua, per davvero

La pagina **Distribuzione / Export** è il punto in cui il multilingua smette
di essere traduzione. L'italiano parla a un ristorante di Cosenza: cartoni
da sei, consegna in settimana, agente di zona. L'inglese parla a un
importatore di Amburgo: pallet interi, Incoterms, e-AD, esclusiva di
territorio. Sono due pubblici con due domande diverse — tradurre la pagina
italiana avrebbe risposto alla domanda sbagliata in entrambe le lingue.

Stessa logica sui `<title>`: in inglese le schede vino puntano su
"Gaglioppo from Cirò, Calabria", non sulla denominazione italiana per
esteso, che in inglese non cerca nessuno.

## Stack

- **Angular 22** standalone e **zoneless** (tutto lo stato su signal)
- **Router** con due alberi di route, uno per lingua: dieci componenti
  coprono trenta indirizzi
- **SSR + prerendering** (`@angular/ssr`), incluse le pagine con slug
  (`getPrerenderParams` per vini e articoli)
- **Reactive Forms** su newsletter, prenotazione visita, richiesta B2B e contatti
- **Structured data** schema.org `Winery` con indirizzo, coordinate e orari
- Zero foto: mappa delle parcelle, sezione del suolo, ruota dell'anno e
  schema stradale sono **SVG disegnati a mano**

## Struttura

```
src/app/
  site.config.ts               Il dominio di produzione — un posto solo
  app.ts / app.html            Header + <router-outlet/> + Footer, LD+JSON
  app.routes.ts                 Le route, generate per ogni lingua
  app.routes.server.ts          Prerendering, slug inclusi
  i18n/
    locale.ts                   Locale, PageId, mappa degli slug
    locale.service.ts           Lingua corrente e pagina corrente
    ui.ts                       Stringhe d'interfaccia e voci dell'indice
  seo/seo.service.ts            Title, description, canonical, hreflang, OG
  data/                         Vini, parcelle, articoli, anagrafica
  components/
    site-header/ site-index/    Masthead e sommario a tutta pagina
    site-footer/ newsletter-form/
    parcel-map/                 Tavola delle sei parcelle
    soil-profile/               Sezione stratigrafica del suolo
    year-wheel/                 Il ciclo dell'anno come quadrante
  pages/                        home estate wines wine terroir
                                visits trade journal post contact
scripts/build-sitemap.mjs       sitemap.xml e robots.txt dalla build
```

## Sviluppo in locale

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Build e deploy

```bash
npm run build
```

Genera `dist/sidero-cantina/browser/` con 30 pagine già statiche, più
`sitemap.xml` e `robots.txt` **generati leggendo le pagine appena
prerenderizzate** — così non possono divergere dal sito reale.

Su Vercel: import del repo, preset **Angular**, deploy. Il `vercel.json`
porta `/` su `/it` con un redirect 308 lato server, senza aspettare il
JavaScript.

### ⚠️ Il dominio va aggiornato a mano

`src/app/site.config.ts` contiene il dominio di produzione, ed è l'unico
posto in cui va scritto: da lì passano canonical, hreflang, og:url, sitemap
e robots.txt. Se non corrisponde al dominio reale il sito **sembra**
funzionare, ma ogni link condiviso su WhatsApp o LinkedIn porta su un
indirizzo che non esiste: l'anteprima usa `og:url`, non l'indirizzo che hai
incollato. È già successo una volta su questo progetto.

## Personalizzare per un cliente reale

| Cosa | Dove |
|---|---|
| Dominio | `src/app/site.config.ts` |
| Anagrafica, orari, contatti | `data/estate.ts` — usati anche nello schema.org |
| Vini, colori delle schede | `data/wines.ts` — `color` e `onColor` sono l'accento della pagina |
| Parcelle e geometria della mappa | `data/parcels.ts` |
| Articoli del diario | `data/posts.ts` |
| Testi delle pagine | in fondo a ogni `pages/*/[nome].ts`, o nel template |
| Newsletter | `components/newsletter-form` — da collegare a Brevo o Mailchimp con double opt-in |
| Form B2B | `pages/trade/trade.ts` — il payload è già pronto per un webhook |

---

*Progetto dimostrativo — azienda, dati e contatti sono di fantasia.
Realizzato da Dario Elia.*
