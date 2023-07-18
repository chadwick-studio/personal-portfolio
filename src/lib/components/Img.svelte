<script>
	import { onMount } from "svelte";

	export let src;
	export let alt;
	let img;
	let isLoaded = false;
	onMount(() => {
		if (img.complete) {
			isLoaded = true;
		}
	});
</script>

<img
	bind:this={img}
	{src}
	{alt}
	data-loaded={isLoaded}
	on:load={() => (isLoaded = true)}
/>

<style lang="scss">
	img {
		transition: 200ms opacity ease-in;
		object-fit: cover;
		&[data-loaded="false"] {
			opacity: 0;
		}
	}
</style>

