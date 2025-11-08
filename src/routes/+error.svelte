<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";

  const is404 = $page.status === 404;
</script>

<svelte:head>
  <title>{is404 ? "404 - Page Not Found" : "Error"} - BookDiary</title>
  <meta name="description" content="Page Not Found" />
</svelte:head>

<div class="container">
  <div class="card">
    {#if is404}
      <h1 class="error-code">4📚4</h1>
      <p class="subtitle">Page Not Found</p>
      <p>
        Sorry, the page you're looking for doesn't exist. It may have been moved
        or deleted.
      </p>
      <a href="/" class="home-link">Return to Home Page</a>
    {:else}
      <h1 class="error-code">Error</h1>
      <p class="subtitle">An Error Occurred</p>
      <p>Sorry, an error occurred. Please try again later.</p>
      <a href="/" class="home-link">Return to Home Page</a>
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
