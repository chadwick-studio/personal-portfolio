<script>
	import { page } from "$app/stores";
	import gsap from "gsap";

	let circleRadius = 45;

	const initCursor = () => {
		if (typeof document != "undefined") {
			const cursor = document.querySelector(".cursor");
			const hoverables = document.querySelectorAll(
				".hoverable, a, button"
			);
			const turbulence = document.querySelector(
				".cursor feTurbulence"
			);
			const circle = document.querySelector(".cursor-circle");
			const durationTime = 0.5;

			document.addEventListener("mousemove", (e) => {
				cursor.style.transform = `translate(-50%, -50%) translate3d(${e.clientX}px, ${e.clientY}px, 0px)`;
			});

			hoverables.forEach((hoverable) => {
				hoverable.addEventListener("mouseover", () => {
					gsap.to(turbulence, {
						duration: durationTime,
						startAt: {
							attr: {
								baseFrequency: 0.08,
							},
						},
						attr: { baseFrequency: 0 },
					});

					gsap.to(circle, {
						duration: durationTime,
						startAt: {
							attr: {
								r: circleRadius,
							},
						},
						attr: { r: 30 },
					});
				});

				hoverable.addEventListener("mouseout", () => {
					gsap.to(circle, {
						duration: durationTime,
						startAt: { attr: { r: 30 } },
						attr: { r: circleRadius },
					});
				});
			});
		}
	};
	page.subscribe(() => {
		initCursor();
	});
</script>

<div class="cursor-wrapper">
	<svg class="cursor" width="30" height="30" viewBox="0 0 100 100">
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
					baseFrequency="0"
					numOctaves="8"
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
		<circle class="cursor-circle" cx="50" cy="50" r="45" />
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
		transition: 50ms linear;
	}
	@media (hover: none) {
		.cursor-wrapper {
			display: none;
		}
	}
</style>
