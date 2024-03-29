import { c as create_ssr_component, b as subscribe, d as add_styles, e as each, f as add_attribute, g as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--bg-primary:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#88fa20;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}h1.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{font-weight:bold}@media(min-width: 768px){.home-link.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{writing-mode:vertical-lr;rotate:-180deg;white-space:nowrap}}.nav-container.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{border-bottom:2px solid black;z-index:100;position:relative}@media(min-width: 768px){.nav-container.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{border-bottom:none;border-right:2px solid black}}.nav-content.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{width:100%;padding-inline:1rem;padding-block:0.5rem;flex-direction:row-reverse;justify-content:space-between;align-items:center;position:relative}@media(min-width: 768px){.nav-content.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{padding-block:1rem;height:100%;flex-direction:column}}.nav-toggler.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{align-items:center;gap:0.25rem}.nav-toggler.svelte-1tgcw3s svg.svelte-1tgcw3s.svelte-1tgcw3s{transition:rotate 300ms ease-out}.nav-toggler[aria-expanded=true].svelte-1tgcw3s svg.svelte-1tgcw3s.svelte-1tgcw3s{rotate:360deg;transition:rotate 400ms ease-out}@media(prefers-reduced-motion){.nav-toggler.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{transition:rotate 100ms ease-out}.nav-toggler[aria-expanded=true].svelte-1tgcw3s svg.svelte-1tgcw3s.svelte-1tgcw3s{rotate:90deg;transition:rotate 150ms ease-out}}@media(min-width: 768px){.nav-toggler.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{display:none}}.nav-links-container.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{display:flex;flex-direction:column;justify-content:end;position:absolute;top:calc(100% + 2px);left:0;width:100%;height:calc(100vh - var(--nav-height) - 2px);background-color:var(--bg-primary);padding-inline:1rem;padding-block:1rem;border-bottom:2px solid black;visibility:hidden}@media(min-width: 768px){.nav-links-container.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{justify-content:start;position:static;height:100%;padding:0;border-bottom:none;visibility:visible}}.nav-links.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{flex-direction:column}.nav-links.svelte-1tgcw3s li.svelte-1tgcw3s+li.svelte-1tgcw3s{margin-top:2em}@media(min-width: 768px){.nav-links.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{flex-direction:column-reverse;align-items:center}.nav-links.svelte-1tgcw3s li.svelte-1tgcw3s+li.svelte-1tgcw3s{margin:0}}.nav-link.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{font-size:var(--fs-300);align-items:end;font-weight:bold;gap:0.75em}.nav-link.svelte-1tgcw3s>span.svelte-1tgcw3s.svelte-1tgcw3s{line-height:0.8}@media(min-width: 768px){.nav-link.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s{font-size:1rem;font-weight:normal;writing-mode:vertical-lr;rotate:-180deg;position:relative}.nav-link[aria-current=page].svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s::before{height:100%}.nav-link.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s::before{content:"";width:1px;height:0;background-color:black;position:absolute;top:0;right:calc(100% + 0.25em);transition:150ms ease}.nav-link.svelte-1tgcw3s.svelte-1tgcw3s.svelte-1tgcw3s:hover::before{height:100%;transition:200ms ease}.nav-link.svelte-1tgcw3s svg.svelte-1tgcw3s.svelte-1tgcw3s{display:none}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = [
    {
      name: "Portfolio",
      pathname: "/portfolio"
    },
    { name: "About", pathname: "/about" },
    { name: "Contact", pathname: "/contact" }
  ];
  let isNavVisible = true;
  let height;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<header class="nav-container svelte-1tgcw3s"${add_styles({ "--nav-height": height + "px" })}><div class="nav-content | inline-flex uppercase svelte-1tgcw3s">${`<nav id="nav-links-container" class="nav-links-container svelte-1tgcw3s" aria-label="Main"${add_styles({
    "visibility": "visible"
  })}><ul class="nav-links | flex svelte-1tgcw3s">${each(links, (link) => {
    return `<li class="svelte-1tgcw3s"><a class="nav-link | inline-flex svelte-1tgcw3s"${add_attribute("href", link.pathname, 0)}${add_attribute("aria-current", $page.url.pathname === link.pathname ? "page" : false, 0)}><span class="svelte-1tgcw3s">${escape(link.name)}</span>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="262.75 285.12 652.15 652.13" width="1em" height="1em" class="svelte-1tgcw3s"><g><path d="m411.07 348.1h396.43l-544.74 544.43 44.711 44.711 544.43-544.74v396.43h62.977v-503.81h-503.81z"></path></g></svg></a>
						</li>`;
  })}</ul></nav>`}
		<button class="nav-toggler | inline-flex svelte-1tgcw3s"${add_attribute("aria-expanded", isNavVisible, 0)} aria-controls="nav"><span>${escape("Close")}</span>
			<svg version="1.1" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="nav-icon svelte-1tgcw3s" title="Menu Icon"><g><g class="left-circles"><circle cx="6"${add_attribute("cy", 16, 0)} r="4"></circle><circle cx="6" cy="16" r="4"></circle><circle cx="6"${add_attribute("cy", 16, 0)} r="4"></circle></g><g class="center-circles"><circle cx="16" cy="6" r="4"></circle><circle cx="16" cy="26" r="4"></circle></g><g class="right-circles"><circle cx="26"${add_attribute("cy", 16, 0)} r="4"></circle><circle cx="26" cy="16" r="4"></circle><circle cx="26"${add_attribute("cy", 16, 0)} r="4"></circle></g></g></svg></button>
		<a class="home-link svelte-1tgcw3s" href="/"${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : false, 0)}><h1 class="svelte-1tgcw3s">Chadwick Macmillan</h1></a></div>
</header>`;
});
const Cursor_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--bg-primary:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#88fa20;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.cursor-wrapper.svelte-16yp682{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;pointer-events:none}.cursor.svelte-16yp682{aspect-ratio:1;width:64px;transform:translate3d(calc(var(--xCoords) * 1px - 25px), calc(var(--yCoords) * 1px), 0) rotateZ(var(--rotate))}@media(hover: none){.cursor-wrapper.svelte-16yp682{display:none}}",
  map: null
};
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const coords = { x: -200, y: -200 };
  let { x, y } = coords;
  $$result.css.add(css$1);
  return `
<div class="cursor-wrapper svelte-16yp682"><img src="/images/pixel_cursor.png" alt="" class="cursor svelte-16yp682" style="${"--xCoords:" + escape(x, true) + "; --yCoords:" + escape(y, true) + "; --rotate:" + escape("0deg", true)}">
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--bg-primary:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#88fa20;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}*{cursor:none}.resize-animation-stopper.svelte-xdy8wm *{animation:none !important;transition:none !important}.layout.svelte-xdy8wm{font-family:"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;grid-template:auto 1fr/1fr;height:100vh;z-index:1;background-color:var(--bg-primary)}@media(min-width: 768px){.layout.svelte-xdy8wm{grid-template:1fr/auto 1fr}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<div class="${[
    "layout | grid relative isolate svelte-xdy8wm",
    ""
  ].join(" ").trim()}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>
${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
