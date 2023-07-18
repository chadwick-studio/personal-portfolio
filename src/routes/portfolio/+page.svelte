<script>
	import { projects } from "$lib/projects/projects.js";
	import { blur, fly } from "svelte/transition";
	import { circOut } from "svelte/easing";

	// Sort projects by year
	projects.sort((a, b) => {
		return b.year - a.year;
	});

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
</script>

<svelte:window on:keydown={(e) => changeProjectViaKeyboard(e)} />

<div class="content">
	<header class="header">
		<h1>Portfolio</h1>
		<p>Checkout his projects!</p>
	</header>
	<main class="main">
		<div class="current-project-container">
			{#key currentProject}
				<div
					in:fly={{
						x: -1000,
						duration: 1000,
						easing: circOut,
					}}
					class="current-project"
				>
					<div class="project-image">
						<div class="img-wrapper">
							<img
								src={currentProject.src}
								alt={currentProject.alt}
							/>
						</div>
						{#if currentProject.link}
							<h2>
								<a
									href={currentProject.link}
								>
									{currentProject.title}
								</a>
							</h2>
						{:else}
							<h2>
								{currentProject.title}
							</h2>
						{/if}
					</div>
					<div class="project-subheading">
						<h3>{currentProject.type}</h3>
						<h3>{currentProject.role}</h3>
					</div>
					<p>
						{@html currentProject.description}
					</p>
				</div>
			{/key}
		</div>
		<div class="project-list-wrapper">
			<ul class="project-list">
				{#each projects as project, i}
					<li class="project-item">
						<button
							on:click={() =>
								changeProjectViaClick(
									i
								)}
							style:background-color={currentProject ===
							project
								? "#87ff4a"
								: "transparent"}
						>
							<ul>
								<li>
									{project.title}
								</li>
								<li>
									{project.year}
								</li>
							</ul>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</main>
</div>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
	:root {
		--padding-left: 2rem;
		--hover-animation: all 100ms ease-out;
		--blue: #0f00ff;
	}
	.content {
		font-family: "Poppins";
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
		overflow-y: auto;
		overflow-x: auto;
	}
	@media (max-width: 904px) {
		.content {
			overflow-y: auto;
			height: auto;
		}
	}

	.header {
		display: flex;
		justify-content: space-between;
		position: relative;
		gap: 0.75rem;
		padding: 32px;
		border-bottom: 8px solid black;
		text-transform: uppercase;
		> h1 {
			font-family: "Pilowlava";
			font-size: var(--fs-400);
		}
		> p {
			width: fit-content;
			border: 1px solid black;
			padding: 16px;
			line-height: 1;
		}
	}
	@media (max-width: 680px) {
		.header {
			flex-direction: column;
		}
	}
	.main {
		display: grid;
		grid-template: 1fr / 1fr 40rem;
		gap: 4rem;
		position: relative;
	}
	@media (max-width: 1200px) {
		.main {
			grid-template: 1fr 28rem / 1fr;
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
			padding: 16px;
			overflow-x: auto;
			overflow-y: hidden;
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
		width: 110%;
	}
	@media (max-width: 1200px) {
		.project-list {
			flex-direction: row;
			gap: 32px;
			width: auto;
			height: 110%;
			transform: translateY(20px);
		}
	}
	.project-item {
		border: 2px solid #000;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-right: 0;
		text-transform: uppercase;
		font-family: "Poppins";
		transition: var(--hover-animation);
		overflow: hidden;
		&:is(:hover, :focus-visible) {
			box-shadow: 8px 4px 0 2px black;
			transform: translateX(-24px);
			transition: var(--hover-animation);
		}
		> button {
			transition: background-color 100ms ease-in;
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
	@media (max-width: 1200px) {
		.project-item {
			border: 2px solid black;
			border-radius: 20px;
			rotate: 20deg;
			&:is(:hover, :focus-visible) {
				box-shadow: 8px 4px 0 2px black;
				transform: translateY(-16px);
				transition: var(--hover-animation);
			}
			> button {
				display: flex;
				justify-content: center;
				align-items: start;
				width: 100%;
				height: 100%;
				ul {
					display: flex;
				}
				li {
					width: max-content;
					transform: rotate(-180deg);
					writing-mode: vertical-lr;
				}
				li:first-child {
					font-size: var(--fs-100);
					margin-bottom: 0;
					margin-block-start: 0.5rem;
				}
				//year
				li:last-child {
					font-size: var(--fs-100);
				}
				li:last-child::before {
					content: "/";
					margin-right: 0.25em;
				}
			}
		}
	}
	//Current Project
	.current-project {
		display: grid;
		grid-template-rows: 1fr auto auto;
		border: 2px solid black;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		border-left: none;
		padding-left: 128px;
		padding-right: 64px;
		padding-block: 32px;
		margin-block: 32px;
		> p {
			max-width: 60ch;
		}
	}
	@media (max-width: 1200px) {
		.current-project {
			border: none;
			padding-inline: 16px;
			margin: 0;
		}
	}
	.project-image {
		display: grid;
		grid-template-rows: 1fr auto;
		position: relative;
		height: 100%;
		> .img-wrapper {
			width: 100%;
			height: 40vh;
			overflow: hidden;
			border: 1px solid black;
			border-radius: 20px;
			border-bottom-left-radius: 0;
			> img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
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
			> a {
				&::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.project-subheading {
		align-self: start;
		display: flex;
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
