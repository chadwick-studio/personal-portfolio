<script>
	import IconExternalLink from "$components/icons/IconExternalLink.svelte";

	export let title;
	export let link;
	export let node;
</script>

<h2 class="project-title | fit-content">
	{#if link}
		<a
			class="project-link | inline-flex ai-center"
			href={link}
			bind:this={node}
		>
			{title}
			<IconExternalLink --width="1em" />
		</a>
	{:else}
		{title}
	{/if}
</h2>

<style>
	.project-title {
		background-color: var(--secondary);
		padding: 0.5em;
		border: 2px solid black;
		border-left: none;
		border-bottom: none;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.project-link {
		gap: 0.5em;
	}
</style>
