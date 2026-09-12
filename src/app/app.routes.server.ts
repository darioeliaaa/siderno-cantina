import { RenderMode, ServerRoute } from '@angular/ssr';

import { LOCALES, SLUGS } from './i18n/locale';
import { WINES } from './data/wines';
import { POSTS } from './data/posts';

const wineParams = async () => WINES.map((w) => ({ slug: w.slug }));
const postParams = async () => POSTS.map((p) => ({ slug: p.slug }));

/**
 * Le pagine con un parametro nell'URL non si prerenderizzano da sole: vanno
 * elencate. getPrerenderParams passa la lista degli slug, e la build sforna
 * un file HTML per ogni vino e ogni articolo, in entrambe le lingue.
 */
export const serverRoutes: ServerRoute[] = [
  ...LOCALES.flatMap((locale): ServerRoute[] => [
    {
      path: `${locale}/${SLUGS.wine[locale]}/:slug`,
      renderMode: RenderMode.Prerender,
      getPrerenderParams: wineParams,
    },
    {
      path: `${locale}/${SLUGS.post[locale]}/:slug`,
      renderMode: RenderMode.Prerender,
      getPrerenderParams: postParams,
    },
  ]),
  { path: '**', renderMode: RenderMode.Prerender },
];
