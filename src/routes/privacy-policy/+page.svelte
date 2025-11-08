<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { PUBLIC_SUPPORT_EMAIL } from "$env/static/public";
  import { _ } from 'svelte-i18n';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<svelte:head>
  <title>{$_('privacy.title')}</title>
  <meta name="description" content={$_('privacy.description')} />
</svelte:head>

<div class="container">
  <div class="language-switcher-container">
    <LanguageSwitcher />
  </div>
  <h1>{$_('privacy.heading')}</h1>

  <h2>{$_('privacy.section1Title')}</h2>
  <p>
    {@html $_('privacy.section1Text')}
  </p>

  <h2>{$_('privacy.section2Title')}</h2>
  <p>
    {@html $_('privacy.section2Text')}
  </p>

  <h2>{$_('privacy.section3Title')}</h2>
  <p>
    {$_('privacy.section3Text')}
  </p>

  <h2>{$_('privacy.section4Title')}</h2>
  <p>
    {@html $_('privacy.section4Text')}
  </p>

  <h2>{$_('privacy.section5Title')}</h2>
  <p>
    {$_('privacy.section5Text')} <a
      href="mailto:{PUBLIC_SUPPORT_EMAIL}">{PUBLIC_SUPPORT_EMAIL}</a
    >.
  </p>

  <Footer />
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-xxl) var(--spacing-md);
  }

  .language-switcher-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--spacing-md);
  }

  h1 {
    color: var(--color-text);
    font-size: var(--font-size-xxxl);
    border-bottom: 2px solid var(--color-border-light);
    padding-bottom: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
  }

  h2 {
    color: var(--color-primary);
    font-size: var(--font-size-xl);
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
  }

  p {
    margin-bottom: var(--spacing-md);
    line-height: var(--line-height-lg);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
