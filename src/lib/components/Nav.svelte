<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { fly, slide, fade } from "svelte/transition";
	const links = [
		{ name: "Contact", pathname: "/contact" },
		{ name: "About", pathname: "/about" },
		{ name: "Portfolio", pathname: "/portfolio" },
	];
	let isNavVisible = false;
	let navText = "Menu";
	const toggleNav = () => {
		let timer;
		isNavVisible = !isNavVisible;
		if (isNavVisible) {
			navText = "Close";
			clearTimeout(timer);
		} else {
			navText = "Menu";
		}
	};
	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});
</script>

<header class="nav">
	<nav
		id="nav"
		class="nav-wrapper"
		data-visible={isNavVisible}
		aria-label="Main"
	>
		<ul class="nav-links">
			{#each links as link, i}
				{#if isLoaded}
					<li
						transition:fly={{
							duration: 250,
							delay:
								1750 +
								-(i * 200),
							x: -12,
						}}
					>
						<a
							href={link.pathname}
							aria-current={$page.url
								.pathname ===
							link.pathname
								? "page"
								: false}
							on:click={() =>
								toggleNav()}
						>
							{link.name}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
	<button
		class="nav-toggle"
		aria-expanded={isNavVisible}
		aria-controls="nav"
		on:click={() => toggleNav()}
	>
		<span>{navText}</span>
		<svg
			version="1.1"
			width="32px"
			height="32px"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			class="nav-icon"
			title="Menu Icon"
		>
			<g>
				<g class="left-circles">
					<circle cx="6" cy="6" r="4" />
					<circle cx="6" cy="16" r="4" />
					<circle cx="6" cy="26" r="4" />
				</g>
				<g class="center-circles">
					<circle cx="16" cy="6" r="4" />
					<circle cx="16" cy="26" r="4" />
				</g>
				<g class="right-circles">
					<circle cx="26" cy="6" r="4" />
					<circle cx="26" cy="16" r="4" />
					<circle cx="26" cy="26" r="4" />
				</g>
			</g>
		</svg>
	</button>
	{#if isLoaded}
		<a
			transition:fly={{ duration: 500, x: 12, delay: 250 }}
			href="/"
			aria-current={$page.url.pathname === "/"
				? "page"
				: false}
		>
			<h1>Chadwick Macmillan</h1>
		</a>
	{/if}
</header>

<style lang="scss">
	.nav {
		font-family: "Poppins";
		text-transform: uppercase;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: relative;
		border-right: 2px solid #000;
		grid-column: 1 / 2;
		padding-block: 16px;
		h1 {
			font-weight: 700;
		}
		z-index: 20;
	}

	@media (max-width: 767px) {
		.nav {
			transform-style: preserve-3d;
			background-color: var(--main-background);
			flex-direction: row-reverse;
			padding-inline: 16px;
			border-right: none;
			border-bottom: 1px solid #000;
		}
	}
	.nav-toggle {
		display: none;
		align-items: center;
		gap: 4px;
		circle {
			transition: cx 350ms ease-out;
		}
		svg {
			transition: rotate 300ms ease-out;
		}
		&[aria-expanded="true"] {
			svg {
				rotate: 360deg;
				transition: rotate 400ms ease-out;
			}
			:is(.left-circles, .right-circles) {
				:is(circle:first-child, circle:last-child) {
					cx: 16;
					transition: cx 250ms ease-out;
				}
			}
		}
	}
	@media (prefers-reduced-motion) {
		.nav-toggle {
			transition: rotate 100ms ease-out;
			&[aria-expanded="true"] {
				svg {
					rotate: 90deg;
					transition: rotate 150ms ease-out;
				}
			}
		}
	}
	@media (max-width: 767px) {
		.nav-toggle {
			display: flex;
			> span {
				font-size: var(--fs-000);
			}
		}
	}
	a {
		display: inline-block;
		writing-mode: vertical-lr;
		transform: rotate(-180deg);
		line-height: 1;
	}
	@media (max-width: 767px) {
		a {
			writing-mode: horizontal-tb;
			transform: rotate(0);
		}
	}

	.nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.125em;
		a {
			position: relative;
			&::before {
				content: "";
				position: absolute;
				inset: 0 calc(100% + 2px) auto auto;
				width: 1px;
				height: 0;
				background-color: black;
				transition: height 150ms ease-out;
			}
		}
	}
	@media (hover: hover) {
		.nav-links a:is(:hover, :focus-visible)::before {
			transition: height 150ms ease-out;
			width: 1px;
			height: 100%;
		}
	}
	@media (max-width: 767px) {
		.nav-links {
			flex-direction: column-reverse;
			a {
				writing-mode: horizontal-tb;
				transform: rotate(0);
				&::before {
					inset: calc(100% + 2px) auto auto 0;
					width: 0;
					height: 1px;
					background-color: black;
					transition: width 150ms ease-out;
				}
			}
		}
		@media (hover: hover) {
			.nav-links a:is(:hover, :focus-visible)::before {
				transition: width 150ms ease-out;
				width: 100%;
				height: 1px;
			}
		}
	}
	@media (max-width: 767px) {
		.nav-wrapper {
			pointer-events: none;
			background-color: var(--main-background);
			position: absolute;
			top: calc(100% + 1px);
			left: 0;
			width: 100%;
			border-bottom: 2px solid black;
			padding: 16px;
			transform: scaleY(0);
			transform-origin: top;
			transition: transform 300ms ease-out;
			&[data-visible="true"] {
				transform: scaleY(1);
				transition: transform 300ms ease-out;
				pointer-events: auto;
			}
		}
	}
</style>
