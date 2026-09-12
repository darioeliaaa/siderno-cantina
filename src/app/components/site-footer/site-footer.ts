import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { NAV } from '../../i18n/ui';
import { ESTATE, OPENING } from '../../data/estate';
import { WINES } from '../../data/wines';
import { NewsletterForm } from '../newsletter-form/newsletter-form';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, NewsletterForm],
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'site-foot' },
})
export class SiteFooter {
  readonly i18n = inject(LocaleService);
  readonly nav = NAV.filter((n) => n.page !== 'home');
  readonly wines = WINES;
  readonly estate = ESTATE;
  readonly opening = OPENING;
  readonly year = new Date().getFullYear();
  readonly phoneHref = `tel:${ESTATE.phone.replace(/\s/g, '')}`;
}
