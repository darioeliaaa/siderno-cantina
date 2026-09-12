import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { SiteIndex } from '../site-index/site-index';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, SiteIndex],
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  readonly i18n = inject(LocaleService);
  readonly indexOpen = signal(false);
}
