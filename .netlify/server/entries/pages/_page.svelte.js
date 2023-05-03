import { c as create_ssr_component } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.header.svelte-vwzj22{display:flex;align-items:end;height:100vh;height:100dvh}.title.svelte-vwzj22{font-size:calc(5.5vh + 1rem);font-size:calc(5.5dvh + 1rem)}.d.svelte-vwzj22{position:relative}.d.svelte-vwzj22::after{transform:rotate(180deg);content:"eveloper + designer";font-size:30%;font-weight:300;writing-mode:horizontal-tb;text-transform:uppercase;white-space:nowrap;position:absolute;top:12%;right:92%;letter-spacing:3px}.accent.svelte-vwzj22{color:#9c0087}@media(min-width: 800px){.d.svelte-vwzj22::after{font-size:35%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header home svelte-vwzj22"><h1 class="title svelte-vwzj22">Cha<span class="d svelte-vwzj22">d</span>wick
		<span class="accent svelte-vwzj22">Macmillan</span>
		<span class="sr-only">Web Developer and Designer</span></h1>
</header>`;
});
export {
  Page as default
};
