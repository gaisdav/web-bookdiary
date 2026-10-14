<script lang="ts">
  import LegalDocument from "$lib/components/LegalDocument.svelte";
  import english from "$lib/legal/PRIVACY_POLICY.en.md?raw";
</script>

<LegalDocument pageTitle="Privacy Policy" description="How Readimus collects, uses, and protects personal data." {english} />
