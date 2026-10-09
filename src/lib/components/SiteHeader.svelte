<script lang="ts">
  import { googlePlayUrl } from "$lib/storeLinks";

  export let showName = true;

  let open = false;
  const close = () => (open = false);
</script>

<header class="site-header">
  <div class="shell header-inner">
    <a class="brand" href="/" aria-label="Readimus home" on:click={close}>
      <img src="/brand/readimus-mark-128.webp" alt="" width="42" height="42" />
      {#if showName}<span>Readimus</span>{/if}
    </a>

    <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} on:click={() => (open = !open)}>
      <span></span><span></span>
    </button>

    <nav class:open aria-label="Main navigation">
      <a href="/#features" on:click={close}>Features</a>
      <a href="/support" on:click={close}>Support</a>
      <a class="get-app" href={googlePlayUrl("header")} on:click={close}>Get it on Google Play</a>
    </nav>
  </div>
</header>

<style>
  .site-header { position: relative; z-index: 30; padding: 18px 0; }
  .header-inner, .brand, nav { display: flex; align-items: center; }
  .header-inner { justify-content: space-between; }
  .brand { gap: 10px; color: var(--color-text); font-family: var(--font-family-display); font-size: 21px; font-weight: 800; letter-spacing: -0.04em; text-decoration: none; }
  .brand:hover { color: var(--color-text); text-decoration: none; }
  .brand img { width: 42px; height: 42px; border-radius: 12px; background: var(--color-accent-soft); object-fit: cover; }
  nav { gap: 28px; font-size: 14px; font-weight: 700; }
  nav a { color: var(--color-text-secondary); text-decoration: none; }
  nav a:hover { color: var(--color-text); }
  nav a.get-app { padding: 8px 13px; border: 1px solid rgb(0 151 178 / 25%); border-radius: var(--radius-round); color: var(--color-primary-dark); background: var(--color-primary-soft); font-size: 12px; transition: color var(--timing-fast) ease, background var(--timing-fast) ease; }
  nav a.get-app:hover { color: var(--color-text-inverse); background: var(--color-primary-dark); }
  .menu-button { display: none; width: 44px; height: 44px; border: 0; border-radius: 50%; background: var(--color-background-secondary); }
  .menu-button span { display: block; width: 18px; height: 2px; margin: 5px auto; border-radius: 2px; background: var(--color-text); }

  @media (max-width: 680px) {
    .menu-button { display: block; }
    nav { position: absolute; top: 72px; right: 14px; left: 14px; display: none; flex-direction: column; align-items: stretch; gap: 4px; padding: 14px; border: 1px solid var(--color-border-light); border-radius: var(--radius-lg); background: rgb(255 255 255 / 96%); box-shadow: var(--shadow-medium); }
    nav.open { display: flex; }
    nav a, nav a.get-app { padding: 12px 14px; }
  }
</style>
