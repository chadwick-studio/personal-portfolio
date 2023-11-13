<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

	const links = [
		{ name: "Portfolio", pathname: "/portfolio" },
		{ name: "About", pathname: "/about" },
		{ name: "Contact", pathname: "/contact" },
	];

	let isNavVisible = true;

	const toggleNav = () => {
		isNavVisible = !isNavVisible;
	};

	let height;
	let isMobile = false;

	onMount(() => {
		let mql = window.matchMedia("(min-width: 768px)");
		if (mql.matches) {
			isMobile = false;
			isNavVisible = true;
			console.log("Higher than 768px");
		} else {
			isMobile = true;
			console.log("Lower than 768px");
		}
		mql.addEventListener("change", (e) => {
			if (e.matches) {
				isMobile = false;
				isNavVisible = true;
				console.log("Higher than 768px");
			} else {
				isMobile = true;
				console.log("Lower than 768px");
			}
		});
	});
</script>

<header
	class="nav-container"
	bind:clientHeight={height}
	style:--nav-height={height + "px"}
>
	<div class="nav-content | inline-flex uppercase">
		{#if isNavVisible}
			<nav
				id="nav-links-container"
				class="nav-links-container"
				aria-label="Main"
				style:visibility={isNavVisible
					? "visible"
					: "hidden"}
				in:slide={{
					duration: isMobile ? 400 : 0,
				}}
				out:slide={{
					duration: isMobile ? 300 : 0,
				}}
			>
				<ul class="nav-links | flex">
					{#each links as link}
						<li>
							<a
								class="nav-link | inline-flex"
								href={link.pathname}
								aria-current={$page
									.url
									.pathname ===
								link.pathname
									? "page"
									: false}
								on:click={toggleNav}
							>
								<span
									>{link.name}</span
								>
								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="262.75 285.12 652.15 652.13"
									width="1em"
									height="1em"
								>
									<g>
										<path
											d="m411.07 348.1h396.43l-544.74 544.43 44.711 44.711 544.43-544.74v396.43h62.977v-503.81h-503.81z"
										/>
									</g>
								</svg>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
		<button
			class="nav-toggler | inline-flex"
			aria-expanded={isNavVisible}
			aria-controls="nav"
			on:click={() => toggleNav()}
		>
			<span>{isNavVisible ? "Close" : "Menu"}</span>
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
						<circle
							cx="6"
							cy={isNavVisible
								? 16
								: 6}
							r="4"
						/>
						<circle cx="6" cy="16" r="4" />
						<circle
							cx="6"
							cy={isNavVisible
								? 16
								: 26}
							r="4"
						/>
					</g>
					<g class="center-circles">
						<circle cx="16" cy="6" r="4" />
						<circle cx="16" cy="26" r="4" />
					</g>
					<g class="right-circles">
						<circle
							cx="26"
							cy={isNavVisible
								? 16
								: 6}
							r="4"
						/>
						<circle cx="26" cy="16" r="4" />
						<circle
							cx="26"
							cy={isNavVisible
								? 16
								: 26}
							r="4"
						/>
					</g>
				</g>
			</svg>
		</button>
		<a
			class="home-link"
			href="/"
			aria-current={$page.url.pathname === "/"
				? "page"
				: false}
		>
			<h1>Chadwick Macmillan</h1>
		</a>
	</div>
</header>

<style lang="scss">
	h1 {
		font-weight: bold;
	}
	@media (min-width: 768px) {
		.home-link {
			writing-mode: vertical-lr;
			rotate: -180deg;
			white-space: nowrap;
		}
	}
	.nav-container {
		border-bottom: 2px solid black;
		z-index: 100;
		position: relative;
	}
	@media (min-width: 768px) {
		.nav-container {
			border-bottom: none;
			border-right: 2px solid black;
		}
	}

	.nav-content {
		width: 100%;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	@media (min-width: 768px) {
		.nav-content {
			padding-block: 1rem;
			height: 100%;
			flex-direction: column;
		}
	}

	.nav-toggler {
		align-items: center;
		gap: 0.25rem;
		svg {
			transition: rotate 300ms ease-out;
		}
		&[aria-expanded="true"] {
			svg {
				rotate: 360deg;
				transition: rotate 400ms ease-out;
			}
		}
	}
	@media (prefers-reduced-motion) {
		.nav-toggler {
			transition: rotate 100ms ease-out;
			&[aria-expanded="true"] {
				svg {
					rotate: 90deg;
					transition: rotate 150ms ease-out;
				}
			}
		}
	}
	@media (min-width: 768px) {
		.nav-toggler {
			display: none;
		}
	}
	.nav-links-container {
		display: flex;
		flex-direction: column;
		justify-content: end;
		position: absolute;
		top: calc(100% + 2px);
		left: 0;
		width: 100%;
		height: calc(100vh - var(--nav-height) - 2px);
		background-color: var(--bg-primary);
		padding-inline: 1rem;
		padding-block: 1rem;
		border-bottom: 2px solid black;
		visibility: hidden;
	}

	@media (min-width: 768px) {
		.nav-links-container {
			justify-content: start;
			position: static;
			height: 100%;
			padding: 0;
			border-bottom: none;
			visibility: visible;
		}
	}
	.nav-links {
		flex-direction: column;
		li + li {
			margin-top: 2em;
		}
	}
	@media (min-width: 768px) {
		.nav-links {
			flex-direction: column-reverse;
			align-items: center;
			li + li {
				margin: 0;
			}
		}
	}
	.nav-link {
		font-size: var(--fs-300);
		align-items: end;
		font-weight: bold;
		gap: 0.75em;
		> span {
			line-height: 0.8;
		}
	}
	@media (min-width: 768px) {
		.nav-link {
			font-size: 1rem;
			font-weight: normal;
			writing-mode: vertical-lr;
			rotate: -180deg;
			position: relative;
			&[aria-current="page"]::before {
				height: 100%;
			}

			&::before {
				content: "";
				width: 1px;
				height: 0;
				background-color: black;
				position: absolute;
				top: 0;
				right: calc(100% + 0.25em);
				transition: 150ms ease;
			}
			&:hover::before {
				height: 100%;
				transition: 200ms ease;
			}
		}
	}
</style>
