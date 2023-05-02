<script>
</script>

<header class="header">
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
		position: absolute;
		min-height: 100vh;
		min-height: 100dvh;
		width: 100%;
		container: header / size;
	}
	@container header (min-width: 250px) {
		.title {
			font-size: calc(6cqh + 1rem);
		}
	}
	.d {
		position: relative;
		&::after {
			transform: rotate(180deg);
			content: "eveloper + designer";
			font-size: 30%;
			font-weight: 300;
			writing-mode: horizontal-tb;
			text-transform: uppercase;
			white-space: nowrap;
			position: absolute;
			top: 10%;
			right: 82%;
			letter-spacing: 3px;
		}
	}
	.accent {
		color: $accent;
	}

	.main {
		display: flex;
		position: relative;
		justify-content: end;
		align-items: center;
		height: 100vh;
		height: 100dvh;
		padding-block: $main-padding-top;
		padding-inline: $main-padding-left;
	}
	@media (min-width: 800px) {
		.d::after {
			font-size: 35%;
		}
	}
</style>
