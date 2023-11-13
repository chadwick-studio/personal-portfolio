<script>
	import { gsap } from "gsap/dist/gsap";
	import { onMount } from "svelte";
	let title;
	let subtitle;
	let hero;

	onMount(() => {
		let tl = gsap.timeline();
		tl.from(title, {
			x: 100,
			duration: 1,
			autoAlpha: 0,
		}).from(subtitle, {
			x: 100,
			duration: 0.75,
			autoAlpha: 0,
		});
		const mm = gsap.matchMedia();
		const breakPoint = 768;
		mm.add(
			{
				isDesktop: `(min-width: ${breakPoint}px)`,
				isMobile: `(max-width: ${breakPoint - 1}px)`,
			},
			(context) => {
				const { isDesktop, isMobile } =
					context.conditions;

				tl.from(
					hero,
					isDesktop
						? {
								x: 100,
								duration: 0.75,
								autoAlpha: 0,
						  }
						: {
								y: 100,
								duration: 0.75,
								autoAlpha: 0,
						  }
				);
				return () => {};
			}
		);
	});
</script>

<div class="page | flex">
	<header class="header | line-height-1">
		<h1 class="title" bind:this={title}>Chadwick Macmillan</h1>
		<p class="subtitle" bind:this={subtitle}>
			Web Designer + Developer
		</p>
	</header>
	<main class="main">
		<section class="hero | block-flow" bind:this={hero}>
			<p>
				I build fun, creative, and engaging web
				experiences.
			</p>
			<p>
				Inquiring about a project? Send me an email at <a
					href="mailto:chadwick@chadwick.studio"
					>chadwick@chadwick.studio</a
				> or view my contact page :-)
			</p>
		</section>
	</main>
</div>

<style lang="scss">
	.title,
	.subtitle,
	.hero {
		visibility: hidden;
	}
	.page {
		flex-direction: column;
		justify-content: space-between;
		container: page / inline-size;
	}
	.header {
		margin: 1rem;
		white-space: nowrap;
		text-transform: uppercase;
		font-size: calc(12cqi);
		> h1 {
			font-family: "Pilowlava";
			white-space: normal;
			line-height: 1;
		}
		> p {
			font-family: "Poppins";
			font-weight: 300;
			line-height: 1;
			font-size: min(0.5em, 2rem);
			margin-inline-start: 0.125em;
			margin-block-start: 0.5rem;
		}
	}
	.hero {
		align-self: end;
		border-top: 2px solid black;
		padding: 2em;
		width: fit-content;
		margin-left: auto;
		line-height: 1.2;
		&.block-flow {
			--_flow-space: 1em;
		}
	}
	@media (min-width: 953px) {
		.hero {
			border-left: 2px solid black;
		}
	}

	a[href^="mailto"]:is(:hover, :focus-visible) {
		text-decoration-line: underline;
	}
</style>
