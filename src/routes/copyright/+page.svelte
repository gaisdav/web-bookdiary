<script lang="ts">
  import InfoLayout from "$lib/components/InfoLayout.svelte";
</script>

<InfoLayout
  pageTitle="Copyright & Takedown"
  description="Report content that may infringe copyright on Readimus."
  eyebrow="Copyright"
  title="Copyright and takedown requests."
  intro="Readimus provides information about books and user-created content; it does not host full books. We still take valid copyright reports seriously."
>
  <section class="card card-accent">
    <h2>Send a copyright report</h2>
    <p>Email your notice to our dedicated address. To help us review it, include all of the information below.</p>
    <a class="mail-button" href="mailto:support@readimus.com?subject=Copyright%20report">support@readimus.com</a>
  </section>
  <section class="card">
    <h2>What to include</h2>
    <ul>
      <li>Your full name and contact information.</li>
      <li>A description of the copyrighted work.</li>
      <li>The exact Readimus URL or enough detail to locate the reported material.</li>
      <li>An explanation of why you believe the use is unauthorized.</li>
      <li>A statement that your report is accurate and made in good faith.</li>
      <li>Confirmation that you are the rightsholder or authorized to act for them.</li>
      <li>Your physical or electronic signature.</li>
    </ul>
  </section>
  <section class="card">
    <h2>After we receive it</h2>
    <p>We may ask for missing information, restrict or remove the material, and contact the user who provided it. False or misleading reports may have legal consequences.</p>
  </section>
</InfoLayout>
