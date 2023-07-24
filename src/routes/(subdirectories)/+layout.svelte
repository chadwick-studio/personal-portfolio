<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { timeline } from "motion";

	onMount(() => {
		const sequence = [
			[
				".title",
				{ y: [24, 0], opacity: [0, 1] },
				{ duration: 0.75 },
				{ easing: "ease-in" },
			],
			[
				".subtitle",
				{ y: [24, 0], opacity: [0, 1] },
				{ duration: 0.5 },
				{ easing: "ease-in" },
			],
		];
		timeline(sequence);
	});
</script>

<div class="content">
	<header class="header">
		<h1 class="title">{$page.data.title}</h1>
		<p class="subtitle">{$page.data.description}</p>
	</header>
	<slot />
</div>

<style lang="scss">
	.content {
		font-family: "Poppins";
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
		overflow-y: auto;
	}
	@media (max-width: 678px) {
		.content {
			height: auto;
		}
	}
	.header {
		display: flex;
		justify-content: space-between;
		position: relative;
		gap: 0.75rem;
		padding: 32px;
		border-bottom: 8px solid black;
		text-transform: uppercase;

		> h1 {
			opacity: 0;
			font-family: "Pilowlava";
			font-size: var(--fs-400);
		}
		> p {
			opacity: 0;
			border: 1px solid black;
			padding: 1rem;
			line-height: 1;
			width: fit-content;
		}
	}
	@media (max-width: 678px) {
		.header {
			flex-direction: column;
		}
	}
</style>
