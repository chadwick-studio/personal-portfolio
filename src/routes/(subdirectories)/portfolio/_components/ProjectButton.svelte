<script>
	export let project;
</script>

<button on:click>
	<ul class="project-title" role="list">
		<li>
			<span class="title">{project.title}</span>
		</li>
		<li>
			<span class="year">{project.year.slice(0, 4)}</span>
		</li>
	</ul>
</button>

<style lang="scss">
	button {
		cursor: none;
		padding: 1rem;
		padding-top: 4rem;
		min-width: 100%;
		width: max-content;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	@container main (min-width: 850px) {
		button {
			padding-top: 1rem;
		}
	}
	.title {
		font-size: var(--fs-200);
		font-weight: bold;
	}
	.year::before {
		content: "//";
		font-size: 1.125em;
		margin-right: 0.25em;
	}
	li + li {
		margin-top: 0.5em;
	}
</style>
