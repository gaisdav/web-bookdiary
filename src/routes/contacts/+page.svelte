<script lang="ts">
  import InfoLayout from "$lib/components/InfoLayout.svelte";
  import { ROUTES, SUPPORT_EMAIL, mailtoSupport } from "$lib/links";
</script>

<InfoLayout
  pageTitle="Contact"
  description="How to reach the Readimus team."
  eyebrow="Contact"
  title="Write to us."
  intro="Questions, feedback, or something not working in the app? Send us an email and we’ll get back to you as soon as we can."
>
  <section class="card card-accent">
    <h2>Email</h2>
    <p>One address for everything: support, feedback and account questions. Please never send your password.</p>
    <a class="mail-button" href={mailtoSupport()}>{SUPPORT_EMAIL}</a>
  </section>
  <div class="grid">
    <section class="card">
      <h3>Looking for a quick answer?</h3>
      <p>Common problems and what to do about them are on our <a href={ROUTES.support}>Support</a> page.</p>
    </section>
    <section class="card">
      <h3>Reporting a copyright issue?</h3>
      <p>Our <a href={ROUTES.copyright}>Copyright</a> page lists what a notice needs to include.</p>
    </section>
  </div>
</InfoLayout>
