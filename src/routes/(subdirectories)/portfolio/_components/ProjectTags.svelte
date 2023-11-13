<script>
	export let tags;
</script>

<ul role="list">
	{#each tags as tag}
		<li>
			<h3>{tag}</h3>
		</li>
	{/each}
</ul>

<style lang="scss">
	/* your styles go here */
</style>
