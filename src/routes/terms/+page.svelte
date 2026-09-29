<script lang="ts">
  import LegalDocument from "$lib/components/LegalDocument.svelte";
  import english from "$lib/legal/TERMS_OF_USE.en.md?raw";
  import russian from "$lib/legal/TERMS_OF_USE.ru.md?raw";
</script>

<LegalDocument pageTitle="Terms of Use" description="Terms governing access to and use of Readimus." {english} {russian} />
