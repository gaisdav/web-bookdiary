<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import { _ } from 'svelte-i18n';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

  const is404 = $page.status === 404;
</script>

<svelte:head>
  <title>{is404 ? $_('error.404Title') : $_('error.errorTitle')} - BookDiary</title>
  <meta name="description" content="Page Not Found" />
</svelte:head>

<div class="container">
  <div class="language-switcher-container">
    <LanguageSwitcher />
  </div>
  <div class="card">
    {#if is404}
      <h1 class="error-code">{$_('error.404Heading')}</h1>
      <p class="subtitle">{$_('error.404Subtitle')}</p>
      <p>
        {$_('error.404Text')}
      </p>
      <a href="/" class="home-link">{$_('error.returnHome')}</a>
    {:else}
      <h1 class="error-code">{$_('error.errorTitle')}</h1>
      <p class="subtitle">{$_('error.errorSubtitle')}</p>
      <p>{$_('error.errorText')}</p>
      <a href="/" class="home-link">{$_('error.returnHome')}</a>
    {/if}
  </div>

  <Footer />
</div>

<style>
  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: var(--spacing-xxl) var(--spacing-md);
    text-align: center;
  }

  .language-switcher-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--spacing-md);
  }

  .card {
    background-color: var(--color-tab-bar);
    padding: var(--spacing-xxl);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-medium);
    margin-bottom: var(--spacing-lg);
  }

  .error-code {
    color: var(--color-primary);
    font-size: var(--font-size-xxxl);
    margin-bottom: var(--spacing-sm);
    font-weight: bold;
  }

  .subtitle {
    color: var(--color-text-secondary);
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-lg);
  }

  p {
    margin-bottom: var(--spacing-md);
    line-height: var(--line-height-lg);
  }

  .home-link {
    display: inline-block;
    margin-top: var(--spacing-lg);
    padding: var(--spacing-md) var(--spacing-xl);
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 500;
    transition: background-color var(--timing-fast) ease;
  }

  .home-link:hover {
    background-color: var(--color-primary-dark);
    text-decoration: none;
  }
</style>
