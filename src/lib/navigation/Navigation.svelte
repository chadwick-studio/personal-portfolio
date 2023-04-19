<nav class="navigation-wrapper">
	<ul class="navigation">
		<li><a href="/projects">Projects</a></li>
		<li><a href="/experiments">Playground</a></li>
		<li><a href="/about">About Me</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	@font-face {
		font-family: "Yard Sale";
		src: url("/fonts/yard_sale/yardsale.woff2") format("woff2");
	}
	.navigation-wrapper {
		position: fixed;
		bottom: 0;
		right: 0;
	}
	.navigation {
		display: flex;
		flex-direction: column;

		font-size: 0.615rem;
		gap: 0.5em;
		font-family: "Yard Sale";
		text-transform: uppercase;
		text-align: right;
		a {
			display: block;
		}
	}
</style>
