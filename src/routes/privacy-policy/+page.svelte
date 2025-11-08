<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Privacy Policy - BookDiary</title>
	<meta name="description" content="BookDiary privacy policy" />
</svelte:head>

<div class="container">
	<h1>Privacy Policy for BookDiary</h1>

	<h2>1. Data Collection and Usage</h2>
	<p>
		BookDiary <strong>does not collect personal information</strong> except for login credentials (such as email) and the <strong>user's chosen name</strong> (Name/Nickname) required for authentication using Supabase. This information is <strong>stored securely</strong> and used solely for user identification and account management.
	</p>

	<h2>2. Data Security and Sharing</h2>
	<p>
		No sensitive or financial data is collected. Data is used only for providing the core functionality of the app, such as tracking reading progress and managing your book diary. Your data is <strong>not shared, sold, or rented</strong> to third parties for any reason.
	</p>

	<h2>3. Advertising and Analytics</h2>
	<p>
		We do not use your data for advertising, and we do not engage in deep user tracking or analytics beyond basic app performance monitoring.
	</p>

	<h2>4. User Rights and Data Deletion</h2>
	<p>
		Users have the right to delete their personal data. You can <strong>permanently delete your account and all associated data</strong> (including your reading history and notes) at any time directly <strong>within the application settings</strong>. Once initiated, account deletion is immediate and irreversible.
	</p>

	<h2>5. Contact Information</h2>
	<p>
		If you have questions about this policy, please contact us at: <a href="mailto:gais.davletkildin@gmail.com">gais.davletkildin@gmail.com</a>.
	</p>

	<Footer />
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--spacing-xxl) var(--spacing-md);
	}

	h1 {
		color: var(--color-text);
		font-size: var(--font-size-xxxl);
		border-bottom: 2px solid var(--color-border-light);
		padding-bottom: var(--spacing-md);
		margin-bottom: var(--spacing-lg);
	}

	h2 {
		color: var(--color-primary);
		font-size: var(--font-size-xl);
		margin-top: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
	}

	p {
		margin-bottom: var(--spacing-md);
		line-height: var(--line-height-lg);
	}

	a {
		color: var(--color-primary);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>

