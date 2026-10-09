<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import SiteHeader from "$lib/components/SiteHeader.svelte";
</script>

<svelte:head>
  <title>Readimus — Your reading life, all in one place</title>
  <meta
    name="description"
    content="Readimus is a book tracker and reading diary. Log what you read, save notes and reviews, build personal lists, and discover books through people whose taste you trust."
  />
  <meta property="og:title" content="Readimus — Book Tracker & Reading Diary App" />
  <meta
    property="og:description"
    content="Log what you read, save notes and reviews, build personal lists, and discover books through people whose taste you trust."
  />
</svelte:head>

<SiteHeader showName={false} />

<main>
  <section class="hero shell">
    <div class="hero-copy">
      <h1>Readimus</h1>
      <p class="hero-subtitle">Your reading life, all in one place.</p>
      <p class="hero-description">
        Track your books, follow your friends, and discover what to read next.
      </p>
      <div class="store-actions" aria-label="App availability">
        <span class="store-button">
          <small>Coming soon on the</small>
          App Store
        </span>
        <a
          class="store-button"
          href="https://play.google.com/store/apps/details?id=com.appbookdiary"
        >
          <small>Available on</small>
          Google Play
        </a>
      </div>
    </div>

    <div class="hero-product" aria-label="Readimus social feed preview">
      <div class="hero-phone">
        <img
          src="/product/feed-light.webp"
          srcset="/product/feed-light-448.webp 448w, /product/feed-light.webp 768w"
          sizes="(max-width: 640px) 240px, (max-width: 900px) 320px, 336px"
          alt="A Readimus feed showing friends' reviews and reading activity"
          width="768"
          height="1665"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="shell">
      <div class="section-heading">
        <h2>Keep more than a list of titles.</h2>
      </div>

      <div class="features-grid">
        <article class="feature-card feature-neutral">
          <span class="feature-label">Your library</span>
          <h3>Track your books.</h3>
          <p>
            Organize what you’re reading, what you’ve finished, and what you
            want to read. Add reading dates, favorites, and personal lists.
          </p>
        </article>

        <article class="feature-card feature-blue">
          <span class="feature-label">Your thoughts</span>
          <h3>Remember what stayed with you.</h3>
          <p>
            Save notes, quotes, reviews, and reading dates while they’re fresh
            — and return to them whenever you want.
          </p>
        </article>

        <article class="feature-card feature-primary">
          <span class="feature-label">Your community</span>
          <h3>Discover through other readers.</h3>
          <p>
            Follow readers, explore their lists and reviews, and find books
            through people whose taste you trust.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="reading-story">
    <div class="shell story-grid">
      <div class="story-copy">
        <h2><span>Remember every</span><span>book you read.</span></h2>
        <p>
          Every start, finish, favorite, and note becomes part of a history you
          will actually want to revisit.
        </p>
        <div class="story-states" aria-label="Reading journey">
          <span><i class="state-dot started"></i>Started</span>
          <span><i class="state-dot finished"></i>Read</span>
          <span><i class="state-heart">♥</i>Loved</span>
        </div>
      </div>

      <div class="story-visual">
        <div class="story-phone">
          <img
            src="/product/diary-light.webp"
            srcset="/product/diary-light-448.webp 448w, /product/diary-light.webp 768w"
            sizes="(max-width: 640px) 240px, 350px"
            alt="Readimus reading diary showing books started and finished by date"
            width="768"
            height="1665"
            loading="lazy"
          />
        </div>
        <div class="profile-preview">
          <img
            src="/product/profile-dark.webp"
            srcset="/product/profile-dark-448.webp 448w, /product/profile-dark.webp 768w"
            sizes="(max-width: 640px) 175px, 284px"
            alt="Readimus reader profile in dark mode"
            width="768"
            height="1665"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="final-cta shell">
    <h2>Your books deserve more than a list.</h2>
    <p>Available now on Android. Coming soon to iOS.</p>
    <div class="store-actions centered">
      <span class="store-button"><small>For iPhone and iPad</small>App Store</span>
      <a
        class="store-button"
        href="https://play.google.com/store/apps/details?id=com.appbookdiary"
      >
        <small>Available on</small>
        Google Play
      </a>
    </div>
  </section>
