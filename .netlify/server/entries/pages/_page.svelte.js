import { c as create_ssr_component } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.header.svelte-1dqy6kx{display:flex;align-items:end;position:absolute;min-height:100vh;min-height:100dvh;width:100%;container:header/size}@container header (width > 250px){.title.svelte-1dqy6kx{font-size:calc(6cqh + 1rem)}}.d.svelte-1dqy6kx{position:relative}.d.svelte-1dqy6kx::after{content:"eveloper + designer";font-size:30%;font-weight:300;writing-mode:horizontal-tb;text-transform:uppercase;white-space:nowrap;position:absolute;bottom:10%;left:82%;letter-spacing:3px}.accent.svelte-1dqy6kx{color:#9c0087}@media(min-width: 800px){.d.svelte-1dqy6kx::after{font-size:35%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header svelte-1dqy6kx"><h1 class="title svelte-1dqy6kx">Cha<span class="d svelte-1dqy6kx">d</span>wick
		<span class="accent svelte-1dqy6kx">Macmillan</span>
		<span class="sr-only">Web Developer and Designer</span></h1>
</header>`;
});
export {
  Page as default
};
