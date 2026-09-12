import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LocaleService } from '../../i18n/locale.service';

/**
 * Iscrizione al "registro". In un sito consegnato, l'invio andrebbe a una
 * lista Brevo o Mailchimp con double opt-in; qui si ferma in pagina, ma la
 * forma è quella definitiva — validazione, consenso esplicito e stato di
 * conferma inclusi, perché è la parte che poi non si riscrive.
 */
@Component({
  selector: 'app-newsletter-form',
  imports: [ReactiveFormsModule],
  templateUrl: './newsletter-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterForm {
  readonly i18n = inject(LocaleService);
  private readonly fb = inject(FormBuilder);

  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    consent: [false, Validators.requiredTrue],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
    this.form.reset();
  }
}
