import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { PARCELS, Parcel } from '../../data/parcels';
import { WINES } from '../../data/wines';

/**
 * La tavola delle parcelle: sei poligoni disegnati a mano, curve di livello,
 * la linea di costa a est. Nessuna libreria di mappe e nessun tile server —
 * è un disegno, e un disegno racconta il podere meglio di una fotografia
 * satellitare in cui le vigne sono sei macchie verdi identiche.
 */
@Component({
  selector: 'app-parcel-map',
  imports: [RouterLink],
  templateUrl: './parcel-map.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'atlas' },
})
export class ParcelMap {
  readonly i18n = inject(LocaleService);
  readonly parcels = PARCELS;

  readonly active = signal<Parcel>(PARCELS[0]);

  readonly wines = computed(() =>
    WINES.filter((w) => this.active().wines.includes(w.slug)),
  );

  select(parcel: Parcel): void {
    this.active.set(parcel);
  }
}
