<div class="page | flex">
	<section class="bio">
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
	<section class="btn">
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
</div>

<style lang="scss">
	.page {
		flex-direction: column;
		justify-content: start;
		align-items: start;
		gap: 2rem;
		padding-inline: 1rem;
		padding-block: 2rem;
	}
	@media (min-width: 768px) {
		.page {
			padding-left: 2rem;
		}
	}
	section {
		border: 2px solid black;
		padding: 2rem;
		width: 100%;
		max-width: 70ch;
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
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	a[href="/contact"]:is(:hover, :focus-visible) {
		text-decoration-line: underline;
	}
</style>
