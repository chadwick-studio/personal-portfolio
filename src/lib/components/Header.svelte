<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	let title;
	let subtitle;
</script>

<header class="header">
	<div class="header-content | flex flex-wrap relative uppercase">
		<h1 class="title | line-height-1" bind:this={title}>
			{$page.data.title}
		</h1>
		<p class="subtitle | line-height-1" bind:this={subtitle}>
			{$page.data.description}
		</p>
	</div>
</header>

<style lang="scss">
	.header {
		border-bottom: 2px solid black;
	}
	.header-content {
		width: 100%;
		padding-inline: 1rem;
		padding-block: 2rem;
	}
	.title {
		font-family: "Pilowlava";
		font-size: var(--fs-400);
	}
	.subtitle {
		display: none;
	}
	@media (min-width: 768px) {
		.header-content {
			padding-left: 2rem;
		}
		.subtitle {
			border: 2px solid black;
			padding: 1rem;
			width: fit-content;
		}
	}
</style>
