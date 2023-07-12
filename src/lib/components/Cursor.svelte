<script>
	import { throttle } from "$utils/throttle.js";

	//Calc cursor coords
	const coords = { x: -200, y: -200 };
	let { x, y } = coords;
	const getCursorCoords = (e) => {
		x = e.clientX;
		y = e.clientY;
	};

	//Throttle mouseover function
	const throttleCursor = throttle(getCursorCoords, 10);
</script>

<svelte:document on:mousemove={throttleCursor} />
<div class="cursor-wrapper">
	<svg
		class="cursor"
		width="12px"
		height="12px"
		style="--xCoords:{x}; --yCoords:{y};"
		version="1.1"
		viewBox="0 0 12 12"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="6" cy="6" r="6" />
	</svg>
</div>

<style lang="scss">
	.cursor-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 9999;
		pointer-events: none;
	}
	.cursor {
		transform: translate(-50%, -50%)
			translate3d(
				calc(var(--xCoords) * 1px),
				calc(var(--yCoords) * 1px),
				0
			);
		transition: transform 100ms ease-out;
	}
	@media (hover: none) {
		.cursor-wrapper {
			display: none;
		}
	}
</style>
