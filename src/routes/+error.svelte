<script lang="ts">
  import { page } from "$app/stores";
  import InfoLayout from "$lib/components/InfoLayout.svelte";

  $: is404 = $page.status === 404;
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<InfoLayout
  pageTitle={is404 ? "Page not found" : "Error"}
  description={is404 ? "This page doesn’t exist." : "Something went wrong."}
  eyebrow="Error {$page.status}"
  title={is404 ? "Page not found." : "Something went wrong."}
  intro={is404
    ? "The page you’re looking for doesn’t exist. It may have been moved or deleted."
    : "Sorry, this page couldn’t load. Please try again in a moment."}
>
  <div class="actions">
    <a class="button button-primary" href="/">Go to the home page</a>
    <a class="button button-secondary" href="/support">Get help</a>
  </div>
</InfoLayout>
