<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { supabase } from "$lib/supabase";
  import { APP_LOGIN_URL } from "$lib/appScheme";
  import InfoLayout from "$lib/components/InfoLayout.svelte";
  import StatusMark from "$lib/components/StatusMark.svelte";

  let loading = true;
  let error = "";
  let showForm = false;
  let success = false;
  let password = "";
  let confirmPassword = "";
  let formError = "";
  let isSubmitting = false;
  let subscription: { unsubscribe: () => void } | null = null;

  onMount(() => {
    if (!browser) return;
    if (!supabase) {
      error =
        "Supabase is not configured. Please set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in your .env file.";
      loading = false;
      return;
    }
    checkSession();
  });

  onDestroy(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  });

  function checkSession() {
    if (!browser || !supabase) return;

    loading = true;
    error = "";
    showForm = false;
    success = false;

    const {
      data: { subscription: authSubscription },
    } = supabase.auth.onAuthStateChange((event: string, session: any) => {
      // INITIAL_SESSION always fires once for a fresh subscriber, whether
      // or not a session exists — it is not itself an error signal. A
      // session can already be there (a reload after Supabase already
      // processed the link's tokens, or a subscribe that lands just after
      // detectSessionInUrl finishes) and used to fall through here with
      // no branch matching, leaving `loading` stuck true forever.
      if (
        event === "PASSWORD_RECOVERY" ||
        ((event === "INITIAL_SESSION" || event === "SIGNED_IN") && session)
      ) {
        showForm = true;
        loading = false;
      } else if (event === "INITIAL_SESSION" && !session) {
        error =
          "The password reset link is invalid, expired, or was already used.";
        loading = false;
      }
    });

    subscription = authSubscription;
  }

  async function handleSubmit() {
    if (!browser || !supabase) return;

    if (password !== confirmPassword) {
      formError = "Passwords do not match!";
      return;
    }

    if (password.length < 6) {
      formError = "Password must be at least 6 characters long.";
      return;
    }

    formError = "";
    error = "";
    isSubmitting = true;

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        // Leave the form up — the reset link is already consumed at this
        // point (the session it produced is what made the form appear at
        // all), so hiding the form here for a network hiccup or a
        // server-side password rule stricter than our 6-character check
        // would strand the user with no way to retry without requesting a
        // whole new reset link.
        error = `Error updating password: ${updateError.message}`;
        return;
      }

      await supabase.auth.signOut();
      success = true;
      showForm = false;
    } catch (err) {
      error = "An unexpected error occurred.";
    } finally {
      isSubmitting = false;
    }
  }

  type TStep = "checking" | "form" | "done" | "failed";
  type THeader = { eyebrow: string; title: string; intro: string };

  // The header says where the page is: checking the link, the form, done, or
  // a link that didn't work. A failed submit keeps the form up (see
  // handleSubmit) and shows its error inside it.
  $: step = (loading ? "checking" : success ? "done" : showForm ? "form" : "failed") as TStep;

  function headerFor(current: TStep, message: string): THeader {
    switch (current) {
      case "checking":
        return {
          eyebrow: "Password reset",
          title: "Checking your link…",
          intro: "This only takes a moment.",
        };
      case "form":
        return {
          eyebrow: "Password reset",
          title: "Choose a new password.",
          intro: "Use at least 6 characters. From now on, you’ll sign in to Readimus with it.",
        };
      case "done":
        return {
          eyebrow: "Password updated",
          title: "You’re all set.",
          intro: "Your password has been changed. Sign in to Readimus with your new password.",
        };
      case "failed":
        return { eyebrow: "Password reset", title: "This link didn’t work.", intro: message };
    }
  }

  $: header = headerFor(step, error);
  const ICONS = { checking: "spinner", form: "lock", done: "check", failed: "alert" } as const;
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<InfoLayout
  pageTitle="Reset password"
  description="Reset your Readimus password."
  eyebrow={header.eyebrow}
  title={header.title}
  intro={header.intro}
  live
>
  <svelte:fragment slot="mark">
    <StatusMark icon={ICONS[step]} tone={step === "failed" ? "error" : "brand"} />
  </svelte:fragment>

  {#if step === "form"}
    <section class="card form-card">
      <form on:submit|preventDefault={handleSubmit}>
        {#if error}
          <p class="alert" role="alert">{error}</p>
        {/if}
        {#if formError}
          <p class="alert" role="alert">{formError}</p>
        {/if}

        <div>
          <label for="password">New password</label>
          <input
            type="password"
            id="password"
            autocomplete="new-password"
            bind:value={password}
            required
            minlength="6"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label for="confirm_password">Confirm password</label>
          <input
            type="password"
            id="confirm_password"
            autocomplete="new-password"
            bind:value={confirmPassword}
            required
            minlength="6"
            disabled={isSubmitting}
          />
        </div>

        <button type="submit" class="button button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Saving…" : "Set new password"}
        </button>
      </form>
    </section>
  {:else if step === "done"}
    <section class="card card-accent">
      <h2>Continue in the app</h2>
      <p>Open Readimus on your phone and sign in with your email and new password.</p>
      <div class="actions">
        <a class="button button-primary" href={APP_LOGIN_URL}>Open Readimus</a>
      </div>
    </section>
  {:else if step === "failed"}
    <section class="card">
      <h2>What to do next</h2>
      <ul>
        <li>Need a new link? On the Readimus sign-in screen, tap “Forgot password?” and open the newest email.</li>
        <li>Already changed your password? Then you’re done: sign in with it.</li>
      </ul>
      <p class="help">Still stuck? <a href="/support">Get help</a></p>
    </section>
  {/if}
</InfoLayout>

<style>
  .help {
    margin-top: 14px;
  }
</style>
