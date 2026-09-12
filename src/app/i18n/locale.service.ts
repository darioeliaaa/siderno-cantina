import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

import { DEFAULT_LOCALE, Locale, PageId, isLocale, pathFor } from './locale';
import { UiKey, t as translate } from './ui';

/**
 * Tiene insieme le due cose che servono ovunque: che lingua stiamo
 * leggendo e su che pagina siamo.
 *
 * Il locale si ricava dal primo segmento dell'URL invece che da uno stato
 * interno: così non esiste il caso in cui l'indirizzo dice /en e la pagina
 * mostra l'italiano — e la lettura funziona identica in SSR, dove non c'è
 * né localStorage né navigator.language da interrogare.
 *
 * La pagina corrente invece la dichiara il componente che la rende
 * (via SeoService), perché è l'unico a sapere anche il parametro dello
 * slug quando c'è.
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly router = inject(Router);

  private readonly url = signal(this.initialUrl());

  readonly locale = computed<Locale>(() => {
    const first = this.url().split('?')[0].split('/')[1];
    return isLocale(first) ? first : DEFAULT_LOCALE;
  });

  readonly other = computed<Locale>(() => (this.locale() === 'it' ? 'en' : 'it'));

  /** Pagina corrente, impostata dal componente di pagina. */
  readonly page = signal<{ id: PageId; param?: string }>({ id: 'home' });

  /**
   * L'indirizzo della pagina corrente in ognuna delle due lingue: il
   * selettore lingua porta sulla stessa pagina, mai a rimbalzare in home.
   */
  readonly paths = computed<Record<Locale, string>>(() => {
    const { id, param } = this.page();
    return { it: pathFor(id, 'it', param), en: pathFor(id, 'en', param) };
  });

  constructor() {
    // RoutesRecognized, non solo NavigationEnd: arriva PRIMA che il
    // componente della pagina venga costruito, ed è l'unico modo perché una
    // pagina che imposta title e description nel proprio costruttore li
    // scriva già nella lingua giusta. Con il solo NavigationEnd, in
    // prerendering ogni pagina /en/* usciva con i testi italiani.
    this.router.events
      .pipe(
        filter(
          (e): e is RoutesRecognized | NavigationEnd =>
            e instanceof RoutesRecognized || e instanceof NavigationEnd,
        ),
        takeUntilDestroyed(),
      )
      .subscribe((e) => this.url.set(e.urlAfterRedirects));
  }

  /** La navigazione in corso al momento in cui il servizio nasce. */
  private initialUrl(): string {
    const navigation = this.router.getCurrentNavigation();
    const tree = navigation?.finalUrl ?? navigation?.extractedUrl;
    return tree ? this.router.serializeUrl(tree) : this.router.url;
  }

  /** Scorciatoia per le stringhe d'interfaccia nella lingua corrente. */
  t(key: UiKey): string {
    return translate(key, this.locale());
  }

  /** Sceglie il ramo giusto di un contenuto bilingue. */
  pick<T>(value: Record<Locale, T>): T {
    return value[this.locale()];
  }

  link(page: PageId, param?: string): string {
    return pathFor(page, this.locale(), param);
  }
}
