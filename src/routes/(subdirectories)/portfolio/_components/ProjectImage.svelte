<script>
	import Img from "$components/Img.svelte";
	export let image;
</script>

<div class="img-wrapper">
	<Img {image} />
</div>

<style lang="scss">
	.img-wrapper {
		aspect-ratio: 16 / 9;
		> :global(img) {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		margin-inline: auto;
	}
</style>
