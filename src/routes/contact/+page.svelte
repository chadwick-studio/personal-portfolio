<script>
	import EmailForm from "$components/email-form/EmailForm.svelte";
</script>

<div class="container">
	<header class="header">
		<h1 class="title">Contact</h1>
		<p class="subtitle">Let's connect!</p>
	</header>
	<main class="main">
		<EmailForm />
	</main>
</div>

<style lang="scss">
	.main {
		padding-inline: $main-padding-left;
	}
</style>
