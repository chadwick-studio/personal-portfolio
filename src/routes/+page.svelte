<script>
</script>

<header class="header home">
	<h1 class="title">
		Cha<span class="d">d</span>wick
		<span class="accent">Macmillan</span>
		<span class="sr-only">Web Developer and Designer</span>
	</h1>
</header>

<style lang="scss">
	.header {
		display: flex;
		align-items: end;
		height: 100vh;
		height: 100dvh;
	}
	.title {
		font-size: calc(5vh + 1rem); // Browser fallback
		font-size: calc(5dvh + 1rem);
	}
	.d {
		position: relative;
		display: inline-block;
		&::after {
			content: "eveloper + designer";
			font-size: 35%;
			font-weight: 300;
			writing-mode: horizontal-tb;
			text-orientation: upright;
			text-transform: uppercase;
			white-space: nowrap;
			position: absolute;
			transform-origin: center;
			transform: rotate(180deg);
			top: 14%;
			right: 93%;
			letter-spacing: 3px;
		}
	}
	.accent {
		color: $accent;
	}
</style>
