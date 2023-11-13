import { c as create_ssr_component, f as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--bg-primary:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#88fa20;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.title.svelte-1x659f1.svelte-1x659f1,.subtitle.svelte-1x659f1.svelte-1x659f1,.hero.svelte-1x659f1.svelte-1x659f1{visibility:hidden}.page.svelte-1x659f1.svelte-1x659f1{flex-direction:column;justify-content:space-between;container:page/inline-size}.header.svelte-1x659f1.svelte-1x659f1{margin:1rem;white-space:nowrap;text-transform:uppercase;font-size:12cqi}.header.svelte-1x659f1>h1.svelte-1x659f1{font-family:"Pilowlava";white-space:normal;line-height:1}.header.svelte-1x659f1>p.svelte-1x659f1{font-family:"Poppins";font-weight:300;line-height:1;font-size:min(0.5em, 2rem);margin-inline-start:0.125em;margin-block-start:0.5rem}.hero.svelte-1x659f1.svelte-1x659f1{align-self:end;border-top:2px solid black;padding:2em;width:fit-content;margin-left:auto;line-height:1.2}.hero.block-flow.svelte-1x659f1.svelte-1x659f1{--_flow-space:1em}@media(min-width: 953px){.hero.svelte-1x659f1.svelte-1x659f1{border-left:2px solid black}}a[href^=mailto].svelte-1x659f1.svelte-1x659f1:is(:hover, :focus-visible){text-decoration-line:underline}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let subtitle;
  let hero;
  $$result.css.add(css);
  return `<div class="page | flex svelte-1x659f1"><header class="header | line-height-1 svelte-1x659f1"><h1 class="title svelte-1x659f1"${add_attribute("this", title, 0)}>Chadwick Macmillan</h1>
		<p class="subtitle svelte-1x659f1"${add_attribute("this", subtitle, 0)}>Web Designer + Developer
		</p></header>
	<main class="main"><section class="hero | block-flow svelte-1x659f1"${add_attribute("this", hero, 0)}><p>I build fun, creative, and engaging web
				experiences.
			</p>
			<p>Inquiring about a project? Send me an email at <a href="mailto:chadwick@chadwick.studio" class="svelte-1x659f1">chadwick@chadwick.studio</a> or view my contact page :-)
			</p></section></main>
</div>`;
});
export {
  Page as default
};
