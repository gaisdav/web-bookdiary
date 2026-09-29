<script lang="ts">
  import InfoLayout from "$lib/components/InfoLayout.svelte";
</script>

<InfoLayout
  pageTitle="Support"
  description="Get help with your Readimus account and app."
  eyebrow="Readimus Support"
  title="How can we help?"
  intro="Tell us what happened and we’ll help you find the next step."
>
  <section class="card card-accent">
    <h2>Contact support</h2>
    <p>Email us with a short description of the issue. Please never send your password.</p>
    <a class="mail-button" href="mailto:support@readimus.com">support@readimus.com</a>
  </section>
  <div class="grid">
    <section class="card">
      <h3>I can’t sign in</h3>
      <p>Use the password reset option first. If the email does not arrive, check spam and then contact us.</p>
    </section>
    <section class="card">
      <h3>I want to delete my account</h3>
      <p>Follow the steps on our <a href="/delete-account">Delete Account</a> page.</p>
    </section>
    <section class="card">
      <h3>I found abusive content</h3>
      <p>Use Report in the app. You can also block the user or email us with a link and details.</p>
    </section>
    <section class="card">
      <h3>I found a technical problem</h3>
      <p>Include your device model, operating system version, and the steps that caused the problem.</p>
    </section>
  </div>
</InfoLayout>
