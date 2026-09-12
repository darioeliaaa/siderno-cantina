import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../i18n/locale.service';
import { SeoService } from '../../seo/seo.service';
import { POSTS_BY_DATE, postBySlug } from '../../data/posts';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPage {
  readonly slug = input.required<string>();
  readonly i18n = inject(LocaleService);
  private readonly seo = inject(SeoService);

  readonly post = computed(() => postBySlug(this.slug()));
  readonly others = computed(() => POSTS_BY_DATE.filter((p) => p.slug !== this.slug()).slice(0, 2));

  constructor() {
    effect(() => {
      const post = this.post();
      if (!post) return;

      this.seo.apply({
        page: 'post',
        param: post.slug,
        title: {
          it: `${post.title.it} — Diario | Sìdero`,
          en: `${post.title.en} — Journal | Sìdero`,
        },
        description: { it: post.standfirst.it, en: post.standfirst.en },
      });
    });
  }
}
