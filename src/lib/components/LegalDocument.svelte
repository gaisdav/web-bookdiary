<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import { renderMarkdown } from "$lib/markdown";

  export let pageTitle: string;
  export let description: string;
  export let english: string;
  export let russian: string;

  let language: "en" | "ru" = "en";
  $: document = language === "en" ? english : russian;
  $: html = renderMarkdown(document);
</script>

<svelte:head>
  <title>{pageTitle} — Readimus</title>
  <meta name="description" content={description} />
</svelte:head>

<SiteHeader />

<main class="legal-shell shell">
  <div class="legal-toolbar">
    <a class="back-link" href="/">← Readimus</a>
    <div class="language-switch" aria-label="Document language">
      <button class:active={language === "en"} on:click={() => (language = "en")}>English</button>
      <button class:active={language === "ru"} on:click={() => (language = "ru")}>Русский</button>
    </div>
  </div>

  <aside class="draft-note">
    <strong>Draft document.</strong>
    Operator details, dates, and remaining placeholders must be completed before publication.
  </aside>

  <article class="legal-content" lang={language}>
    {@html html}
  </article>
</main>

<Footer />

<style>
  .legal-shell { max-width: 980px; padding-top: 58px; padding-bottom: 110px; }
  .legal-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 32px; }
  .back-link { color: var(--text-muted); font-size: 0.9rem; font-weight: 700; text-decoration: none; }
  .back-link:hover { color: var(--primary-dark); }
  .language-switch { display: inline-flex; padding: 4px; border: 1px solid var(--border); border-radius: 999px; background: white; }
  .language-switch button { border: 0; border-radius: 999px; padding: 8px 14px; background: transparent; color: var(--text-muted); font: inherit; font-size: 0.83rem; font-weight: 700; cursor: pointer; }
  .language-switch button.active { background: var(--text); color: white; }
  .draft-note { margin-bottom: 30px; padding: 15px 18px; border: 1px solid #f0c36d; border-radius: 14px; background: #fff7df; color: #6e4b09; font-size: 0.9rem; line-height: 1.55; }
  .draft-note strong { margin-right: 4px; }
  .legal-content { padding: clamp(28px, 7vw, 74px); border: 1px solid var(--border); border-radius: 28px; background: white; box-shadow: var(--shadow-sm); }
  .legal-content :global(h1) { margin: 0 0 34px; font-family: var(--font-display); font-size: clamp(2.4rem, 6vw, 4.4rem); line-height: 0.98; letter-spacing: -0.055em; }
  .legal-content :global(h2) { margin: 54px 0 18px; padding-top: 8px; font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2rem); line-height: 1.15; letter-spacing: -0.03em; }
  .legal-content :global(h3) { margin: 34px 0 12px; font-size: 1.1rem; }
  .legal-content :global(p), .legal-content :global(li) { color: var(--text-muted); font-size: 1rem; line-height: 1.76; }
  .legal-content :global(p) { margin: 0 0 18px; }
  .legal-content :global(ul), .legal-content :global(ol) { margin: 0 0 22px; padding-left: 24px; }
  .legal-content :global(li) { margin-bottom: 8px; padding-left: 5px; }
  .legal-content :global(a) { color: var(--accent); }
  .legal-content :global(code) { padding: 2px 6px; border-radius: 6px; background: var(--surface-muted); color: var(--primary-dark); font-family: ui-monospace, monospace; font-size: 0.88em; }
  @media (max-width: 600px) {
    .legal-shell { padding-top: 32px; padding-bottom: 72px; }
    .legal-toolbar { align-items: flex-start; flex-direction: column; }
    .legal-content { border-radius: 20px; }
  }
</style>
