<div class="content">
	<header class="header">
		<h1>About</h1>
		<p>Who is Chadwick?</p>
	</header>
	<main class="main">
		<section>
			<p>
				Chadwick Macmillan is a NYC-based web designer
				and developer. Organizing the intersection novel
				design and optimized development, he crafts
				unique, creative websites and applications for
				businesses, artists, and innovators.
			</p>

			<p>
				Chadwick places utmost importance on
				interactivity, responsiveness, and accessibility
				in web experiences. His websites include a
				stylish flair that engages visitors.
			</p>
		</section>
		<section>
			<a href="/contact">Get in touch</a>
		</section>
	</main>
</div>

<style lang="scss">
	.content {
		font-family: "Poppins";
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
		overflow-y: auto;
	}
	@media (max-width: 677px) {
		.content {
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
			border: 1px solid black;
			padding: 1rem;
			line-height: 1;
			width: fit-content;
		}
	}
	@media (max-width: 677px) {
		.header {
			flex-direction: column;
		}
	}
	.main {
		padding-block: 32px;
		padding-inline: 32px;
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 2rem;
	}
	@media (max-width: 767px) {
		.main {
			overflow-y: visible;
			flex-wrap: wrap;
		}
	}
	section {
		border: 1px solid black;
		padding: 1rem;
		width: fit-content;
		> p + p {
			margin-top: 1rem;
		}
	}
	p {
		line-height: 1.5;
		max-width: 60ch;
	}
	a[href="/contact"]:is(:hover, :focus-visible) {
		text-decoration-line: underline;
	}
</style>
