<div class="content">
	<header class="header">
		<h1>About</h1>
		<p>Who is Chadwick?</p>
	</header>
	<main class="main">
		<section>
			<p>
				I am a web designer and developer based in NYC
				who uses both minimalist and maximalist
				philosophies to create stunning web experiences.
				It is my job to redefine what is possible for
				front-end design.
			</p>

			<p>
				Responsive web design and accessibility are very
				important to me. A website can look edgy or
				experimental without compromising reponsivity or
				accessibility. Your website will be designed
				with responsive units such as rems, container
				query units, percentages, and more. While mobile
				and desktop web designs may have different goals
				for user experience and interface, a website can
				look great at any size.
			</p>

			<p>
				For accessibility, I use semantic HTML, screen
				reader classes, as well as ARIA technology to
				make sure that any elements are readable for
				screen readers and keyboard users. I also check
				my colors with WebAIM's contrast checker, have
				an option for reduced animations, and more to
				make sure that my website is viewable for
				everyone. If in doubt, I check the Web
				Accessibility Initiative.
			</p>

			<p>
				I use Svelte (JavaScript framework) and Sanity
				Content Management System to create the
				infastructure for your website. I also employ a
				number of technologies to design your website:
				SVG Filters and Animations, GSAP Animation
				Library, as well as Canvas and Three.js to
				create 2D/3D Graphics, respectively. Using all
				of these tools, I construct novel web
				experiences.
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
		height: 100svh;
	}
	@media (max-width: 677px) {
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
		overflow-y: auto;
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
