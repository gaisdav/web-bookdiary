<script lang="ts">
  // The round mark above the header of a page that reports how a link went
  // (InfoLayout's `mark` slot): an inline SVG on the card-accent palette.
  // The colour follows the outcome: brand for progress and success, amber for
  // "try again", red for a link that will not work.
  export let icon: "spinner" | "check" | "mail" | "lock" | "retry" | "alert";
  export let tone: "brand" | "warning" | "error" = "brand";
</script>

<div class="status-mark {tone}" aria-hidden="true">
  <svg viewBox="0 0 24 24">
    {#if icon === "spinner"}
      <circle class="spin" cx="12" cy="12" r="8" />
    {:else if icon === "check"}
      <path class="draw" d="M20 6 9 17l-5-5" />
    {:else if icon === "mail"}
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m21 8-7.97 5.07a2 2 0 0 1-2.06 0L3 8" />
    {:else if icon === "lock"}
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    {:else if icon === "retry"}
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    {:else}
      <path d="M12 7v6" />
      <path d="M12 17h.01" />
    {/if}
  </svg>
</div>

<style>
  .status-mark {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border: 1px solid #b8e7ee;
    border-radius: 50%;
    background: var(--primary-soft);
    color: var(--primary-dark);
  }

  .status-mark.warning {
    border-color: #f1d9b3;
    background: var(--color-warning-light);
    color: var(--color-warning);
  }

  .status-mark.error {
    border-color: #f4cbc8;
    background: var(--color-error-light);
    color: var(--color-error);
  }

  svg {
    width: 30px;
    height: 30px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.25;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* A quarter-open ring turning while the check runs. */
  .spin {
    stroke-dasharray: 38 13;
    transform-origin: center;
    animation: spin 0.9s linear infinite;
  }

  /* The tick draws itself once, the one moment of motion on success. Both
     are cut by the site-wide reduced-motion rule. */
  .draw {
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    animation: draw 0.45s 0.1s ease-out forwards;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
