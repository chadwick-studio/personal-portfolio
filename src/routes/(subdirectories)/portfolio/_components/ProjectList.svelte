<script>
	import { onMount } from "svelte";
	import ProjectButton from "./ProjectButton.svelte";

	export let projects;

	export let currentProjectIndex = 0;
	let projectList;

	const centerNode = (id, tgt) => {
		const list = projectList;
		const center = list.querySelector(`[data-is-center="${id}"]`);
		if (center === null) return;

		if (tgt) {
			const isCenter = tgt.isEqualNode(center);
			if (!isCenter) {
				let diff = tgt.offsetTop - list.scrollTop;
				list.scrollTop = center.offsetTop - diff;
			}
			list.scrollTo({
				top:
					center.offsetTop -
					(list.clientHeight -
						center.clientHeight) /
						2,
				behavior: "smooth",
			});
		} else {
			list.scrollTop =
				center.offsetTop -
				(list.clientHeight - center.clientHeight) / 2;
		}
	};
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<ul class="project-list | flex" role="list" bind:this={projectList}>
	{#each projects as project, i (project._id)}
		<li class="project-item">
			<ProjectButton
				project={project.project}
				on:click={() => (currentProjectIndex = i)}
			/>
		</li>
	{/each}
</ul>

<style lang="scss">
	.project-list {
		flex-direction: row;
		position: relative;
		overflow: auto;
		height: 100%;
	}
	li {
		+ li {
			border-left: 2px solid black;
		}
	}
	@container main (min-width: 850px) {
		.project-list {
			flex-direction: column;
		}
		li {
			+ li {
				border-left: none;
				border-top: 2px solid black;
			}
			&:last-of-type {
				border-bottom: 2px solid black;
			}
		}
	}
</style>
