import { c as create_ssr_component, s as subscribe, a as add_attribute, b as each, e as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.nav.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{font-family:"Poppins";text-transform:uppercase;display:flex;flex-direction:column;justify-content:space-between;align-items:center;position:relative;border-right:2px solid #000;grid-column:1/2;padding-block:16px;z-index:20}.nav.svelte-1321xzy h1.svelte-1321xzy.svelte-1321xzy{font-weight:700}@media(max-width: 767px){.nav.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{transform-style:preserve-3d;background-color:var(--main-background);flex-direction:row-reverse;padding-inline:16px;border-right:none;border-bottom:1px solid #000}}.nav-toggle.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{display:none;align-items:center;gap:4px}.nav-toggle.svelte-1321xzy circle.svelte-1321xzy.svelte-1321xzy{transition:cx 350ms ease-out}.nav-toggle.svelte-1321xzy svg.svelte-1321xzy.svelte-1321xzy{transition:rotate 300ms ease-out}.nav-toggle[aria-expanded=true].svelte-1321xzy svg.svelte-1321xzy.svelte-1321xzy{rotate:360deg;transition:rotate 400ms ease-out}.nav-toggle[aria-expanded=true].svelte-1321xzy .svelte-1321xzy:is(.left-circles, .right-circles) .svelte-1321xzy:is(circle:first-child, circle:last-child){cx:16;transition:cx 250ms ease-out}@media(prefers-reduced-motion){.nav-toggle.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{transition:rotate 100ms ease-out}.nav-toggle[aria-expanded=true].svelte-1321xzy svg.svelte-1321xzy.svelte-1321xzy{rotate:90deg;transition:rotate 150ms ease-out}}@media(max-width: 767px){.nav-toggle.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{display:flex}.nav-toggle.svelte-1321xzy>span.svelte-1321xzy.svelte-1321xzy{font-size:var(--fs-000)}}a.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{display:inline-block;writing-mode:vertical-lr;transform:rotate(-180deg);line-height:1}@media(max-width: 767px){a.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{writing-mode:horizontal-tb;transform:rotate(0)}}.nav-links.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{display:flex;flex-direction:column;gap:0.125em}.nav-links.svelte-1321xzy a.svelte-1321xzy.svelte-1321xzy{position:relative}.nav-links.svelte-1321xzy a.svelte-1321xzy.svelte-1321xzy::before{content:"";position:absolute;inset:0 calc(100% + 2px) auto auto;width:1px;height:0;background-color:black;transition:height 150ms ease-out}@media(hover: hover){.nav-links.svelte-1321xzy a.svelte-1321xzy.svelte-1321xzy:is(:hover, :focus-visible)::before{transition:height 150ms ease-out;width:1px;height:100%}}@media(max-width: 767px){.nav-links.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{flex-direction:column-reverse}.nav-links.svelte-1321xzy a.svelte-1321xzy.svelte-1321xzy{writing-mode:horizontal-tb;transform:rotate(0)}.nav-links.svelte-1321xzy a.svelte-1321xzy.svelte-1321xzy::before{inset:calc(100% + 2px) auto auto 0;width:0;height:1px;background-color:black;transition:width 150ms ease-out}}@media(max-width: 767px) and (hover: hover){.nav-links.svelte-1321xzy a.svelte-1321xzy.svelte-1321xzy:is(:hover, :focus-visible)::before{transition:width 150ms ease-out;width:100%;height:1px}}@media(max-width: 767px){.nav-wrapper.svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{pointer-events:none;background-color:var(--main-background);position:absolute;top:calc(100% + 1px);left:0;width:100%;border-bottom:2px solid black;padding:16px;transform:scaleY(0);transform-origin:top;transition:transform 300ms ease-out}.nav-wrapper[data-visible=true].svelte-1321xzy.svelte-1321xzy.svelte-1321xzy{transform:scaleY(1);transition:transform 300ms ease-out;pointer-events:auto}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const links = [
    { name: "Contact", pathname: "/contact" },
    { name: "About", pathname: "/about" },
    {
      name: "Portfolio",
      pathname: "/portfolio"
    }
  ];
  let isNavVisible = false;
  let navText = "Menu";
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<header class="nav svelte-1321xzy"><nav id="nav" class="nav-wrapper svelte-1321xzy"${add_attribute("data-visible", isNavVisible, 0)} aria-label="Main"><ul class="nav-links svelte-1321xzy">${each(links, (link, i) => {
    return `${``}`;
  })}</ul></nav>
	<button class="nav-toggle svelte-1321xzy"${add_attribute("aria-expanded", isNavVisible, 0)} aria-controls="nav"><span class="svelte-1321xzy">${escape(navText)}</span>
		<svg version="1.1" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="nav-icon svelte-1321xzy" title="Menu Icon"><g class="svelte-1321xzy"><g class="left-circles svelte-1321xzy"><circle cx="6" cy="6" r="4" class="svelte-1321xzy"></circle><circle cx="6" cy="16" r="4" class="svelte-1321xzy"></circle><circle cx="6" cy="26" r="4" class="svelte-1321xzy"></circle></g><g class="center-circles svelte-1321xzy"><circle cx="16" cy="6" r="4" class="svelte-1321xzy"></circle><circle cx="16" cy="26" r="4" class="svelte-1321xzy"></circle></g><g class="right-circles svelte-1321xzy"><circle cx="26" cy="6" r="4" class="svelte-1321xzy"></circle><circle cx="26" cy="16" r="4" class="svelte-1321xzy"></circle><circle cx="26" cy="26" r="4" class="svelte-1321xzy"></circle></g></g></svg></button>
	${``}
</header>`;
});
const Cursor_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.cursor-wrapper.svelte-1nqkai7{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;pointer-events:none}.cursor.svelte-1nqkai7{transform:translate(-50%, -50%) translate3d(calc(var(--xCoords) * 1px), calc(var(--yCoords) * 1px), 0);transition:transform 100ms ease-out}@media(hover: none){.cursor-wrapper.svelte-1nqkai7{display:none}}",
  map: null
};
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const coords = { x: -200, y: -200 };
  let { x, y } = coords;
  $$result.css.add(css$1);
  return `
<div class="cursor-wrapper svelte-1nqkai7"><svg class="cursor svelte-1nqkai7" width="12px" height="12px" style="${"--xCoords:" + escape(x, true) + "; --yCoords:" + escape(y, true) + ";"}" version="1.1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6"></circle></svg>
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.page-layout.svelte-tvebxw{display:grid;grid-template:1fr/3rem 1fr;height:100svh;position:relative;z-index:1;isolation:isolate;overflow:hidden}@media(max-width: 767px){.page-layout.svelte-tvebxw{grid-template:3rem 1fr/1fr}}body{background-color:var(--main-background)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="page-layout svelte-tvebxw">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>
${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
