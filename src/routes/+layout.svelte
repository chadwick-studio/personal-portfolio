<script>
	import "../app.scss";
	import Nav from "$components/Nav.svelte";
	import Cursor from "$components/Cursor.svelte";
	let resizeTimer;
	let areAnimationsStopped = false;
	const handleResize = () => {
		areAnimationsStopped = true;
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			areAnimationsStopped = false;
		}, 400);
	};
</script>

<svelte:window on:resize={handleResize} />
<div
	class:resize-animation-stopper={areAnimationsStopped}
	class="layout | grid relative isolate"
>
	<Nav />
	<slot />
</div>
<Cursor />

<style lang="scss">
	:global(*) {
		cursor: none;
	}
	.resize-animation-stopper :global(*) {
		animation: none !important;
		transition: none !important;
	}
	.layout {
		font-family: "Poppins", system-ui, -apple-system,
			BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
			Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		grid-template: auto 1fr / 1fr;
		height: 100vh;
		z-index: 1;
		background-color: var(--bg-primary);
	}
	@media (min-width: 768px) {
		.layout {
			grid-template: 1fr / auto 1fr;
		}
	}
</style>
