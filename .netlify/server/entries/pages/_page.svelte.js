import { c as create_ssr_component } from "../../chunks/index.js";
/* empty css                                              */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.content.svelte-tambbv.svelte-tambbv{font-family:"Poppins";display:grid;grid-template-rows:auto 1fr;margin:16px}.header.svelte-tambbv.svelte-tambbv{line-height:1;white-space:nowrap;text-transform:uppercase}.header.svelte-tambbv>h1.svelte-tambbv{font-family:"Pilowlava";font-size:clamp(var(--fs-400), -0.4399rem + 6.9141vw, var(--fs-700))}.header.svelte-tambbv>p.svelte-tambbv{font-family:"Poppins";font-weight:300;font-size:clamp(var(--fs-100), 0.3266rem + 1.6576vw, var(--fs-300))}.main.svelte-tambbv.svelte-tambbv{margin-top:auto}@media(max-width: 767px){.header.svelte-tambbv.svelte-tambbv{white-space:normal}}.hero.svelte-tambbv.svelte-tambbv{border:1px solid black;padding:0.5rem;width:fit-content}[href^=mailto].svelte-tambbv.svelte-tambbv:is(:hover, :focus-visible){text-decoration-line:underline}p.svelte-tambbv+p.svelte-tambbv{margin-top:1rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-tambbv"><header class="header svelte-tambbv"><h1 class="svelte-tambbv">Chadwick Macmillan</h1>
		<p class="svelte-tambbv">Web Designer + Developer</p></header>
	<main class="main svelte-tambbv"><section class="hero svelte-tambbv"><p class="svelte-tambbv">I build fun, creative, and engaging web
				experiences.
			</p>
			<p class="svelte-tambbv">Inquiring about a project? Send me an email at <a href="mailto:chadwick@chadwick.studio" class="svelte-tambbv">chadwick@chadwick.studio</a> or view my contact page :-)
			</p></section>
		<section><p></p></section></main>
</div>`;
});
export {
  Page as default
};
