/**
 * Il dominio di produzione, in un posto solo.
 *
 * Da qui passano canonical, hreflang, og:url, sitemap.xml e robots.txt: se
 * questo valore non corrisponde al dominio su cui il sito è davvero servito,
 * il sito continua a funzionare ma ogni link condiviso su WhatsApp o
 * LinkedIn porta l'utente su un indirizzo che non esiste — l'anteprima usa
 * og:url, non l'indirizzo che hai incollato. Cambiando dominio si cambia
 * questa riga e si rifà la build: sitemap e robots.txt si riallineano da soli.
 */
export const SITE_URL = 'https://sidero-cantina.vercel.app';
