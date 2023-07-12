import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.content.svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn{height:100vh;font-family:"Poppins";display:grid;grid-template-rows:auto 1fr}.header.svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-1rvxwnn>h1.svelte-1rvxwnn.svelte-1rvxwnn{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-1rvxwnn>p.svelte-1rvxwnn.svelte-1rvxwnn{border:1px solid black;padding:1rem;line-height:1;width:fit-content}@media(max-width: 677px){.header.svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn{flex-direction:column}}.main.svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn{padding-block:32px;padding-inline:32px;overflow-y:auto;display:flex;justify-content:space-between;align-items:end;gap:2rem}@media(max-width: 767px){.main.svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn{overflow-y:visible}}section.svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn{border:1px solid black;padding:1rem;width:fit-content}section.svelte-1rvxwnn>p.svelte-1rvxwnn+p.svelte-1rvxwnn{margin-top:1rem}p.svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn{line-height:1.5;max-width:60ch}a[href="/contact"].svelte-1rvxwnn.svelte-1rvxwnn.svelte-1rvxwnn:is(:hover, :focus-visible){text-decoration-line:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-1rvxwnn"><header class="header svelte-1rvxwnn"><h1 class="svelte-1rvxwnn">About</h1>
		<p class="svelte-1rvxwnn">Who is Chadwick?</p></header>
	<main class="main svelte-1rvxwnn"><section class="svelte-1rvxwnn"><p class="svelte-1rvxwnn">I am a web designer and developer based in NYC
				who uses both minimalist and maximalist
				philosophies to create stunning web experiences.
				It is my job to redefine what is possible for
				front-end design.
			</p>

			<p class="svelte-1rvxwnn">Responsive web design and accessibility are very
				important to me. A website can look edgy or
				experimental without compromising reponsivity or
				accessibility. Your website will be designed
				with responsive units such as rems, container
				query units, percentages, and more. While mobile
				and desktop web designs may have different goals
				for user experience and interface, a website can
				look great at any size.
			</p>

			<p class="svelte-1rvxwnn">For accessibility, I use semantic HTML, screen
				reader classes, as well as ARIA technology to
				make sure that any elements are readable for
				screen readers and keyboard users. I also check
				my colors with WebAIM&#39;s contrast checker, have
				an option for reduced animations, and more to
				make sure that my website is viewable for
				everyone. If in doubt, I check the Web
				Accessibility Initiative.
			</p>

			<p class="svelte-1rvxwnn">I use Svelte (JavaScript framework) and Sanity
				Content Management System to create the
				infastructure for your website. I also employ a
				number of technologies to design your website:
				SVG Filters and Animations, GSAP Animation
				Library, as well as Canvas and Three.js to
				create 2D/3D Graphics, respectively. Using all
				of these tools, I construct novel web
				experiences.
			</p></section>
		<section class="svelte-1rvxwnn"><a href="/contact" class="svelte-1rvxwnn">Get in touch</a></section></main>
</div>`;
});
export {
  Page as default
};
