import { c as create_ssr_component } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.header.svelte-1o2vltb{display:flex;align-items:end;height:100vh;height:100dvh}.title.svelte-1o2vltb{font-size:calc(5.5vh + 1rem);font-size:calc(5.5vh + 1rem)}.d.svelte-1o2vltb{position:relative}.d.svelte-1o2vltb::after{transform:rotate(180deg);content:"eveloper + designer";font-size:30%;font-weight:300;writing-mode:horizontal-tb;text-transform:uppercase;white-space:nowrap;position:absolute;top:10%;right:82%;letter-spacing:3px}.accent.svelte-1o2vltb{color:#9c0087}@media(min-width: 800px){.d.svelte-1o2vltb::after{font-size:35%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header home svelte-1o2vltb"><h1 class="title svelte-1o2vltb">Cha<span class="d svelte-1o2vltb">d</span>wick
		<span class="accent svelte-1o2vltb">Macmillan</span>
		<span class="sr-only">Web Developer and Designer</span></h1>
</header>`;
});
export {
  Page as default
};
