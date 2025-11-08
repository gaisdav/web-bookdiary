<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { supabase } from "$lib/supabase";
  import Footer from "$lib/components/Footer.svelte";

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
      if (event === "PASSWORD_RECOVERY") {
        showForm = true;
        loading = false;
      } else if (event === "INITIAL_SESSION" && !session) {
        error =
          "The password reset link is invalid, expired, or was already used.";
        loading = false;
      } else if (event === "SIGNED_IN" && session) {
        showForm = true;
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
    isSubmitting = true;

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        error = `Error updating password: ${updateError.message}`;
        showForm = false;
        return;
      }

      await supabase.auth.signOut();
      success = true;
      showForm = false;
    } catch (err) {
      error = "An unexpected error occurred.";
      showForm = false;
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>BookDiary - Reset Password</title>
  <meta name="description" content="Reset your BookDiary password" />
</svelte:head>

<div class="container">
  <div class="card">
    <h2>Reset Your Password</h2>

    {#if loading}
      <div class="message message-info">Checking session...</div>
    {/if}

    {#if error}
      <div class="message message-error">
        {error}
      </div>
    {/if}

    {#if showForm}
      <form on:submit|preventDefault={handleSubmit}>
        <div class="message message-info">Enter your new password below.</div>

        {#if formError}
          <div class="message message-error">
            {formError}
          </div>
        {/if}

        <label for="password">New Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          required
          minlength="6"
          disabled={isSubmitting}
        />

        <label for="confirm_password">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          bind:value={confirmPassword}
          required
          minlength="6"
          disabled={isSubmitting}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Set New Password"}
        </button>
      </form>
    {/if}

    {#if success}
      <div class="message message-success">
        <p>✅ Your password has been successfully updated!</p>
        <p>You can now close this window and log in to the BookDiary app.</p>
      </div>
    {/if}
  </div>

  <Footer />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    padding: var(--spacing-xxl) var(--spacing-md);
  }

  .card {
    width: 100%;
    max-width: 400px;
    background-color: var(--color-tab-bar);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-medium);
  }

  h2 {
    color: var(--color-primary);
    text-align: center;
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-xxl);
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
    color: var(--color-text);
  }

  input[type="password"] {
    width: 100%;
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    border: 1px solid var(--color-input-border);
    border-radius: var(--radius-sm);
    background-color: var(--color-input-background);
    color: var(--color-text);
    transition: border-color var(--timing-fast) ease;
  }

  input[type="password"]:focus {
    border-color: var(--color-primary);
    outline: none;
  }

  input[type="password"]:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button {
    width: 100%;
    padding: var(--spacing-md);
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
    border: none;
    border-radius: var(--radius-sm);
    font-size: var(--font-size-md);
    font-weight: 700;
    transition:
      background-color var(--timing-fast) ease,
      box-shadow var(--timing-fast) ease;
  }

  button:hover:not(:disabled) {
    background-color: var(--color-primary-dark);
    box-shadow: var(--shadow-small);
  }

  button:disabled {
    background-color: var(--color-text-tertiary);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .message {
    margin-top: var(--spacing-md);
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    text-align: center;
  }

  .message-info {
    background-color: var(--color-info-light);
    color: var(--color-info);
    font-weight: 500;
  }

  .message-success {
    background-color: var(--color-success-light);
    color: var(--color-success-dark);
  }

  .message-success p {
    margin-bottom: var(--spacing-sm);
  }

  .message-error {
    background-color: var(--color-error-light);
    color: var(--color-error);
  }
</style>
