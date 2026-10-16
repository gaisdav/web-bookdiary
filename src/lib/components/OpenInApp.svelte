<script lang="ts">
  import { page } from "$app/stores";
  import { appUrlFor } from "$lib/appScheme";
  import { APP_STORE_ID, APP_STORE_URL, googlePlayUrl } from "$lib/storeLinks";
  import InfoLayout from "$lib/components/InfoLayout.svelte";

  // Where a link shared from the app lands when the app did not take it: no
  // app on this device, or a browser that keeps links to itself (most in-app
  // browsers, or the address typed by hand). The app claims these paths
  // (AASA `/book/*` and `/user/*`, Android intent-filter), so with the app
  // installed most people never see this page.
  export let subject: "profile" | "list" | "book";

  const SUBJECTS = {
    profile: "a reader’s profile",
    list: "a reading list",
    book: "a book",
  };
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  <!-- app-argument hands the app this link, so the banner's "Open" lands on the same screen. -->
  <meta name="apple-itunes-app" content="app-id={APP_STORE_ID}, app-argument={$page.url.href}" />
</svelte:head>

<InfoLayout
  pageTitle="Shared {subject}"
  description="Continue in the Readimus app to view this {subject}."
  eyebrow="Shared {subject}"
  title="Open this {subject} in Readimus."
  intro="This link opens {SUBJECTS[subject]} in the Readimus app. Get the app to view it, and to keep a reading diary of your own."
>
  <div class="grid">
    <section class="card card-accent">
      <h2>Get Readimus</h2>
      <p>Log what you read, save notes and reviews, and build lists of your own.</p>
      <div class="actions">
        <a class="button button-primary" href={APP_STORE_URL}>Download on the App Store</a>
        <!-- The placement keeps the referrer these pages have always sent. -->
        <a class="button button-primary" href={googlePlayUrl(subject)}>Get it on Google Play</a>
      </div>
    </section>
    <section class="card">
      <h2>Already have it?</h2>
      <p>Open this {subject} in the app. On a computer, open the link on your phone instead.</p>
      <div class="actions">
        <a class="button button-secondary" href={appUrlFor($page.url)}>Open in Readimus</a>
      </div>
    </section>
  </div>
</InfoLayout>
