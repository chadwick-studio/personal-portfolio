<div class="container">
	<header class="header">
		<h1 class="title">Projects</h1>
		<div class="subtitle">
			<p>
				enclosed within <br />
				on display <br />
				are projects of <br />
				wonder <br />
				and novelty <br />
			</p>
		</div>
	</header>
	<main class="main projects">
		<div class="projects_type projects_design-develop">
			<h2 class="projects_type_header">Design + Develop</h2>
			<section
				class="project"
				aria-labelledby="amanda-samimi-art-title"
			>
				<img
					src="/images/amanda-samimi_website.png"
					alt="Amanda Samimi Art Gallery Home Page"
				/>
				<h3
					id="amanda-samimi-art-title"
					class="project_info"
				>
					<a
						target="_blank"
						href="https://amanda-samimi-art.netlify.app/"
					>
						2023 // Amanda Samimi Art //
						Portfolio
					</a>
				</h3>
			</section>
			<section class="project" aria-labelledby="hmdb-title">
				<img
					src="/images/hmdb_logo.png"
					alt="Logo for HMdb.org"
				/>
				<h3 id="hmdb-title" class="project_info">
					<a
						target="_blank"
						href="https://chadwick-studio.github.io/hmdb-navbar/"
					>
						2023 // HMdb.org // Logo +
						Header Redesign // Portfolio
					</a>
				</h3>
			</section>
		</div>
		<!-- <div class="projects_type projects_design"> -->
		<!-- 	<h2 class="projects_type_header">Design</h2> -->
		<!-- 	<section class="project"> -->
		<!-- 		<img -->
		<!-- 			src="/images/hmdb_logo.png" -->
		<!-- 			alt="Amanda Samimi Art Gallery Home Page" -->
		<!-- 		/> -->
		<!-- 		<h3 class="project_info"> -->
		<!-- 			<button class="project_link"> -->
		<!-- 				2023 // HMdb.org // Logo + -->
		<!-- 				Header Redesign -->
		<!-- 			</button> -->
		<!-- 		</h3> -->
		<!-- 	</section> -->
		<!-- </div> -->
	</main>
</div>

<style lang="scss">
	// Projects Section
	.main {
		padding-inline: 0;
		--margin: 48px;
		padding-bottom: calc($main-padding-bottom * 4);
	}
	.projects {
		font-family: "Cooper Hewitt";
		text-transform: uppercase;
	}
	.projects_type {
		width: 100%;
		+ .projects_type {
			margin-top: calc(var(--margin) * 2);
		}
	}
	.project_link {
		cursor: pointer;
	}
	.projects_type_header {
		font-weight: 700;
		font-size: clamp(1.125rem, 0.8617rem + 1.2766vw, 1.5rem);
		margin-bottom: calc(var(--margin) * 1.5);
	}
	.project {
		+ .project {
			margin-top: calc(var(--margin) * 1.5);
		}
	}
	img {
		display: block;
		border: 1px solid black;
		width: 80%;
		max-width: 800px;
	}
	.project_info {
		font-weight: 500;
		margin-top: 0.5em;
	}
	// Design + Develop Section
	.projects_design-develop {
		padding-right: $main-padding-right;
		.projects_type_header {
			text-align: right;
			border-bottom: 4px solid black;
		}
		.project {
			display: flex;
			flex-direction: column;
			align-items: end;
			margin-left: $main-padding-left;
			text-align: right;
		}
	}
	// Design Section
	.projects_design {
		padding-left: $main-padding-left;
		.projects_type_header {
			text-align: left;
			border-bottom: 4px solid black;
		}
		.project {
			display: flex;
			flex-direction: column;
			align-items: start;
		}
	}
	a:focus-visible {
		outline: 1px solid black;
		padding: 0.2em;
	}
</style>
