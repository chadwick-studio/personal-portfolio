import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.content.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{font-family:"Poppins";display:grid;grid-template-rows:auto 1fr;height:100%;overflow-y:auto}@media(max-width: 677px){.content.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{height:auto}}.header.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-7rxph4>h1.svelte-7rxph4.svelte-7rxph4{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-7rxph4>p.svelte-7rxph4.svelte-7rxph4{border:1px solid black;padding:1rem;line-height:1;width:fit-content}@media(max-width: 678px){.header.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{flex-direction:column}}.main.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{padding-block:32px;padding-inline:32px;display:flex;justify-content:space-between;align-items:end;gap:2rem}@media(max-width: 767px){.main.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{overflow-y:visible;flex-direction:column;justify-content:start;align-items:start}}section.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{border:1px solid black;padding:1rem;width:fit-content}section.svelte-7rxph4>p.svelte-7rxph4+p.svelte-7rxph4{margin-top:1rem}section.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4:last-child{display:flex;align-items:center;gap:0.5em}section.svelte-7rxph4:last-child svg.svelte-7rxph4.svelte-7rxph4{aspect-ratio:270/111;width:2em}p.svelte-7rxph4.svelte-7rxph4.svelte-7rxph4{line-height:1.5;max-width:60ch}a[href="/contact"].svelte-7rxph4.svelte-7rxph4.svelte-7rxph4:is(:hover, :focus-visible){text-decoration-line:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-7rxph4"><header class="header svelte-7rxph4"><h1 class="svelte-7rxph4">About</h1>
		<p class="svelte-7rxph4">Who is Chadwick?</p></header>
	<main class="main svelte-7rxph4"><section class="svelte-7rxph4"><p class="svelte-7rxph4">Chadwick Macmillan is a NYC-based web designer
				and developer. Organizing the intersection novel
				design and optimized development, he crafts
				unique, creative websites and applications for
				businesses, artists, and innovators.
			</p>

			<p class="svelte-7rxph4">Chadwick places utmost importance on
				interactivity, responsiveness, and accessibility
				in web experiences. His websites include a
				stylish flair that engages visitors.
			</p></section>
		<section class="svelte-7rxph4"><a href="/contact" class="svelte-7rxph4">Get in touch</a>
			<svg version="1.1" viewBox="0 0 1080 444" xmlns="http://www.w3.org/2000/svg" class="svelte-7rxph4"><path d="m820 405 38.4 38.4 222-222-222-222-38.4 38.4 156 156h-976v54.3h976z" fill-rule="evenodd"></path></svg></section></main>
</div>`;
});
export {
  Page as default
};
