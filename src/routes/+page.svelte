<script>
	import Nav from "$components/Nav.svelte";
</script>

<div class="content">
	<header class="header">
		<h1>Chadwick Macmillan</h1>
		<p>Web Designer + Developer</p>
	</header>
	<main class="main">
		<section class="hero">
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
		<section>
			<p />
		</section>
	</main>
</div>

<style lang="scss">
	.content {
		font-family: "Poppins";
		display: grid;
		grid-template-rows: auto 1fr;
		margin: 16px;
	}
	.header {
		line-height: 1;
		white-space: nowrap;
		text-transform: uppercase;
		> h1 {
			font-family: "Pilowlava";
			font-size: clamp(
				var(--fs-400),
				-0.4399rem + 6.9141vw,
				var(--fs-700)
			); // 650px to 1400px
		}
		> p {
			font-family: "Poppins";
			font-weight: 300;
			font-size: clamp(
				var(--fs-100),
				0.3266rem + 1.6576vw,
				var(--fs-300)
			); // 650px to 1400px
		}
	}
	.main {
		margin-top: auto;
	}
	@media (max-width: 767px) {
		.header {
			white-space: normal;
		}
	}
	.hero {
		border: 1px solid black;
		padding: 0.5rem;
		width: fit-content;
	}
	[href^="mailto"]:is(:hover, :focus-visible) {
		text-decoration-line: underline;
	}
	p + p {
		margin-top: 1rem;
	}
</style>
