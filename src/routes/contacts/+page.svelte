<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { PUBLIC_SUPPORT_EMAIL } from "$env/static/public";
  import { _ } from 'svelte-i18n';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<svelte:head>
  <title>{$_('contacts.title')}</title>
  <meta name="description" content={$_('contacts.description')} />
</svelte:head>

<div class="container">
  <div class="language-switcher-container">
    <LanguageSwitcher />
  </div>
  <div class="card">
    <h1>{$_('contacts.heading')}</h1>
    <p class="subtitle">{$_('contacts.subtitle')}</p>

    <p>
      {$_('contacts.descriptionText')}
    </p>

    <div class="contact-info">
      <p>
        {$_('contacts.emailLabel')}
      </p>

      <a href="mailto:{PUBLIC_SUPPORT_EMAIL}" class="contact-link">
        {PUBLIC_SUPPORT_EMAIL}
      </a>
    </div>
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

  h1 {
    color: var(--color-primary);
    font-size: var(--font-size-xxxl);
    margin-bottom: var(--spacing-sm);
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

  .contact-info {
    margin-top: var(--spacing-lg);
    font-size: var(--font-size-lg);
  }

  .contact-link {
    display: block;
    margin-top: var(--spacing-md);
    font-weight: 600;
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--timing-fast) ease;
  }

  .contact-link:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }
</style>
