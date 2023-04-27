<script>
	import "../app.scss";
	import Cursor from "$lib/cursor/Cursor.svelte";
	import Navigation from "$lib/navigation/Navigation.svelte";
</script>

<div class="body-container">
	<slot />
	<Navigation />
	<Cursor />
</div>

<style lang="scss">
	.body-container {
		position: relative;
		min-height: 100vh; //browser fallback
		min-height: 100dvh;
		background-color: $main-background;
	}
	:global(.page-title) {
		cursor: default;
	}
	:global(h1) {
		font-family: "Cooper Hewitt";
		font-weight: 900;
		text-transform: uppercase;
		writing-mode: sideways-lr;
		white-space: nowrap;
	}
	:global(.sr-only) {
		border: 0 !important;
		clip: rect(1px, 1px, 1px, 1px) !important;
		-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;
		height: 1px !important;
		margin: -1px !important;
		overflow: hidden !important;
		padding: 0 !important;
		position: absolute !important;
		width: 1px !important;
		white-space: nowrap !important;
	}
</style>
