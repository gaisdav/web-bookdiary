<script lang="ts">
  import InfoLayout from "$lib/components/InfoLayout.svelte";
</script>

<InfoLayout
  pageTitle="Delete Account"
  description="Delete your Readimus account and associated data."
  eyebrow="Account controls"
  title="Delete your Readimus account."
  intro="You can start account deletion inside the app or request it from this page if you no longer have access to the app."
>
  <section class="card">
    <h2>Delete inside Readimus</h2>
    <ol>
      <li>Open Readimus and go to your profile.</li>
      <li>Open Settings, then Account.</li>
      <li>Select Delete account and follow the confirmation steps.</li>
    </ol>
  </section>
  <section class="card card-accent">
    <h2>Request deletion by email</h2>
    <p>Email us from the address connected to your account. Include your username if you have one. We may ask you to verify ownership, but we will never ask for your password.</p>
    <a class="mail-button" href="mailto:support@readimus.com?subject=Delete%20my%20Readimus%20account">Request account deletion</a>
  </section>
  <section class="card">
    <h2>What happens next</h2>
    <p>Your account and associated personal data will be deleted or anonymized, except for limited information we must retain for security, legal obligations, or resolving disputes, as described in our <a href="/privacy">Privacy Policy</a>.</p>
  </section>
</InfoLayout>
