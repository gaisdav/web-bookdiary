<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<footer class="footer">
  <a href="/" class="footer-link">{$_("common.home")}</a>
  <span class="separator">|</span>
  <a href="/privacy-policy" class="footer-link">{$_("common.privacyPolicy")}</a>
  <span class="separator">|</span>
  <a href="/contacts" class="footer-link">{$_("common.contacts")}</a>
</footer>

<style>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xxl);
    padding: var(--spacing-md) var(--spacing-sm);
    border-top: 1px solid var(--color-border-light);
    font-size: var(--font-size-sm);
  }

  .footer-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color var(--timing-fast) ease;
    white-space: nowrap;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .footer-link:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .separator {
    color: var(--color-text-tertiary);
    padding: 0 var(--spacing-xs);
  }

  @media (max-width: 480px) {
    .footer {
      gap: var(--spacing-xs);
      font-size: calc(var(--font-size-sm) * 0.9);
      padding: var(--spacing-sm) var(--spacing-xs);
    }

    .footer-link {
      padding: var(--spacing-xs);
    }

    .separator {
      padding: 0 var(--spacing-xs);
      font-size: 0.9em;
    }
  }

  @media (max-width: 360px) {
    .footer {
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .separator {
      display: none;
    }
  }
</style>
