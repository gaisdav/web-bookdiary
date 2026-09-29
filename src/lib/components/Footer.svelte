<footer class="footer">
  <div class="shell footer-grid">
    <div class="footer-brand">
      <a href="/" class="brand"><img src="/brand/readimus-logo-draft.jpg" alt="" width="38" height="38" /><span>Readimus</span></a>
      <p>Your books, notes, and reading life in one thoughtful place.</p>
      <a class="email" href="mailto:support@readimus.com">support@readimus.com</a>
    </div>
    <div><h2>Help</h2><a href="/support">Support</a><a href="/delete-account">Delete account</a><a href="/copyright">Copyright</a></div>
    <div><h2>Legal</h2><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a><a href="/community-guidelines">Community Guidelines</a></div>
  </div>
  <div class="shell footer-bottom"><span>© 2026 Readimus</span><span>Made for people who keep turning pages.</span></div>
</footer>

<style>
  .footer { margin-top: 88px; padding: 54px 0 30px; border-top: 1px solid var(--color-border-light); background: var(--color-background-secondary); }
  .footer-grid { display: grid; grid-template-columns: minmax(260px, 2fr) 1fr 1fr; gap: 64px; }
  .brand { display: inline-flex; align-items: center; gap: 9px; color: var(--color-text); font-family: var(--font-family-display); font-size: 20px; font-weight: 800; letter-spacing: -0.04em; text-decoration: none; }
  .brand:hover { color: var(--color-text); text-decoration: none; }
  .brand img { width: 38px; height: 38px; border-radius: 11px; object-fit: cover; }
  .footer-brand p { max-width: 370px; margin: 16px 0 10px; color: var(--color-text-secondary); }
  .email { font-size: 14px; }
  h2 { margin-bottom: 12px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-tertiary); }
  .footer-grid > div:not(.footer-brand) a { display: block; width: fit-content; margin: 8px 0; color: var(--color-text-secondary); font-size: 14px; text-decoration: none; }
  .footer-grid > div:not(.footer-brand) a:hover { color: var(--color-text); }
  .footer-bottom { display: flex; justify-content: space-between; gap: 20px; margin-top: 46px; padding-top: 22px; border-top: 1px solid var(--color-border-light); color: var(--color-text-tertiary); font-size: 12px; }

  @media (max-width: 720px) {
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 38px 24px; }
    .footer-brand { grid-column: 1 / -1; }
  }
  @media (max-width: 480px) {
    .footer-grid { grid-template-columns: 1fr; }
    .footer-brand { grid-column: auto; }
    .footer-bottom { flex-direction: column; }
  }
</style>
