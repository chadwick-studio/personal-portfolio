import { c as create_ssr_component } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.header.svelte-16dcf3b{display:flex;align-items:end;height:100vh;height:100dvh}.title.svelte-16dcf3b{font-size:calc(5vh + 1rem);font-size:calc(5dvh + 1rem)}.d.svelte-16dcf3b{position:relative}.d.svelte-16dcf3b::after{transform:rotate(180deg);content:"eveloper + designer";font-size:30%;font-weight:300;writing-mode:horizontal-tb;text-transform:uppercase;white-space:nowrap;position:absolute;top:13%;right:94%;letter-spacing:3px}.accent.svelte-16dcf3b{color:#9c0087}@media(min-width: 800px){.d.svelte-16dcf3b::after{font-size:35%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header home svelte-16dcf3b"><h1 class="title svelte-16dcf3b">Cha<span class="d svelte-16dcf3b">d</span>wick
		<span class="accent svelte-16dcf3b">Macmillan</span>
		<span class="sr-only">Web Developer and Designer</span></h1>
</header>`;
});
export {
  Page as default
};
