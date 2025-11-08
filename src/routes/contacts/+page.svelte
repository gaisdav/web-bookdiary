<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { PUBLIC_SUPPORT_EMAIL } from "$env/static/public";
</script>

<svelte:head>
  <title>Contacts - BookDiary Support</title>
  <meta name="description" content="Contact BookDiary support" />
</svelte:head>

<div class="container">
  <div class="card">
    <h1>Contact Us</h1>
    <p class="subtitle">We're here to help with your BookDiary journey.</p>

    <p>
      If you have any questions, feedback, or need technical support regarding
      the BookDiary application, please don't hesitate to reach out. We aim to
      respond to all inquiries as quickly as possible.
    </p>

    <div class="contact-info">
      <p>
        For all support and general questions, please use the following email
        address:
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
