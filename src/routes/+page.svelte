<script>
	import Navigation from "$lib/navigation/Navigation.svelte";
</script>

<div class="primary-content">
	<header class="header">
		<h1 class="page-title">
			Chadwi<span class="c">c</span>k
			<span class="accent">Macmillan</span>
			<span class="sr-only">Creative Developer</span>
		</h1>
	</header>
</div>

<style lang="scss">
	.header {
		display: flex;
		align-items: end;
		position: absolute;
		min-height: 100vh;
		min-height: 100dvh;
		width: 100%;
		padding-inline: 10%;
		container: header / size;
	}

	.page-title {
		padding-bottom: 0.5rem;
		line-height: 1;
		letter-spacing: 1px;
		position: relative;
		.c {
			position: relative;
			&::after {
				content: "reative developer";
				font-family: "Nacelle Ultra Light";
				font-size: 35%;
				writing-mode: horizontal-tb;
				text-transform: uppercase;
				white-space: nowrap;
				position: absolute;
				bottom: 10%;
				left: 83%;
				letter-spacing: 3.8px;
			}
		}
	}

	.accent {
		color: $accent;
	}

	@container header (width > 250px) {
		h1 {
			font-size: calc(5cqh + 1rem);
		}
	}
</style>
