<script lang="ts">
  import type { OnboardingContent } from '$lib/onboarding/content';

  export let content: OnboardingContent;
</script>

<svelte:head>
  <title>{content.pageTitle}</title>
  <meta name="description" content={content.metaDescription} />
  <link rel="alternate" hreflang="en" href="https://www.readimus.com/onboarding" />
  <link rel="alternate" hreflang="ru" href="https://www.readimus.com/ru/onboarding" />
  <link rel="alternate" hreflang="x-default" href="https://www.readimus.com/onboarding" />
</svelte:head>

<header class="onboarding-header">
  <div class="shell header-inner">
    <a class="brand" href="/" aria-label="Readimus">
      <img src="/brand/readimus-mark-128.webp" alt="" width="42" height="42" />
      <span>Readimus</span>
    </a>
    <nav class="language-switch" aria-label={content.languageLabel}>
      <a href="/onboarding" lang="en" aria-current={content.locale === 'en' ? 'page' : undefined}>EN</a>
      <a href="/ru/onboarding" lang="ru" aria-current={content.locale === 'ru' ? 'page' : undefined}>RU</a>
    </nav>
  </div>
</header>

<main>
  <section class="intro shell" aria-labelledby="onboarding-title">
    <h1 id="onboarding-title">{content.heading}</h1>
  </section>

  <section class="chapters shell" aria-label={content.featuresLabel}>
    <div class="reading-line" aria-hidden="true"></div>

    <article class="chapter guide-chapter" id="chapter-1">
      <div class="guide-heading-row">
        <div class="chapter-copy">
          <div class="chapter-marker"><span>{content.chapters[0].number}</span></div>
          <h2>{content.chapters[0].title}</h2>
        </div>
      </div>

      <div class="instruction-sequence">
        {#each content.chapters[0].paragraphs as paragraph, index}
          <section class="instruction-step">
            <p class="instruction-step-copy"><strong>{index + 1}.</strong> {paragraph}</p>
            <figure class="instruction-visual search-visual">
              <div class="view-shot">
                <img
                  src={content.images.search[index].src}
                  alt={content.images.search[index].alt}
                  width={content.images.search[index].width}
                  height={content.images.search[index].height}
                  loading="lazy"
                />
              </div>
              <figcaption>{index + 1}</figcaption>
            </figure>
          </section>
        {/each}
      </div>
    </article>

    <article class="chapter guide-chapter" id="chapter-2">
      <div class="guide-heading-row">
        <div class="chapter-copy">
          <div class="chapter-marker"><span>{content.chapters[1].number}</span></div>
          <h2>{content.chapters[1].title}</h2>
        </div>
      </div>

      <div class="instruction-sequence">
        {#each content.chapters[1].paragraphs as paragraph, index}
          <section class="instruction-step">
            <p class="instruction-step-copy"><strong>{index + 1}.</strong> {paragraph}</p>
            <figure class="instruction-visual">
              <div class="view-shot">
                <img
                  src={content.images.library[index].src}
                  alt={content.images.library[index].alt}
                  width={content.images.library[index].width}
                  height={content.images.library[index].height}
                  loading="lazy"
                />
              </div>
              <figcaption>{index + 1}</figcaption>
            </figure>
          </section>
        {/each}
      </div>
    </article>

    <article class="chapter" id="chapter-3">
      <div class="chapter-copy">
        <div class="chapter-marker"><span>{content.chapters[2].number}</span></div>
        <h2>{content.chapters[2].title}</h2>
        <div class="chapter-description">
          {#each content.chapters[2].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-dark">
        <div class="phone-shell image-phone">
          <img
            src={content.images.diary.src}
            srcset={content.images.diary.srcset}
            sizes={content.images.diary.sizes}
            alt={content.images.diary.alt}
            width={content.images.diary.width}
            height={content.images.diary.height}
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <article class="chapter reverse" id="chapter-4">
      <div class="chapter-copy">
        <div class="chapter-marker"><span>{content.chapters[3].number}</span></div>
        <h2>{content.chapters[3].title}</h2>
        <div class="chapter-description">
          {#each content.chapters[3].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-coral">
        <div class="phone-shell image-phone">
          <img
            src={content.images.feed.src}
            srcset={content.images.feed.srcset}
            sizes={content.images.feed.sizes}
            alt={content.images.feed.alt}
            width={content.images.feed.width}
            height={content.images.feed.height}
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <article class="chapter" id="chapter-5">
      <div class="chapter-copy">
        <div class="chapter-marker"><span>{content.chapters[4].number}</span></div>
        <h2>{content.chapters[4].title}</h2>
        <div class="chapter-description">
          {#each content.chapters[4].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-violet">
        <div class="phone-shell image-phone">
          <img
            src={content.images.profile.src}
            alt={content.images.profile.alt}
            width={content.images.profile.width}
            height={content.images.profile.height}
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <article class="chapter reverse" id="chapter-6">
      <div class="chapter-copy">
        <div class="chapter-marker"><span>{content.chapters[5].number}</span></div>
        <h2>{content.chapters[5].title}</h2>
        <div class="chapter-description">
          {#each content.chapters[5].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-mint">
        <div class="phone-shell image-phone">
          <img
            src={content.images.settings.src}
            alt={content.images.settings.alt}
            width={content.images.settings.width}
            height={content.images.settings.height}
            loading="lazy"
          />
        </div>
      </div>
    </article>
  </section>

  <section class="finish shell" aria-labelledby="finish-title">
    <img src="/brand/readimus-mark-128.webp" alt="" width="64" height="64" />
    <h2 id="finish-title">{content.finishTitle}</h2>
    <p>{content.finishDescription}</p>
    <a class="button button-primary" href="/">{content.startLabel}</a>
  </section>
</main>

<style>
  :global(body) {
    background:
      radial-gradient(circle at 85% 4%, rgb(0 151 178 / 8%), transparent 30rem),
      var(--color-background);
  }

  main {
    overflow: clip;
  }

  .onboarding-header {
    position: relative;
    z-index: 10;
    padding: 18px 0;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--color-text);
    font-family: var(--font-display);
    font-size: 21px;
    font-weight: 800;
    letter-spacing: -0.04em;
    text-decoration: none;
  }

  .brand:hover {
    color: var(--color-text);
  }

  .brand img {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: var(--color-accent-soft);
    object-fit: cover;
  }

  .language-switch {
    display: inline-flex;
    gap: 4px;
    padding: 4px;
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-round);
    background: var(--color-background-secondary);
  }

  .language-switch a {
    min-width: 42px;
    padding: 7px 10px;
    border-radius: var(--radius-round);
    color: var(--text-muted);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-align: center;
    text-decoration: none;
  }

  .language-switch a[aria-current='page'] {
    background: var(--color-background);
    color: var(--color-primary-dark);
    box-shadow: 0 2px 10px rgb(12 58 67 / 8%);
  }

  .language-switch a:focus-visible {
    outline: 2px solid var(--color-primary-dark);
    outline-offset: 2px;
  }

  .intro {
    padding-top: clamp(48px, 7vw, 88px);
    padding-bottom: clamp(36px, 5vw, 64px);
  }

  .intro h1 {
    width: 100%;
    min-width: 0;
    max-width: 850px;
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 5.8vw, 5.6rem);
    font-weight: 800;
    line-height: 0.98;
    letter-spacing: -0.06em;
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  .finish h2 {
    width: 100%;
    min-width: 0;
    max-width: 1000px;
    margin: 0 auto;
    font-family: var(--font-display);
    font-size: clamp(3.3rem, 7.2vw, 7rem);
    font-weight: 800;
    line-height: 0.94;
    letter-spacing: -0.07em;
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  .chapters {
    position: relative;
    padding-top: 20px;
    padding-bottom: 60px;
  }

  .reading-line {
    position: absolute;
    top: 44px;
    bottom: 84px;
    left: 50%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, var(--color-border-dark) 3%, var(--color-border-dark) 97%, transparent);
  }

  .chapter {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.88fr);
    align-items: center;
    gap: clamp(70px, 11vw, 150px);
    min-height: 800px;
    padding: 80px 0;
    scroll-margin-top: 24px;
  }

  .chapter.reverse .chapter-copy {
    order: 2;
  }

  .chapter.reverse .visual-wrap {
    order: 1;
  }

  .chapter-copy {
    position: relative;
    width: 100%;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .chapter-marker {
    position: absolute;
    top: -6px;
    right: calc(clamp(70px, 11vw, 150px) / -2 - 23px);
    z-index: 2;
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border: 1px solid var(--color-border-dark);
    border-radius: 50%;
    background: white;
    color: var(--color-primary-dark);
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .reverse .chapter-marker {
    right: auto;
    left: calc(clamp(70px, 11vw, 150px) / -2 - 23px);
  }

  .chapter h2 {
    max-width: 590px;
    font-family: var(--font-display);
    font-size: clamp(2.65rem, 4.5vw, 4.6rem);
    line-height: 0.98;
    letter-spacing: -0.06em;
    text-wrap: balance;
  }

  .chapter-description {
    max-width: 570px;
    margin-top: 26px;
    color: var(--text-muted);
    font-size: 1.08rem;
    line-height: 1.75;
  }

  .chapter-description p + p {
    margin-top: 14px;
  }

  .guide-chapter {
    display: block;
    min-height: 0;
    padding-bottom: 140px;
  }

  .guide-heading-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.88fr);
    gap: clamp(70px, 11vw, 150px);
  }

  .instruction-sequence {
    display: grid;
    gap: 92px;
    margin-top: 58px;
  }

  .instruction-step {
    width: min(100%, 740px);
  }

  .instruction-step:nth-child(2) {
    margin-left: auto;
  }

  .instruction-step-copy {
    color: var(--text-muted);
    font-size: 1.08rem;
    line-height: 1.75;
  }

  .instruction-step-copy strong {
    color: var(--color-primary-dark);
  }

  .instruction-visual {
    position: relative;
    width: min(100%, 620px);
    min-height: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    padding: 48px 32px 28px;
    overflow: hidden;
    border: 1px solid rgb(0 107 125 / 10%);
    border-radius: 48px;
    background: #dfeefe;
  }

  .instruction-step:nth-child(2) .instruction-visual {
    background: #e8e3f3;
  }

  .instruction-visual::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    border: 1px solid rgb(255 255 255 / 60%);
    border-radius: 50%;
  }

  .instruction-visual .view-shot {
    position: relative;
    z-index: 1;
    width: min(100%, 270px);
  }

  .search-visual .view-shot {
    width: min(100%, 310px);
  }

  .instruction-visual figcaption {
    position: relative;
    z-index: 1;
    margin-top: 24px;
  }

  .visual-wrap {
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 640px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border: 1px solid rgb(0 107 125 / 10%);
    border-radius: 48px;
  }

  .visual-wrap::before {
    content: "";
    position: absolute;
    width: 380px;
    height: 380px;
    border: 1px solid rgb(255 255 255 / 55%);
    border-radius: 50%;
  }

  .visual-dark { background: #103f47; }
  .visual-coral { background: #fce9e2; }
  .visual-violet { background: #e8e3f3; }
  .visual-mint { background: #dff3ee; }

  .view-shot {
    overflow: hidden;
    border-radius: 24px;
    background: white;
    box-shadow: 0 24px 60px rgb(12 58 67 / 14%);
  }

  .view-shot img {
    width: 100%;
    height: auto;
  }

  .instruction-step figcaption {
    margin-top: 12px;
    color: var(--color-primary-dark);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-align: center;
  }

  .phone-shell {
    position: relative;
    z-index: 1;
    width: min(310px, 72%);
    overflow: hidden;
    border: 7px solid #15272a;
    border-radius: 42px;
    background: white;
    box-shadow: 0 32px 72px rgb(12 58 67 / 24%);
    transform: rotate(1.6deg);
  }

  .reverse .phone-shell {
    transform: rotate(-1.6deg);
  }

  .phone-shell::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    z-index: 4;
    width: 72px;
    height: 19px;
    border-radius: 12px;
    background: #15272a;
    transform: translateX(-50%);
  }

  .image-phone img {
    width: 100%;
    height: auto;
  }

  .finish {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 160px;
    padding-bottom: 160px;
    text-align: center;
  }

  .finish > img {
    width: 64px;
    height: 64px;
    margin-bottom: 28px;
    border-radius: 18px;
    background: var(--color-accent-soft);
    object-fit: cover;
  }

  .finish h2 {
    max-width: 890px;
    font-size: clamp(3rem, 6vw, 5.8rem);
  }

  .finish > p:not(.eyebrow) {
    max-width: 640px;
    margin-top: 30px;
    color: var(--text-muted);
    font-size: 1.08rem;
    line-height: 1.7;
    text-wrap: balance;
  }

  .finish .button {
    min-width: 190px;
    margin-top: 38px;
  }

  @media (max-width: 940px) {
    .reading-line {
      left: 23px;
    }

    .chapter,
    .chapter.reverse {
      grid-template-columns: 1fr;
      gap: 52px;
      min-height: 0;
      padding: 92px 0 92px 76px;
    }

    .chapter.reverse .chapter-copy,
    .chapter.reverse .visual-wrap {
      order: initial;
    }

    .chapter-marker,
    .reverse .chapter-marker {
      top: -8px;
      right: auto;
      left: -76px;
    }

    .guide-chapter {
      padding-bottom: 120px;
    }

    .guide-heading-row {
      grid-template-columns: 1fr;
    }

    .visual-wrap {
      min-height: 600px;
    }
  }

  @media (max-width: 640px) {
    .intro {
      padding-top: 42px;
      padding-bottom: 24px;
    }

    .intro h1 {
      font-size: clamp(2rem, 9vw, 2.8rem);
      line-height: 0.97;
      letter-spacing: -0.055em;
      text-wrap: wrap;
    }

    .finish h2 {
      font-size: clamp(2.35rem, 10.5vw, 3.5rem);
      line-height: 0.97;
      letter-spacing: -0.055em;
    }

    .chapters {
      padding-bottom: 20px;
    }

    .reading-line {
      left: 19px;
    }

    .chapter,
    .chapter.reverse {
      gap: 38px;
      padding: 68px 0 68px 58px;
    }

    .chapter-copy,
    .visual-wrap {
      width: calc(100vw - 100px);
      max-width: calc(100vw - 100px);
    }

    .chapter-marker,
    .reverse .chapter-marker {
      left: -58px;
      width: 40px;
      height: 40px;
    }

    .chapter h2 {
      font-size: clamp(1.9rem, 8.5vw, 2.6rem);
      line-height: 1;
      text-wrap: wrap;
    }

    .chapter-description {
      margin-top: 20px;
      font-size: 1rem;
      line-height: 1.68;
    }

    .guide-chapter {
      padding-bottom: 92px;
    }

    .instruction-sequence {
      gap: 56px;
      margin-top: 38px;
    }

    .instruction-step:nth-child(2) {
      margin-left: 0;
    }

    .instruction-step-copy {
      font-size: 1rem;
      line-height: 1.68;
    }

    .instruction-visual {
      min-height: 440px;
      padding: 32px 18px 22px;
      border-radius: 30px;
    }

    .instruction-visual::before {
      width: 260px;
      height: 260px;
    }

    .instruction-visual .view-shot {
      width: min(78%, 230px);
    }

    .visual-wrap {
      min-height: 470px;
      border-radius: 30px;
    }

    .visual-wrap::before {
      width: 280px;
      height: 280px;
    }

    .phone-shell {
      width: min(224px, 75%);
      border-width: 5px;
      border-radius: 32px;
    }

    .phone-shell::after {
      top: 6px;
      width: 55px;
      height: 15px;
    }

    .view-shot {
      border-radius: 18px;
    }

    .instruction-step figcaption {
      margin-top: 8px;
      font-size: 0.62rem;
    }

    .finish {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }

</style>
