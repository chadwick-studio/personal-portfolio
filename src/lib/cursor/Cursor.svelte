<script>
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { tweened } from "svelte/motion";
	import { writable } from "svelte/store";
	import { throttle } from "./throttle.js";

	// SVG Circle Variable Binds
	let r = 24;
	let cx = r;
	let cy = r;
	let viewBox = r * 2;
	let baseFrequency = writable(0);

	const rSize = tweened(r, { duration: 500 });
	//Calc cursor coords
	const coords = { x: -200, y: -200 };
	let { x, y } = coords;
	const getCursorCoords = (e) => {
		x = e.clientX;
		y = e.clientY;
	};

	//Throttle mouseover function
	const throttleCursor = throttle(getCursorCoords, 10);

	//SVG Animation Function
	const handleCursorAnimation = () => {
		const hoverables = document.querySelectorAll(
			".hoverable, a, button"
		);
		hoverables.forEach((hoverable) => {
			hoverable.addEventListener("mouseover", () => {
				baseFrequency = tweened(0.2, { duration: 500 });
				baseFrequency.set(0);
				rSize.set(r / 2);
			});
			hoverable.addEventListener("mouseleave", () => {
				rSize.set(r);
			});
		});
	};
	//Update Cursor in browser
	const updateCursor = () => {
		if (browser) {
			handleCursorAnimation();
		}
	};

	//Update available links when page changes
	$: $page, updateCursor();
</script>

<svelte:document on:mousemove={throttleCursor} />
<div class="cursor-wrapper">
	<svg
		class="cursor"
		width={r}
		height={r}
		viewBox="0 0 {viewBox} {viewBox}"
		style:--xCoords={x}
		style:--yCoords={y}
	>
		<defs>
			<filter
				id="filter"
				x="-50%"
				y="-50%"
				width="200%"
				height="200%"
				filterUnits="objectBoundingBox"
			>
				<feTurbulence
					type="fractalNoise"
					baseFrequency={$baseFrequency}
					numOctaves="3"
					result="warp"
				/>
				<feDisplacementMap
					xChannelSelector="R"
					yChannelSelector="G"
					scale="20"
					in="SourceGraphic"
					in2="warp"
				/>
			</filter>
		</defs>
		<circle class="cursor-circle" {cx} {cy} r={$rSize} />
	</svg>
</div>

<style lang="scss">
	.cursor-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		mix-blend-mode: difference;
		pointer-events: none;
		isolation: isolate;
		z-index: 999999;
	}
	.cursor {
		position: absolute;
		fill: #ffd436;
		filter: url(#filter);
		pointer-events: none;
		transform: translate(-50%, -50%)
			translate3d(
				calc(var(--xCoords) * 1px),
				calc(var(--yCoords) * 1px),
				0px
			);
	}
	@media (hover: none) {
		.cursor-wrapper {
			display: none;
		}
	}
</style>
