<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import SiteHeader from "$lib/components/SiteHeader.svelte";

  export let pageTitle: string;
  export let description: string;
  export let eyebrow: string;
  export let title: string;
  export let intro: string;
  /** For a page whose header changes in place (a status page): read the
   *  change out to screen readers. */
  export let live = false;
</script>

<svelte:head>
  <title>{pageTitle} — Readimus</title>
  <meta name="description" content={description} />
  <meta property="og:title" content="{pageTitle} — Readimus" />
  <meta property="og:description" content={description} />
</svelte:head>

<SiteHeader />
<main class="info shell">
  <header aria-live={live ? "polite" : undefined}>
    {#if $$slots.mark}<div class="mark"><slot name="mark" /></div>{/if}
    <p class="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p class="intro">{intro}</p>
  </header>
  <div class="content"><slot /></div>
</main>
<Footer />

<style>
  .info { max-width: 1000px; padding-top: 88px; padding-bottom: 120px; }
  header { max-width: 790px; margin-bottom: 58px; }
  .mark { margin-bottom: 26px; }
  h1 { margin: 15px 0 22px; font-family: var(--font-display); font-size: clamp(3rem, 7vw, 6.5rem); line-height: 0.93; letter-spacing: -0.065em; }
  .intro { margin: 0; color: var(--text-muted); font-size: clamp(1.05rem, 2vw, 1.3rem); line-height: 1.65; }
  .content { display: grid; gap: 18px; }
  .content :global(.card) { padding: clamp(24px, 5vw, 42px); border: 1px solid var(--border); border-radius: 24px; background: white; box-shadow: var(--shadow-sm); }
  .content :global(.card-accent) { border-color: #b8e7ee; background: var(--primary-soft); }
  .content :global(.grid) { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
  .content :global(h2) { margin: 0 0 14px; font-family: var(--font-display); font-size: clamp(1.45rem, 3vw, 2rem); letter-spacing: -0.03em; }
  .content :global(h3) { margin: 0 0 9px; font-size: 1rem; }
  .content :global(p), .content :global(li) { color: var(--text-muted); line-height: 1.68; }
  .content :global(p) { margin: 0; }
  .content :global(ol), .content :global(ul) { margin: 14px 0 0; padding-left: 22px; }
  .content :global(li) { margin-bottom: 8px; padding-left: 4px; }
  /* Text links only: a button keeps the label colour app.css gives it. */
  .content :global(a:not(.button):not(.mail-button)) { color: var(--accent-dark); font-weight: 700; }
  .content :global(.mail-button) { display: inline-flex; margin-top: 22px; padding: 13px 18px; border-radius: 999px; background: var(--text); color: white; text-decoration: none; }
  .content :global(.actions) { display: flex; flex-wrap: wrap; gap: 12px; }
  .content :global(* + .actions) { margin-top: 22px; }
  .content :global(.button:disabled) { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: none; }
  /* Forms (the password pages). */
  .content :global(.form-card) { width: 100%; max-width: 520px; }
  .content :global(form) { display: grid; gap: 18px; }
  .content :global(label) { display: block; margin-bottom: 8px; font-weight: 700; }
  .content :global(input) { width: 100%; min-height: 50px; padding: 0 16px; border: 1px solid var(--color-input-border); border-radius: 14px; background: var(--color-input-background); color: var(--text); transition: border-color var(--timing-fast) ease; }
  .content :global(input:focus) { border-color: var(--primary); }
  .content :global(input:disabled) { opacity: 0.6; cursor: not-allowed; }
  .content :global(.alert) { padding: 12px 16px; border-radius: 14px; background: var(--color-error-light); color: var(--color-error-dark); line-height: 1.5; }
  @media (max-width: 650px) {
    .info { padding-top: 56px; padding-bottom: 80px; }
    .content :global(.grid) { grid-template-columns: 1fr; }
  }
</style>
