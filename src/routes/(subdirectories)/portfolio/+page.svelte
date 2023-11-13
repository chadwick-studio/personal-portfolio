<script>
	import CurrentProject from "./_components/CurrentProject.svelte";
	import ProjectList from "./_components/ProjectList.svelte";

	export let data;

	const { projects } = data;

	let currentProjectIndex = 0;
	$: currentProject = projects[currentProjectIndex];
</script>

<div class="page">
	<section class="current-project-container">
		<CurrentProject {currentProject} />
	</section>
	<section class="project-list-container">
		<ProjectList bind:currentProjectIndex {projects} />
	</section>
</div>

<style lang="scss">
	.page {
		display: grid;
		grid-template: auto 1fr / 1fr;
		position: relative;
		height: 100%;
	}
	.project-list-container {
		border-top: 2px solid black;
		border-bottom: 2px solid black;
		overflow: hidden;
	}
	@container main (min-width: 850px) {
		.page {
			grid-template: 1fr / 1fr min(50rem, 40%);
		}
		.project-list-container {
			border: none;
			border-left: 2px solid black;
		}
	}
</style>
