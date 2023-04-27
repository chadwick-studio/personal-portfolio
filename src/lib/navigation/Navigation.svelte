<script>
	import { page } from "$app/stores";
	import { gsap } from "gsap";
	// your script goes here
</script>

<nav class="navigation-container">
	<ul class="navigation-list">
		<li class:active={$page.url.pathname === "/"}>
			<a href="/">Home</a>
		</li>
		<li class:active={$page.url.pathname === "/projects"}>
			<a href="/projects">Projects</a>
		</li>
		<li class:active={$page.url.pathname === "/playground"}>
			<a href="/experiments">Playground</a>
		</li>
		<li class:active={$page.url.pathname === "/info"}>
			<a href="/info">Info</a>
		</li>
		<li class:active={$page.url.pathname === "/contact"}>
			<a href="/contact">Contact</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	@font-face {
		font-family: "Yard Sale";
		src: url("/fonts/yard_sale/yardsale.woff2") format("woff2");
	}
	.navigation-container {
		position: fixed;
		bottom: 0;
		right: 0;
	}
	.navigation-list {
		display: flex;
		flex-direction: column;
		font-size: 0.615rem;
		gap: 0.1em;
		font-family: "Yard Sale";
		text-transform: uppercase;
		text-align: right;
		a {
			display: inline-block;
		}
	}
	.active {
		transition: color 200ms;
		color: red;
	}
</style>
