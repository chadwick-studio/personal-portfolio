<script>
	import Header from "$components/Header.svelte";
</script>

<div class="layout | grid">
	<Header />
	<main class="main">
		<slot />
	</main>
</div>

<style lang="scss">
	.layout {
		grid-template: auto 1fr / 1fr;
		overflow-y: auto;
	}
	.main {
		container: main / inline-size;
	}
</style>
