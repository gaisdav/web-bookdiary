<script lang="ts">
</script>

<footer class="footer">
  <a href="/" class="footer-link">Home</a>
  <span class="separator">|</span>
  <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
  <span class="separator">|</span>
  <a href="/contacts" class="footer-link">Contacts</a>
</footer>

<style>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-xxl);
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border-light);
    font-size: var(--font-size-sm);
  }

  .footer-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color var(--timing-fast) ease;
  }

  .footer-link:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .separator {
    color: var(--color-text-tertiary);
  }
</style>
