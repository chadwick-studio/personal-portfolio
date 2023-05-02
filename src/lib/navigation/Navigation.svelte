<script>
	import { page } from "$app/stores";
	import gsap from "gsap";
	import { sineIn, sineOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	import { onMount } from "svelte";
	export let duration;

	let menuIsVisible = false;
	const routeLinks = [
		["/", "Home"],
		["/projects", "Projects"],
		["/playground", "Playground"],
		["/info", "Info"],
		["/contact", "Contact"],
	];

	const menuTween = tweened(1, {
		duration: duration,
		easing: sineOut,
	});
	const toggleMenu = () => {
		menuIsVisible = !menuIsVisible;
		menuIsVisible
			? menuTween.set(0)
			: menuTween.set(1, {
					duration: duration,
					easing: sineIn,
			  });
	};

	onMount(() => {
		//Circles
		const topRightCircle = document.querySelector(".top-right");
		const topLeftCircle = document.querySelector(".top-left");
		const bottomRightCircle =
			document.querySelector(".bottom-right");
		const bottomLeftCircle = document.querySelector(".bottom-left");
		const leftCircles = [topLeftCircle, bottomLeftCircle];
		const rightCircles = [topRightCircle, bottomRightCircle];
		function changeCirclePosition(leftCircles, rightCircles) {
			const allCircles = [...leftCircles, ...rightCircles];
			if (menuIsVisible) {
				for (let circle of allCircles) {
					gsap.to(circle, {
						duration: 0.25,
						attr: { cx: 18 },
					});
				}
			} else {
				for (let circle of leftCircles) {
					gsap.to(circle, {
						duration: 0.25,
						attr: { cx: 5 },
					});
				}
				for (let circle of rightCircles) {
					gsap.to(circle, {
						duration: 0.25,
						attr: { cx: 31 },
					});
				}
			}
		}
		const menuToggle = document.querySelector(
			".menu_toggle-button"
		);
		const links = document.querySelectorAll("a");

		links.forEach((link) => {
			link.addEventListener("click", () => {
				toggleMenu();
				changeCirclePosition(leftCircles, rightCircles);
			});
		});

		menuToggle.addEventListener("click", () => {
			const turbulence = document.querySelector(
				".menu-icon feTurbulence"
			);
			const turbulenceDuration = 1.3;

			//Change Turbulence
			gsap.to(turbulence, {
				duration: turbulenceDuration,
				startAt: {
					attr: {
						baseFrequency: "0.08 0.03",
					},
				},
				attr: { baseFrequency: 0 },
			});

			//Change Circle
			changeCirclePosition(leftCircles, rightCircles);
		});
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && menuIsVisible) {
				toggleMenu();
				changeCirclePosition(leftCircles, rightCircles);
			}
		});
	});
</script>

<div class="menu_container">
	<button
		class="menu_toggle-button"
		aria-expanded={menuIsVisible}
		aria-controls="navigation"
		on:click={toggleMenu}
	>
		<span class="sr-only">Menu</span>
		<svg
			version="1.1"
			width="100%"
			height="100%"
			viewbox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
			class="menu-icon"
			title="Menu Icon"
		>
			<filter
				id="menu-filter"
				x="-50%"
				y="-50%"
				width="200%"
				height="200%"
				filterUnits="objectBoundingBox"
			>
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0"
					result="noise"
					numOctaves="4"
					seed="10"
				/>
				<feDisplacementMap
					in="SourceGraphic"
					in2="noise"
					scale="20"
					xChannelSelector="G"
					yChannelSelector="R"
				/>
			</filter>
			<g
				filter="url(#menu-filter)"
				class="menu-icon_circles"
				transform="translate(7, 7)"
				fill="currentColor"
			>
				<g>
					<!-- Left -->
					<circle
						class="top-left"
						cx="5"
						cy="5"
						r="5"
					/>
					<circle cx="5" cy="18" r="5" />
					<circle
						class="bottom-left"
						cx="5"
						cy="31"
						r="5"
					/>
				</g>
				<g>
					<!-- Middle -->
					<circle cx="18" cy="5" r="5" />
					<circle cx="18" cy="31" r="5" />
				</g>
				<g>
					<!-- Right -->
					<circle
						class="top-right"
						cx="31"
						cy="5"
						r="5"
					/>
					<circle cx="31" cy="18" r="5" />
					<circle
						class="bottom-right"
						cx="31"
						cy="31"
						r="5"
					/>
				</g>
			</g>
		</svg>
	</button>
	<nav class="menu_navigation" style:--translateX={$menuTween}>
		<ul id="navigation" class="navigation-list">
			{#each routeLinks as link}
				<li
					class:active={$page.url.pathname ===
						link[0]}
				>
					<a href={link[0]}>{link[1]}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style lang="scss">
	@font-face {
		font-family: "Yard Sale";
		src: url("/fonts/yard_sale/yardsale.woff2") format("woff2");
	}
	.menu_toggle-button {
		&,
		svg {
			display: block;
		}
		aspect-ratio: 1;
		width: 3rem;
		position: fixed;
		z-index: 10;
		bottom: $main-padding-bottom;
		right: $main-padding-right;
		mix-blend-mode: difference;
		&:focus-visible {
			outline: 1px solid black;
			background-color: $accent;
		}
	}
	.menu-icon_circles {
		fill: $main-background;
	}
	.menu_navigation {
		display: flex;
		flex-direction: column;
		justify-content: end;
		position: fixed;
		bottom: 0;
		right: 0;
		height: 100vh;
		height: 100vh;
		border-left: 2px solid black;
		background-color: $main-background;
		transform: translate3d(calc(var(--translateX) * 100%), 0, 0);
	}
	.navigation-list {
		display: flex;
		color: black;
		flex-direction: column;
		font-size: 0.615rem;
		font-family: "Yard Sale";
		text-transform: uppercase;
		text-align: right;
		margin-bottom: calc($main-padding-bottom * 4);
		margin-inline: $main-padding-right;
		a {
			display: inline-block;
			position: relative;
			&::before {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				right: -0.8em;
				width: 0.25em;
				height: 0%;
				transition: height 150ms;
				background-color: $accent;
			}
			&:active {
				top: 1px;
			}
			&:hover,
			&:focus-visible {
				&::before {
					height: 80%;
					transition: height 250ms;
				}
			}
		}
	}
	li.active {
		color: $accent;
		transition: color 100ms;
	}
</style>
