<script>
	/* blur before moving onto next photo */
	import Nav from "$components/Nav.svelte";
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
	let projects = [
		{
			title: "Amanda Samimi Art",
			type: "Portfolio",
			role: "Design + Development",
			year: "2023",
			description:
				"Virtual painting gallery for the artist Amanda Samimi.",
			src: "/images/amanda-samimi-website.png",
			alt: "Test",
		},
		{
			title: "Historical Marker Database",
			type: "Logo Rebranding + Header Redesign",
			role: "Design",
			year: "2023",
			description:
				"Reconceptualization of <abbr title='Historical Marker Database'>HMdb</abbr>'s logo and redesign of website's header to be more user friendly and accessible.",
			src: "/images/hmdb-logo.png",
			alt: "The Historical Marker Database logo. It contains the acronym 'HMDB', with a silhouette of a historical marker placed above the ascendor of the letter H.",
		},
		{
			title: "-ette Magazine",
			type: "CSS Code Refactor",
			role: "Development",
			year: "2023",
			description:
				"Refactor of CSS code for -ette literary magazine. Organized code into modules, and utilized new CSS features like grid and logical properties to make layouts easier to work with.",
			src: "/images/ette-review-refactor.png",
			alt: "Test",
		},
	];

	projects.sort((a, b) => {
		return b.year - a.year;
	});
</script>

<svelte:window on:keydown={(e) => changeProjectViaKeyboard(e)} />

<div class="content">
	<header class="header">
		<h1>Portfolio</h1>
		<p>Checkout the projects I've done!</p>
	</header>
	<main class="main">
		<div class="current-project">
			<img
				src={currentProject.src}
				alt={currentProject.alt}
			/>
			<h2>{currentProject.title}</h2>
			<div class="project-subheading">
				<h3>{currentProject.type}</h3>
				<h3>{currentProject.role}</h3>
			</div>
			<p>{@html currentProject.description}</p>
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
								? "#f4ff4a"
								: "#ff4a9e"}
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
		height: 100svh;
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
		grid-template: 1fr / 3fr 2fr;
		gap: 4rem;
		position: relative;
	}
	@media (max-width: 904px) {
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
	@media (max-width: 904px) {
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
	@media (max-width: 904px) {
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
	@media (max-width: 904px) {
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
	.current-project {
		border: 2px solid black;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		border-left: none;
		padding-left: 128px;
		padding-right: 64px;
		margin-block: 32px;
		padding-block: 32px;
	}
	@media (max-width: 904px) {
		.current-project {
			border: none;
			padding-inline: 16px;
			margin: 0;
		}
	}
	img {
		width: 100%;
		height: 300px;
		overflow: hidden;
		object-fit: cover;
		border: 1px solid black;
		border-radius: 20px;
		border-bottom-left-radius: 0;
	}
	h2 {
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
	}
	p {
		max-width: 60ch;
	}
	.project-subheading {
		display: flex;
		gap: 1em;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		> h3 {
			background-color: #87ff4a;
			color: black;
			font-size: var(--fs-000);
			line-height: 1;
			padding: 1em;
			border-radius: 8px;
			border: 1px solid black;
		}
		> h3:first-child {
			background-color: #664aff;
		}
	}
</style>
