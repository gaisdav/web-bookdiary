<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import SiteHeader from "$lib/components/SiteHeader.svelte";
</script>

<svelte:head>
  <title>Readimus — Your reading life, all in one place</title>
  <meta
    name="description"
    content="Track your books, save notes and reviews, create personal lists, and discover what to read through people whose taste you trust."
  />
</svelte:head>

<SiteHeader />

<main>
  <section class="hero shell">
    <div class="hero-copy">
      <h1>Readimus</h1>
      <p class="hero-subtitle">Your reading life, all in one place.</p>
      <div class="store-actions" aria-label="App availability">
        <span class="store-button">
          <small>Coming soon on the</small>
          App Store
        </span>
        <span class="store-button store-button-light">
          <small>Coming soon on</small>
          Google Play
        </span>
      </div>
    </div>

    <div class="hero-mark" aria-label="Readimus working logo">
      <div class="mark-halo"></div>
      <img src="/brand/readimus-logo-draft.jpg" alt="" />
    </div>
  </section>

  <section class="features" id="features">
    <div class="shell">
      <div class="section-heading">
        <p class="eyebrow">Made for your reading life</p>
        <h2>Keep more than a list of titles.</h2>
        <p>
          Track your books, save what mattered, and discover what to read
          through people whose taste you trust.
        </p>
      </div>

      <div class="features-grid">
        <article class="feature-card feature-primary">
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

        <article class="feature-card feature-neutral">
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

  <section class="final-cta shell">
    <p class="eyebrow">Readimus is coming soon</p>
    <h2>Your books deserve more than a list.</h2>
    <p>Readimus is coming soon to iOS and Android.</p>
    <div class="store-actions centered">
      <span class="store-button"><small>Coming soon on the</small>App Store</span>
      <span class="store-button store-button-light"><small>Coming soon on</small>Google Play</span>
    </div>
  </section>
</main>

<Footer />

<style>
  .hero {
    min-height: min(820px, calc(100vh - 78px));
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(360px, 0.88fr);
    align-items: center;
    gap: clamp(42px, 7vw, 100px);
    padding-top: 52px;
    padding-bottom: 92px;
    overflow: hidden;
  }

  .hero-copy {
    position: relative;
    z-index: 2;
  }

  h1 {
    margin: 0;
    color: var(--primary-dark);
    font-family: var(--font-display);
    font-size: clamp(5.5rem, 13.5vw, 11.5rem);
    font-weight: 800;
    line-height: 0.78;
    letter-spacing: -0.085em;
  }

  .hero-subtitle {
    max-width: 690px;
    margin: 42px 0 0;
    color: var(--text);
    font-family: var(--font-editorial);
    font-size: clamp(1.75rem, 3.6vw, 3.6rem);
    line-height: 1.08;
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
    font-size: 0.88rem;
    font-weight: 700;
    line-height: 1.25;
    box-shadow: var(--shadow-sm);
  }

  .store-button small {
    font-size: 0.64rem;
    font-weight: 500;
    opacity: 0.76;
  }

  .store-button-light {
    border-color: var(--border);
    background: white;
    color: var(--text);
  }

  .hero-mark {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 520px;
  }

  .hero-mark img {
    position: relative;
    z-index: 2;
    width: min(430px, 92%);
    aspect-ratio: 1;
    border-radius: 29%;
    object-fit: cover;
    box-shadow: 0 34px 90px rgb(20 70 78 / 16%);
  }

  .mark-halo {
    position: absolute;
    width: 116%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: linear-gradient(145deg, var(--primary-soft), var(--accent-soft));
  }

  .features {
    padding: 126px 0;
    background: var(--surface-muted);
  }

  .section-heading {
    max-width: 850px;
    margin-bottom: 58px;
  }

  .section-heading h2,
  .final-cta h2 {
    margin: 14px 0 0;
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 5.8vw, 5.5rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
  }

  .section-heading > p:last-child {
    max-width: 710px;
    margin: 24px 0 0;
    color: var(--text-muted);
    font-size: 1.12rem;
    line-height: 1.7;
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
  }

  .feature-primary {
    border-color: #b8e7ee;
    background: var(--primary-soft);
  }

  .feature-blue {
    border-color: #c8e1ff;
    background: var(--accent-soft);
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
  }

  .feature-card p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.68;
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
      padding-top: 76px;
      text-align: center;
    }

    .hero-subtitle {
      margin-right: auto;
      margin-left: auto;
    }

    .store-actions {
      justify-content: center;
    }

    .hero-mark {
      min-height: 410px;
    }

    .hero-mark img {
      width: min(370px, 76%);
    }

    .mark-halo {
      width: min(520px, 100%);
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .feature-card {
      min-height: 300px;
    }
  }

  @media (max-width: 640px) {
    .hero {
      gap: 28px;
      padding-top: 52px;
      padding-bottom: 68px;
    }

    h1 {
      font-size: clamp(4.7rem, 25vw, 7rem);
    }

    .hero-subtitle {
      margin-top: 30px;
      font-size: clamp(1.6rem, 8vw, 2.4rem);
    }

    .store-button {
      width: 100%;
      text-align: left;
    }

    .hero-mark {
      min-height: 340px;
    }

    .hero-mark img {
      width: min(300px, 82%);
    }

    .features {
      padding: 86px 0;
    }

    .feature-card {
      min-height: 280px;
      border-radius: 24px;
    }

    .final-cta {
      padding-top: 100px;
      padding-bottom: 90px;
    }
  }
</style>
