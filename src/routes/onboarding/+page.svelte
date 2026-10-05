<script lang="ts">
  const chapters = [
    {
      number: "01",
      title: "Find your books",
      paragraphs: [
        "Search for a book by title or author.",
        "Readimus first searches our library. If you can’t find the book there, continue your search in other book databases.",
      ],
    },
    {
      number: "02",
      title: "Add books to your library",
      paragraphs: [
        "If you find a book in another database, add it to Readimus first by tapping Add to Library. You can also edit the cover and other details before adding it.",
        "Once a book is in our library, you can like it, add it to Want to Read, or mark it as Reading or Read. Books marked as Reading or Read will appear in My Books.",
      ],
    },
    {
      number: "03",
      title: "Keep track of your reading",
      paragraphs: [
        "Your Calendar keeps a history of what you’ve read and when.",
      ],
    },
    {
      number: "04",
      title: "Feed",
      paragraphs: [
        "Follow friends to see their reading activity in your feed.",
        "Turn on Community to see what other Readimus users are reading, not just the people you follow.",
      ],
    },
    {
      number: "05",
      title: "Your profile",
      paragraphs: [
        "This is how other readers see your profile, books, and reading activity.",
      ],
    },
    {
      number: "06",
      title: "Settings",
      paragraphs: [
        "In Settings, you can manage your account, adjust your privacy settings, and switch between light and dark themes.",
      ],
    },
  ];

  const searchScreens = [
    {
      src: "/onboarding/search-grid.png",
      alt: "The search button in My Library",
    },
    {
      src: "/onboarding/search-list.png",
      alt: "Search results and books from other databases",
    },
  ];

  const libraryScreens = [
    {
      src: "/onboarding/add-external-book.png",
      alt: "Options to edit and add a book from another database",
      width: 941,
      height: 1672,
    },
    {
      src: "/onboarding/reading-statuses.png",
      alt: "Reading statuses available for a book in Readimus",
      width: 948,
      height: 1659,
    },
  ];
</script>

<svelte:head>
  <title>How to use Readimus</title>
  <meta
    name="description"
    content="Learn how to find books, build your library, track your reading, and connect with other readers in Readimus."
  />
</svelte:head>

<header class="onboarding-header">
  <div class="shell header-inner">
    <a class="brand" href="/" aria-label="Readimus">
      <img src="/brand/readimus-mark-128.webp" alt="" width="42" height="42" />
      <span>Readimus</span>
    </a>
  </div>
</header>

<main>
  <section class="intro shell" aria-labelledby="onboarding-title">
    <h1 id="onboarding-title">How to use Readimus</h1>
  </section>

  <section class="chapters shell" aria-label="Readimus features">
    <div class="reading-line" aria-hidden="true"></div>

    <article class="chapter guide-chapter" id="chapter-1">
      <div class="guide-heading-row">
        <div class="chapter-copy">
          <div class="chapter-marker"><span>{chapters[0].number}</span></div>
          <h2>{chapters[0].title}</h2>
        </div>
      </div>

      <div class="instruction-sequence">
        {#each chapters[0].paragraphs as paragraph, index}
          <section class="instruction-step">
            <p class="instruction-step-copy"><strong>{index + 1}.</strong> {paragraph}</p>
            <figure class="instruction-visual search-visual">
              <div class="view-shot">
                <img src={searchScreens[index].src} alt={searchScreens[index].alt} width="1024" height="1536" loading="lazy" />
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
          <div class="chapter-marker"><span>{chapters[1].number}</span></div>
          <h2>{chapters[1].title}</h2>
        </div>
      </div>

      <div class="instruction-sequence">
        {#each chapters[1].paragraphs as paragraph, index}
          <section class="instruction-step">
            <p class="instruction-step-copy"><strong>{index + 1}.</strong> {paragraph}</p>
            <figure class="instruction-visual">
              <div class="view-shot">
                <img
                  src={libraryScreens[index].src}
                  alt={libraryScreens[index].alt}
                  width={libraryScreens[index].width}
                  height={libraryScreens[index].height}
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
        <div class="chapter-marker"><span>{chapters[2].number}</span></div>
        <h2>{chapters[2].title}</h2>
        <div class="chapter-description">
          {#each chapters[2].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-dark">
        <div class="phone-shell image-phone">
          <img
            src="/product/diary-light.webp"
            srcset="/product/diary-light-448.webp 448w, /product/diary-light.webp 768w"
            sizes="(max-width: 640px) 240px, 350px"
            alt="Readimus calendar showing books by reading date"
            width="768"
            height="1665"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <article class="chapter reverse" id="chapter-4">
      <div class="chapter-copy">
        <div class="chapter-marker"><span>{chapters[3].number}</span></div>
        <h2>{chapters[3].title}</h2>
        <div class="chapter-description">
          {#each chapters[3].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-coral">
        <div class="phone-shell image-phone">
          <img
            src="/product/feed-light.webp"
            srcset="/product/feed-light-448.webp 448w, /product/feed-light.webp 768w"
            sizes="(max-width: 640px) 240px, 350px"
            alt="Readimus feed with reviews and reading activity"
            width="768"
            height="1665"
            loading="lazy"
          />
        </div>
      </div>
    </article>

    <article class="chapter" id="chapter-5">
      <div class="chapter-copy">
        <div class="chapter-marker"><span>{chapters[4].number}</span></div>
        <h2>{chapters[4].title}</h2>
        <div class="chapter-description">
          {#each chapters[4].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-violet">
        <div class="phone-shell image-phone">
          <img src="/onboarding/profile.png" alt="A Readimus reader profile with books and followers" width="1179" height="2556" loading="lazy" />
        </div>
      </div>
    </article>

    <article class="chapter reverse" id="chapter-6">
      <div class="chapter-copy">
        <div class="chapter-marker"><span>{chapters[5].number}</span></div>
        <h2>{chapters[5].title}</h2>
        <div class="chapter-description">
          {#each chapters[5].paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </div>
      <div class="visual-wrap visual-mint">
        <div class="phone-shell image-phone">
          <img src="/onboarding/settings.png" alt="Readimus settings in dark mode" width="1179" height="2556" loading="lazy" />
        </div>
      </div>
    </article>
  </section>

  <section class="finish shell" aria-labelledby="finish-title">
    <img src="/brand/readimus-mark-128.webp" alt="" width="64" height="64" />
    <h2 id="finish-title">Enjoy your reading journey.</h2>
    <p>Explore Readimus as a guest. Create an account when you’re ready to unlock all personal features.</p>
    <a class="button button-primary" href="/">Start</a>
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
