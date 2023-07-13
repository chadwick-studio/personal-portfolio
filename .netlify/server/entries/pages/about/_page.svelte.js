import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.content.svelte-4a96el.svelte-4a96el.svelte-4a96el{font-family:"Poppins";display:grid;grid-template-rows:auto 1fr;height:100%;overflow-y:auto}@media(max-width: 677px){.content.svelte-4a96el.svelte-4a96el.svelte-4a96el{height:auto}}.header.svelte-4a96el.svelte-4a96el.svelte-4a96el{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-4a96el>h1.svelte-4a96el.svelte-4a96el{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-4a96el>p.svelte-4a96el.svelte-4a96el{border:1px solid black;padding:1rem;line-height:1;width:fit-content}@media(max-width: 677px){.header.svelte-4a96el.svelte-4a96el.svelte-4a96el{flex-direction:column}}.main.svelte-4a96el.svelte-4a96el.svelte-4a96el{padding-block:32px;padding-inline:32px;display:flex;justify-content:space-between;align-items:end;gap:2rem}@media(max-width: 767px){.main.svelte-4a96el.svelte-4a96el.svelte-4a96el{overflow-y:visible;flex-wrap:wrap}}section.svelte-4a96el.svelte-4a96el.svelte-4a96el{border:1px solid black;padding:1rem;width:fit-content}section.svelte-4a96el>p.svelte-4a96el+p.svelte-4a96el{margin-top:1rem}p.svelte-4a96el.svelte-4a96el.svelte-4a96el{line-height:1.5;max-width:60ch}a[href="/contact"].svelte-4a96el.svelte-4a96el.svelte-4a96el:is(:hover, :focus-visible){text-decoration-line:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-4a96el"><header class="header svelte-4a96el"><h1 class="svelte-4a96el">About</h1>
		<p class="svelte-4a96el">Who is Chadwick?</p></header>
	<main class="main svelte-4a96el"><section class="svelte-4a96el"><p class="svelte-4a96el">Chadwick Macmillan is a NYC-based web designer
				and developer. Organizing the intersection novel
				design and optimized development, he crafts
				unique, creative websites and applications for
				businesses, artists, and innovators.
			</p>

			<p class="svelte-4a96el">Chadwick places utmost importance on
				interactivity, responsiveness, and accessibility
				in web experiences. His websites include a
				stylish flair that engages visitors.
			</p></section>
		<section class="svelte-4a96el"><a href="/contact" class="svelte-4a96el">Get in touch</a></section></main>
</div>`;
});
export {
  Page as default
};
