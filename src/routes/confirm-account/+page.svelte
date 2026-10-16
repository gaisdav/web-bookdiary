<script lang="ts">
  // Near-identical copy of ../reset-password/+page.svelte, deliberately not
  // shared with it: the mechanics are the same (see below), but the words
  // are different enough — "reset" implies a password that already existed
  // — that reusing one route for both would confuse whichever case isn't
  // the one currently showing.
  //
  // This page is where a Readimus guest (anonymous) session finishes
  // becoming a real account (app's docs/PLAN_GUEST_MODE.md, section 7.3).
  // The app calls supabase.auth.updateUser({ email, data }) on the guest's
  // still-active anonymous session; GoTrue emails a confirmation link for
  // the new address with this page as its redirect target. Clicking it is
  // an "email_change" verification, not "recovery" — but GoTrue's own
  // verify endpoint issues a session with tokens in the redirect URL the
  // same way for both (confirmed from its source, not assumed), so the
  // plain SIGNED_IN branch below — already here for reset-password's own
  // "recovery link opened in a fresh browser" case — is what actually
  // picks this up, not PASSWORD_RECOVERY.
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { supabase } from "$lib/supabase";
  import { APP_OPEN_URL } from "$lib/appScheme";
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

  // The guest started this in the app, on a phone almost certainly the same
  // one, so hand them straight back to it — the app notices the account is
  // no longer a guest the moment it is in the foreground again. iOS asks
  // first ("Open in Readimus?"). A desktop has no app to open, so it is not
  // tried there, and the button covers a browser that will not navigate
  // without a fresh tap.
  function returnToApp() {
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = APP_OPEN_URL;
    }
  }

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
          "The confirmation link is invalid, expired, or was already used.";
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
        // Leave the form up — the confirmation link is already consumed at
        // this point (the session it produced is what made the form appear
        // at all), so hiding the form here for a network hiccup or a
        // server-side password rule stricter than our 6-character check
        // would strand the user with a confirmed email and no way to set a
        // password without requesting a whole new link.
        error = `Error setting password: ${updateError.message}`;
        return;
      }

      // scope: 'local' — the default ('global') revokes the refresh token
      // for every session on this account, not just this browser tab. This
      // account's mobile app is very likely still signed in as the same
      // (now no-longer-anonymous) user; a bare signOut() here would force
      // it to log out the moment this page finishes, instead of the
      // "nothing to do, it just picks up the real account" the app side
      // was built to expect.
      await supabase.auth.signOut({ scope: "local" });
      success = true;
      showForm = false;
      returnToApp();
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
          eyebrow: "Create your account",
          title: "Checking your link…",
          intro: "This only takes a moment.",
        };
      case "form":
        return {
          eyebrow: "Create your account",
          title: "Set your password.",
          intro: "One last step: choose a password to finish creating your Readimus account.",
        };
      case "done":
        return {
          eyebrow: "Account created",
          title: "Your account is ready.",
          intro:
            "Go back to the Readimus app: it switches to your new account on its own, and everything you added as a guest is still there.",
        };
      case "failed":
        return { eyebrow: "Create your account", title: "This link didn’t work.", intro: message };
    }
  }

  $: header = headerFor(step, error);
  const ICONS = { checking: "spinner", form: "lock", done: "check", failed: "alert" } as const;
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<InfoLayout
  pageTitle="Complete your account"
  description="Finish creating your Readimus account."
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
          <label for="password">Password</label>
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
          {isSubmitting ? "Saving…" : "Set password"}
        </button>
      </form>
    </section>
  {:else if step === "done"}
    <section class="card card-accent">
      <h2>Continue in the app</h2>
      <p>If Readimus didn’t open by itself, open it now. On a computer, go back to the app on your phone.</p>
      <div class="actions">
        <a class="button button-primary" href={APP_OPEN_URL}>Open Readimus</a>
      </div>
    </section>
  {:else if step === "failed"}
    <section class="card">
      <h2>What to do next</h2>
      <ul>
        <li>Already set your password? Then you’re done: go back to the Readimus app.</li>
        <li>Otherwise, start creating your account again in the Readimus app and open the newest email we send you.</li>
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
