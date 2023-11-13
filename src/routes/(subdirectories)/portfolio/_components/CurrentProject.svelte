<script>
	import ProjectImage from "./ProjectImage.svelte";
	import ProjectTitle from "./ProjectTitle.svelte";
	import ProjectTags from "./ProjectTags.svelte";
	import ProjectDescription from "./ProjectDescription.svelte";
	import { onMount } from "svelte";

	export let currentProject;
	let projectLink;

	const handleClick = (e) => {
		if (projectLink) {
			projectLink.click();
		}
	};
</script>

<div class="container">
	<div class="project-image-container" on:click={handleClick}>
		<ProjectImage image={currentProject.project.image} />
		<ProjectTitle
			bind:node={projectLink}
			title={currentProject.project.title}
			link={currentProject.project.projectURL}
		/>
	</div>
	<!-- <ProjectTags tags={["test", "test"]} /> -->
	<!-- <ProjectDescription description={currentProject.project.desc} /> -->
</div>

<style lang="scss">
	.project-image-container {
		position: relative;
	}
	@container main (min-width: 850px) {
		.project-image-container {
			border-bottom: 2px solid black;
		}
	}
</style>
