<main class="main">
	<section>
		<p>
			Chadwick Macmillan is a NYC-based web designer and
			developer. Organizing the intersection of novel design
			and optimized development, he crafts unique, creative
			websites and applications for businesses, artists, and
			innovators.
		</p>

		<p>
			Chadwick places utmost importance on interactivity,
			responsiveness, and accessibility in web experiences.
			His websites include a stylish flair that engages
			visitors.
		</p>
	</section>
	<section>
		<a href="/contact">Get in touch</a>
		<svg
			version="1.1"
			viewBox="0 0 1080 444"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m820 405 38.4 38.4 222-222-222-222-38.4 38.4 156 156h-976v54.3h976z"
				fill-rule="evenodd"
			/>
		</svg>
	</section>
</main>

<style lang="scss">
	.main {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 2rem;
		padding-block: 32px;
		padding-inline: 32px;
	}
	@media (max-width: 767px) {
		.main {
			flex-direction: column;
			justify-content: start;
			align-items: start;
		}
	}
	section {
		border: 1px solid black;
		padding: 1rem;
		width: fit-content;
		> p + p {
			margin-top: 1rem;
		}
		&:last-child {
			svg {
				aspect-ratio: 270 / 111;
				width: 2em;
			}
			display: flex;
			align-items: center;
			gap: 0.5em;
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
