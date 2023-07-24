<script>
	import { animate, stagger, spring } from "motion";
	import Img from "$components/Img.svelte";
	import { onMount } from "svelte";
	export let data;
	const { projects } = data;
	// Set current project
	let currentProjectIndex = 0;
	$: currentProject = projects[currentProjectIndex];
	const changeProjectViaClick = (index) => {
		currentProjectIndex = index;
	};
	const changeProjectViaKeyboard = (e) => {
		switch (e.key) {
			case "ArrowDown" || "s":
				if (currentProjectIndex < projects.length - 1) {
					currentProjectIndex++;
				}
				break;
			case "ArrowUp" || "w":
				if (currentProjectIndex > 0) {
					currentProjectIndex--;
				}
				break;
			default:
				break;
		}
	};

	// Animations
	onMount(() => {
		animate(
			".project-item",
			{ transform: ["translateX(100%)", "translateX(0)"] },
			{ delay: stagger(0.25, { start: 0.4 }) },
			{ easing: spring() }
		);
	});
</script>

<svelte:window on:keydown={(e) => changeProjectViaKeyboard(e)} />
<main class="main">
	<div class="current-project">
		<div class="project-image">
			<Img image={currentProject.project.image} />
			<h2 class="project-title">
				{#if currentProject.project.projectURL}
					<a
						class="project-link"
						href={currentProject.project
							.projectURL}
					>
						{currentProject.project.title}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							viewBox="180.22 180 845.77 840.41"
						>
							<path
								d="m960 960c-0.035156 33.125-26.875 59.98-60 60.035l-658.81 0.37891c-33.117-0.027343-59.988-26.848-60.078-59.965l-0.89453-660.34c-0.046875-33.137 26.781-60.035 59.918-60.082h389.71c16.57 0 30 13.434 30 30 0 16.57-13.43 30-30 30h-389.67l-0.12891 660.12 659.96-0.15234v-390c0-16.57 13.43-30 30-30s30 13.43 30 30zm65.98-750-0.29688 3.3594-0.1875 237.8c0 14.727-10.613 26.977-24.605 29.516l-5.3945 0.48438c-16.566 0-30-13.43-30-30l0.125-164.54-361.98 361.99c-11.715 11.715-30.711 11.715-42.426 0-11.719-11.719-11.719-30.711 0-42.43l366.19-366.18-172.57 0.15625c-16.57 0-30-13.43-30-30s13.43-30 30-30l241.15-0.15625c16.57 0 30 13.43 30 30z"
								fill-rule="evenodd"
							/>
						</svg>
					</a>
				{:else}
					{currentProject.project.title}
				{/if}
			</h2>
		</div>
		<div class="project-subheading">
			<h3>{currentProject.project.type}</h3>
			<h3>
				{currentProject.project.role
					.map((role) => {
						return (
							role
								.charAt(0)
								.toUpperCase() +
							role.slice(1)
						);
					})
					.join(" + ")}
			</h3>
		</div>
		<p class="project-desc">
			{@html currentProject.project.desc}
		</p>
	</div>
	<div class="project-list-wrapper">
		<ul class="project-list">
			{#each projects as projectInfo, i}
				<li class="project-item">
					<button
						on:click={() =>
							changeProjectViaClick(
								i
							)}
					>
						<ul>
							<li>
								{projectInfo
									.project
									.title}
							</li>
							<li>
								{projectInfo.project.year.slice(
									0,
									4
								)}
							</li>
						</ul>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style lang="scss">
	.main {
		display: grid;
		grid-template: 1fr / 1fr 40rem;
		position: relative;
	}
	@media (max-width: 1200px) {
		.main {
			grid-template: 50rem 28rem / 1fr;
			gap: 0;
		}
	}
	.project-list-wrapper {
		position: relative;
		padding-block: 32px;
		padding-left: 64px;
		border-left: 2px solid black;
		overflow-y: auto;
		overflow-x: hidden;
	}
	@media (max-width: 1200px) {
		.project-list-wrapper {
			padding: 32px;
			border-left: none;
			border-top: 2px solid black;
			overscroll-behavior: none;
		}
	}
	.project-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		position: absolute;
		width: 100%;
	}
	.project-item {
		transform: translateX(100%);
		font-family: "Poppins";
		border: 2px solid #000;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-right: 0;
		text-transform: uppercase;
		overflow: hidden;
		transition: 150ms all ease-in;
		&:is(:hover, :focus-visible) {
			box-shadow: 8px 4px 0 2px black;
			translate: -24px;
			transition: 200ms all ease-in;
		}
		> button {
			background-color: #87ff4a;
			cursor: pointer;
			display: inline-block;
			width: 100%;
			padding: 1.5rem 2rem;
			line-height: 1;

			//title
			li:first-child {
				font-size: var(--fs-300);
				font-weight: var(--fw-500);
				margin-bottom: 0.5rem;
			}

			//year
			li:last-child {
				font-size: var(--fs-100);
				font-weight: var(--fw-300);
			}
			li:last-child::before {
				content: "/";
				margin-right: 0.25em;
			}
		}
	}
	//Current Project
	.current-project {
		padding: 32px;
		> p {
			max-width: 60ch;
		}
		container: current-project / size;
	}
	@container current-project (width > 0) {
		.project-image {
			:global(img) {
				height: 66.666cqh;
			}
		}
	}
	@media (width <= 768px) {
		.current-project {
		}
	}
	.project-image {
		width: 100%;
		> :global(img) {
			border-radius: 8px;
			border-bottom-left-radius: 0;
			width: 100%;
			object-fit: cover;
			border: 1px solid black;
		}
		> h2 {
			font-size: var(--fs-100);
			font-weight: var(--fw-500);
			line-height: 1;
			text-transform: uppercase;
			padding: 0.75rem;
			border: 1px solid black;
			border-top: none;
			width: fit-content;
			border-radius: 8px;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			background-color: #87ff4a;
		}
	}
	.project-link {
		display: inline-block;
		> svg {
			display: inline-block;
			aspect-ratio: 1;
			width: 0.815rem;
			line-height: 1;
			margin-left: 0.125rem;
			margin-bottom: -0.025rem;
		}
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	.project-subheading {
		display: flex;
		align-items: start;
		gap: 1em;
		margin-top: 1rem;
		margin-bottom: 1rem;
		> h3 {
			color: black;
			font-size: var(--fs-000);
			line-height: 1;
			padding: 1em;
			border-radius: 8px;
			border: 1px solid black;
			background-color: #f4ff4a;
		}
	}
</style>
