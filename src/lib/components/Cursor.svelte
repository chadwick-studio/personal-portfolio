<script>
	// Calculate cursor coords
	const coords = { x: -200, y: -200 };
	let { x, y } = coords;
	const getCursorCoords = (e) => {
		x = e.clientX;
		y = e.clientY;
	};

	let mouseDown = 0;
</script>

<svelte:document
	on:mousemove={getCursorCoords}
	on:mousedown={() => mouseDown++}
	on:mouseup={() => mouseDown--}
/>
<div class="cursor-wrapper">
	<img
		src="/images/pixel_cursor.png"
		alt=""
		class="cursor"
		style="--xCoords:{x}; --yCoords:{y}; --rotate:{mouseDown === 1
			? '-20deg'
			: '0deg'}"
	/>
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
		aspect-ratio: 1;
		width: 64px;
		transform: translate3d(
				calc(var(--xCoords) * 1px - 25px),
				calc(var(--yCoords) * 1px),
				0
			)
			rotateZ(var(--rotate));
	}
	@media (hover: none) {
		.cursor-wrapper {
			display: none;
		}
	}
</style>
