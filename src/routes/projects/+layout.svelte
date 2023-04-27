<script>
	// your script goes here
</script>

<div class="body-wrapper">
	<header class="header">
		<h1 class="page-title">Projects</h1>
		<div class="projects-information">
			<p>
				enclosed within <br />
				on display <br />
				are projects of <br />
				wonder <br />
				and novelty <br />
			</p>
		</div>
	</header>
	<main class="main-content">
		<slot />
	</main>
</div>

<style lang="scss">
	.body-wrapper {
		padding-inline: 10%;
	}
	.header {
		display: flex;
		flex-wrap: wrap;
	}
	.main-content {
		margin-top: 15rem;
	}
	.page-title {
		font-size: 4rem;
		line-height: 1;
	}
	.projects-information {
		position: relative;
		font-family: "Sinistre";
		align-self: end;
		font-size: 0.85rem;
		text-align: justify;
		flex: 1 1 40ex;
		right: 1.5%;
	}
</style>
