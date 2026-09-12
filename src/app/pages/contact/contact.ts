import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { ESTATE, OPENING } from '../../data/estate';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Reveal],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly i18n = inject(LocaleService);
  readonly estate = ESTATE;
  readonly opening = OPENING;
  readonly phoneHref = `tel:${ESTATE.phone.replace(/\s/g, '')}`;
  private readonly fb = inject(FormBuilder);

  readonly sent = signal(false);

  readonly subjects = {
    it: ['Visita in cantina', 'Ordine privato', 'Distribuzione', 'Stampa', 'Altro'],
    en: ['Cellar visit', 'Private order', 'Trade enquiry', 'Press', 'Other'],
  };

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
  }

  constructor() {
    inject(SeoService).apply({
      page: 'contact',
      title: {
        it: 'Contatti e come arrivare — Cirò (KR) | Sìdero',
        en: 'Contact and how to find us — Cirò, Calabria | Sìdero',
      },
      description: {
        it: 'Contrada Sèrrone 12, Cirò (KR). Telefono, email, orari e indicazioni stradali dalla SS106.',
        en: 'Contrada Sèrrone 12, Cirò (KR), Italy. Phone, email, opening hours and directions from the SS106.',
      },
    });
  }
}
