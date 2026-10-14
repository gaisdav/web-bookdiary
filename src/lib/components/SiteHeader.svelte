<script lang="ts">
  export let showName = true;

  let open = false;
  let header: HTMLElement;
  const close = () => (open = false);

  function onWindowClick(event: MouseEvent) {
    if (open && !header.contains(event.target as Node)) close();
  }
</script>

<svelte:window on:click={onWindowClick} on:keydown={(e) => e.key === 'Escape' && close()} />

<header class="site-header" bind:this={header}>
  <div class="shell header-inner">
    <a class="brand" href="/" aria-label="Readimus home" on:click={close}>
      <img src="/brand/readimus-mark-128.webp" alt="" width="42" height="42" />
      {#if showName}<span>Readimus</span>{/if}
    </a>

    <button class="menu-button" class:open type="button" aria-label="Toggle navigation" aria-expanded={open} on:click={() => (open = !open)}>
      <span></span><span></span>
    </button>

    <nav class:open aria-label="Main navigation">
      <a href="/#features" on:click={close}>Features</a>
      <a href="/support" on:click={close}>Support</a>
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
  .menu-button { position: relative; display: none; width: 44px; height: 44px; border: 0; border-radius: 50%; background: var(--color-background-secondary); }
  .menu-button span { position: absolute; top: 50%; left: 50%; width: 18px; height: 2px; margin: -1px 0 0 -9px; border-radius: 2px; background: var(--color-text); transition: transform 0.25s ease; }
  .menu-button span:first-child { transform: translateY(-3.5px); }
  .menu-button span:last-child { transform: translateY(3.5px); }
  .menu-button.open span:first-child { transform: rotate(45deg); }
  .menu-button.open span:last-child { transform: rotate(-45deg); }

  @media (max-width: 680px) {
    .menu-button { display: block; }
    nav { position: absolute; top: 72px; right: 14px; left: 14px; display: flex; visibility: hidden; opacity: 0; transform: translateY(-8px); transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s; flex-direction: column; align-items: stretch; gap: 4px; padding: 14px; border: 1px solid var(--color-border-light); border-radius: var(--radius-lg); background: rgb(255 255 255 / 96%); box-shadow: var(--shadow-medium); }
    nav.open { visibility: visible; opacity: 1; transform: none; transition-delay: 0s; }
    nav a { padding: 12px 14px; }
  }

  @media (prefers-reduced-motion: reduce) {
    nav, .menu-button span { transition: none; }
  }
</style>
