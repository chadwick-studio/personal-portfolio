import { c as create_ssr_component } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.header.svelte-1a2y6sw{display:flex;align-items:end;height:100vh;height:100dvh;container:header/size}.title.svelte-1a2y6sw{font-size:clamp(3.25rem, 2.8989rem + 1.7021vw, 3.75rem)}@container header (width > 250px){.title.svelte-1a2y6sw{font-size:calc(6cqh + 1rem)}}.d.svelte-1a2y6sw{position:relative}.d.svelte-1a2y6sw::after{transform:rotate(180deg);content:"eveloper + designer";font-size:30%;font-weight:300;writing-mode:horizontal-tb;text-transform:uppercase;white-space:nowrap;position:absolute;top:10%;right:82%;letter-spacing:3px}.accent.svelte-1a2y6sw{color:#9c0087}@media(min-width: 800px){.d.svelte-1a2y6sw::after{font-size:35%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header home svelte-1a2y6sw"><h1 class="title svelte-1a2y6sw">Cha<span class="d svelte-1a2y6sw">d</span>wick
		<span class="accent svelte-1a2y6sw">Macmillan</span>
		<span class="sr-only">Web Developer and Designer</span></h1>
</header>`;
});
export {
  Page as default
};
