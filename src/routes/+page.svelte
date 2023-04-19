<script>
	import Navigation from "$lib/navigation/Navigation.svelte";
</script>

<div class="body-wrapper">
	<div class="primary-content-wrapper">
		<header class="header">
			<h1 class="page-title">
				Chadwi<span class="c">c</span>k
				<span class="accent">Macmillan</span>
				<span class="sr-only">Creative Developer</span>
			</h1>
		</header>
	</div>
	<main />
	<Navigation />
</div>

<style lang="scss">
	.primary-content-wrapper {
		position: relative;
	}
	.header {
		display: flex;
		align-items: end;
		position: absolute;
		min-height: 100vh;
		min-height: 100dvh;
		width: 100%;
		container: header / size;
	}
	.body-wrapper {
		padding-inline: 10%;
	}
	.page-title {
		padding-bottom: 0.5rem;
		line-height: 1;
		letter-spacing: 1px;
		position: absolute;
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
		color: purple;
	}
	@container header (width > 250px) {
		h1 {
			font-size: calc(5cqh + 1rem);
		}
	}
	:global(.navigation-wrapper) {
		margin-right: 10%;
		margin-bottom: 0.25rem;
	}
</style>
