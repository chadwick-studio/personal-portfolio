<script>
	import "../app.scss";
	import Nav from "$components/Nav.svelte";
	import Cursor from "$components/Cursor.svelte";
	import { onMount } from "svelte";
</script>

<div class="page-layout">
	<Nav />
	<slot />
</div>
<Cursor />

<style lang="scss">
	.page-layout {
		display: grid;
		grid-template: 1fr / 3rem 1fr;
		height: 100svh;
		position: relative;
		z-index: 1;
		isolation: isolate;
		overflow: hidden;
	}
	@media (max-width: 767px) {
		.page-layout {
			grid-template: 3rem 1fr / 1fr;
		}
	}
	:global(body) {
		background-color: var(--main-background);
	}
</style>
