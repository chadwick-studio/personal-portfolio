<script>
	import getImageProps from "../utils/img/getImageProps";
	export let image;
	export let loading = "lazy";
	let loaded = false;
</script>

<img
	{loading}
	fetchPriority={loading === "eager" ? "high" : undefined}
	alt={image.alt || " "}
	{...getImageProps({
		image,
	})}
	data-loaded={loaded}
	on:load={() => (loaded = true)}
/>

<style>
	img {
		height: auto;
	}
</style>
