import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Comparsa allo scroll. Vive solo nel browser (afterNextRender), così
 * l'HTML prerenderizzato esce già con il contenuto al suo posto: se il
 * JavaScript non arriva mai, la classe .shown non serve — la regola CSS
 * per reduced-motion lascia tutto visibile.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal {
  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement as HTMLElement;

      if (!('IntersectionObserver' in window)) {
        node.classList.add('shown');
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('shown');
              io.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
      );

      io.observe(node);
    });
  }
}
