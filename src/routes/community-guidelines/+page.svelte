<script lang="ts">
  import LegalDocument from "$lib/components/LegalDocument.svelte";
  import english from "$lib/legal/COMMUNITY_GUIDELINES.en.md?raw";
  import russian from "$lib/legal/COMMUNITY_GUIDELINES.ru.md?raw";
</script>

<LegalDocument pageTitle="Community Guidelines" description="Rules for keeping the Readimus community thoughtful, safe, and welcoming." {english} {russian} />