</main>

<Footer />

<style>
  .hero {
    min-height: min(640px, calc(100vh - 78px));
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr);
    align-items: center;
    gap: clamp(42px, 7vw, 100px);
    padding-top: 16px;
    padding-bottom: 48px;
  }

  .hero-copy {
    position: relative;
    z-index: 2;
    min-width: 0;
  }

  h1 {
    margin: 0;
    color: var(--primary-dark);
    font-family: var(--font-display);
    font-size: clamp(4.75rem, 9.8vw, 9rem);
    font-weight: 800;
    line-height: 0.82;
    letter-spacing: -0.085em;
  }

  .hero-subtitle {
    max-width: 690px;
    margin: 42px 0 0;
    color: var(--text);
    font-family: var(--font-editorial);
    font-size: clamp(1.75rem, 3.6vw, 3.6rem);
    line-height: 1.08;
    text-wrap: balance;
  }

  .hero-description {
    max-width: 560px;
    margin: 22px 0 0;
    color: var(--text-muted);
    font-size: clamp(1rem, 1.35vw, 1.14rem);
    line-height: 1.65;
    text-wrap: balance;
  }

  .store-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 38px;
  }

  .store-button {
    display: grid;
    min-width: 208px;
    padding: 12px 18px;
    border: 1px solid var(--primary-dark);
    border-radius: 14px;
    background: var(--primary-dark);
    color: white;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25;
    text-decoration: none;
    box-shadow: var(--shadow-sm);
  }

  a.store-button:hover {
    color: white;
  }

  .store-button small {
    font-size: 0.64rem;
    font-weight: 500;
    opacity: 0.84;
  }

  .hero-product {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 640px;
    min-width: 0;
  }

  .hero-phone,
  .story-phone,
  .profile-preview {
    overflow: hidden;
    border: 7px solid #162326;
    border-radius: 42px;
    background: #162326;
    box-shadow: 0 34px 90px rgb(20 70 78 / 18%);
  }

  .hero-phone {
    width: min(336px, 82%);
    transform: rotate(2.2deg);
  }

  .hero-phone img,
  .story-phone img,
  .profile-preview img {
    width: 100%;
    height: auto;
  }

  .features {
    padding: 126px 0;
    background: var(--surface-muted);
  }

  .section-heading {
    max-width: 850px;
    margin-bottom: 58px;
    min-width: 0;
  }

  .section-heading h2,
  .final-cta h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 5.8vw, 5.5rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
    text-wrap: balance;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .feature-card {
    min-height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: clamp(28px, 4vw, 46px);
    border: 1px solid var(--border);
    border-radius: 30px;
    min-width: 0;
  }

  .feature-primary {
    border-color: #b8e7ee;
    background: var(--primary-soft);
  }

  .feature-blue {
    border-color: #c8e1ff;
    background: var(--accent-soft);
  }

  .feature-blue .feature-label {
    color: var(--color-accent-dark);
  }

  .feature-neutral {
    background: white;
  }

  .feature-label {
    margin-bottom: auto;
    color: var(--primary-dark);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .feature-card h3 {
    margin: 48px 0 18px;
    font-family: var(--font-display);
    font-size: clamp(1.85rem, 3vw, 3rem);
    line-height: 1;
    letter-spacing: -0.045em;
    text-wrap: balance;
  }

  .feature-card p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.68;
  }

  .reading-story {
    overflow: hidden;
    padding: 126px 0;
    background: #073b43;
    color: white;
  }

  .story-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(440px, 1.18fr);
    align-items: center;
    gap: clamp(96px, 12vw, 170px);
  }

  .story-copy {
    position: relative;
    z-index: 2;
    transform: translateY(-36px);
  }

  .story-copy h2 {
    max-width: 520px;
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 4.6vw, 4.4rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
    text-wrap: balance;
  }

  .story-copy h2 span {
    display: block;
    white-space: nowrap;
  }

  .story-copy > p {
    max-width: 510px;
    margin: 26px 0 0;
    color: rgb(255 255 255 / 83%);
    font-size: 1.08rem;
    line-height: 1.7;
  }

  .story-states {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    margin-top: 38px;
    color: rgb(255 255 255 / 86%);
    font-size: 0.85rem;
    font-weight: 700;
  }

  .story-states span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .state-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }

  .state-dot.started { background: #168cff; }
  .state-dot.finished { background: #24ba64; }
  .state-heart { color: #ff5048; font-size: 1rem; font-style: normal; }

  .story-visual {
    position: relative;
    min-height: 680px;
  }

  .story-phone {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    width: min(350px, 68%);
    border-color: #172326;
    box-shadow: 0 34px 90px rgb(0 0 0 / 36%);
    transform: rotate(2deg);
  }

  .profile-preview {
    position: absolute;
    bottom: -84px;
    left: 0;
    width: min(284px, 55%);
    border-color: rgb(255 255 255 / 84%);
    box-shadow: 0 30px 80px rgb(0 0 0 / 28%);
    transform: rotate(-5deg);
  }

  .final-cta {
    padding-top: 150px;
    padding-bottom: 130px;
    text-align: center;
  }

  .final-cta h2 {
    max-width: 850px;
    margin-right: auto;
    margin-left: auto;
  }

  .final-cta > p:not(.eyebrow) {
    margin-top: 20px;
    color: var(--text-muted);
    font-size: 1.16rem;
  }

  .centered {
    justify-content: center;
  }

  @media (max-width: 900px) {
    .hero {
      min-height: auto;
      grid-template-columns: 1fr;
      padding-top: 64px;
      text-align: center;
    }

    .hero-subtitle {
      margin-right: auto;
      margin-left: auto;
    }

    .hero-description {
      margin-right: auto;
      margin-left: auto;
    }

    .store-actions {
      justify-content: center;
    }

    .hero-product {
      min-height: 620px;
    }

    .hero-phone {
      width: min(320px, 70%);
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .feature-card {
      min-height: 300px;
    }

    .story-grid {
      grid-template-columns: 1fr;
      gap: 68px;
    }

    .story-copy {
      text-align: center;
      transform: none;
    }

    .story-copy h2,
    .story-copy > p {
      margin-right: auto;
      margin-left: auto;
    }

    .story-states {
      justify-content: center;
    }

    .story-visual {
      width: min(100%, 590px);
      margin: 0 auto;
    }
  }

  @media (max-width: 640px) {
    .hero {
      gap: 28px;
      padding-top: 40px;
      padding-bottom: 58px;
    }

    h1 {
      font-size: clamp(3.5rem, 18vw, 5.2rem);
      letter-spacing: -0.075em;
    }

    .hero-subtitle {
      margin-top: 24px;
      font-size: clamp(1.45rem, 7vw, 2.2rem);
    }

    .hero-description {
      margin-top: 18px;
    }

    .store-button {
      width: 100%;
      text-align: left;
    }

    .hero-product {
      min-height: 500px;
    }

    .hero-phone {
      width: min(240px, 72%);
      border-width: 5px;
      border-radius: 34px;
    }

    .features {
      padding: 72px 0;
    }

    .section-heading {
      margin-bottom: 38px;
    }

    .section-heading h2,
    .final-cta h2 {
      font-size: clamp(2.25rem, 11vw, 3.3rem);
      line-height: 0.98;
    }

    .features-grid {
      gap: 14px;
    }

    .feature-card {
      min-height: 0;
      padding: 28px 24px;
      border-radius: 24px;
    }

    .feature-card h3 {
      margin-top: 36px;
    }

    .reading-story {
      padding: 82px 0 92px;
    }

    .story-copy h2 {
      font-size: clamp(2.45rem, 12vw, 3.5rem);
    }

    .story-copy > p {
      margin-top: 22px;
      font-size: 1rem;
    }

    .story-states {
      gap: 16px;
      margin-top: 30px;
    }

    .story-visual {
      min-height: 500px;
    }

    .story-phone {
      width: min(240px, 68%);
      border-width: 5px;
      border-radius: 34px;
    }

    .profile-preview {
      bottom: -22px;
      width: min(175px, 50%);
      border-width: 5px;
      border-radius: 30px;
    }

    .final-cta {
      padding-top: 84px;
      padding-bottom: 78px;
    }
  }
</style>
