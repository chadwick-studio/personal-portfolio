import { c as create_ssr_component, a as assign, n as now, l as loop, i as identity, b as subscribe, d as add_attribute, e as add_styles, f as each, g as escape, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import gsap from "gsap";
import { w as writable } from "../../chunks/index.js";
const app = "";
const Cursor_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".cursor-wrapper.svelte-1qehv6q{position:fixed;top:0;left:0;width:100%;height:100%;mix-blend-mode:difference;pointer-events:none;isolation:isolate;z-index:999999}.cursor.svelte-1qehv6q{position:absolute;fill:#ffd436;filter:url(#filter);pointer-events:none;transition:50ms linear}@media(hover: none){.cursor-wrapper.svelte-1qehv6q{display:none}}",
  map: null
};
let circleRadius = 45;
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const initCursor = () => {
    if (typeof document != "undefined") {
      const cursor = document.querySelector(".cursor");
      const hoverables = document.querySelectorAll(".hoverable, a, button");
      const turbulence = document.querySelector(".cursor feTurbulence");
      const circle = document.querySelector(".cursor-circle");
      const durationTime = 0.5;
      document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(-50%, -50%) translate3d(${e.clientX}px, ${e.clientY}px, 0px)`;
      });
      hoverables.forEach((hoverable) => {
        hoverable.addEventListener("mouseover", () => {
          gsap.to(turbulence, {
            duration: durationTime,
            startAt: { attr: { baseFrequency: 0.08 } },
            attr: { baseFrequency: 0 }
          });
          gsap.to(circle, {
            duration: durationTime,
            startAt: { attr: { r: circleRadius } },
            attr: { r: 30 }
          });
        });
        hoverable.addEventListener("mouseout", () => {
          gsap.to(circle, {
            duration: durationTime,
            startAt: { attr: { r: 30 } },
            attr: { r: circleRadius }
          });
        });
      });
    }
  };
  page.subscribe(() => {
    initCursor();
  });
  $$result.css.add(css$2);
  return `<div class="cursor-wrapper svelte-1qehv6q"><svg class="cursor svelte-1qehv6q" width="30" height="30" viewBox="0 0 100 100"><defs><filter id="filter" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox"><feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="8" result="warp"></feTurbulence><feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="20" in="SourceGraphic" in2="warp"></feDisplacementMap></filter></defs><circle class="cursor-circle" cx="50" cy="50" r="45"></circle></svg>
</div>`;
});
function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration: duration2 = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration2 === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration2 === "function")
          duration2 = duration2(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration2) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration2)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Navigation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@font-face{font-family:"Yard Sale";src:url("/fonts/yard_sale/yardsale.woff2") format("woff2")}.menu_toggle-button.svelte-9glaoo.svelte-9glaoo{aspect-ratio:1;width:3rem;position:fixed;z-index:10;bottom:24px;right:24px;mix-blend-mode:difference}.menu_toggle-button.svelte-9glaoo.svelte-9glaoo,.menu_toggle-button.svelte-9glaoo svg.svelte-9glaoo{display:block}.menu_toggle-button.svelte-9glaoo.svelte-9glaoo:focus-visible{outline:1px solid black;background-color:#9c0087}.menu-icon_circles.svelte-9glaoo.svelte-9glaoo{fill:#ffd436}.menu_navigation.svelte-9glaoo.svelte-9glaoo{display:flex;flex-direction:column;justify-content:end;position:fixed;bottom:0;right:0;height:100vh;height:100vh;border-left:2px solid black;background-color:#ffd436;transform:translate3d(calc(var(--translateX) * 100%), 0, 0)}.navigation-list.svelte-9glaoo.svelte-9glaoo{display:flex;color:black;flex-direction:column;font-size:0.615rem;font-family:"Yard Sale";text-transform:uppercase;text-align:right;margin-bottom:96px;margin-inline:24px}.navigation-list.svelte-9glaoo a.svelte-9glaoo{display:inline-block;position:relative}.navigation-list.svelte-9glaoo a.svelte-9glaoo::before{content:"";display:block;position:absolute;top:0;right:-0.8em;width:0.25em;height:0%;transition:height 150ms;background-color:#9c0087}.navigation-list.svelte-9glaoo a.svelte-9glaoo:active{top:1px}.navigation-list.svelte-9glaoo a.svelte-9glaoo:hover::before,.navigation-list.svelte-9glaoo a.svelte-9glaoo:focus-visible::before{height:80%;transition:height 250ms}li.active.svelte-9glaoo.svelte-9glaoo{color:#9c0087;transition:color 100ms}',
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $menuTween, $$unsubscribe_menuTween;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { duration: duration2 } = $$props;
  let menuIsVisible = false;
  const routeLinks = [
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/playground", "Playground"],
    ["/info", "Info"],
    ["/contact", "Contact"]
  ];
  const menuTween = tweened(1, { duration: duration2, easing: sineOut });
  $$unsubscribe_menuTween = subscribe(menuTween, (value) => $menuTween = value);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  $$result.css.add(css$1);
  $$unsubscribe_menuTween();
  $$unsubscribe_page();
  return `<div class="menu_container"><button class="menu_toggle-button svelte-9glaoo"${add_attribute("aria-expanded", menuIsVisible, 0)} aria-controls="navigation"><span class="sr-only">Menu</span>
		<svg version="1.1" width="100%" height="100%" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" class="menu-icon svelte-9glaoo" title="Menu Icon"><filter id="menu-filter" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox"><feTurbulence type="fractalNoise" baseFrequency="0" result="noise" numOctaves="4" seed="10"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="G" yChannelSelector="R"></feDisplacementMap></filter><g filter="url(#menu-filter)" class="menu-icon_circles svelte-9glaoo" transform="translate(7, 7)" fill="currentColor"><g><circle class="top-left" cx="5" cy="5" r="5"></circle><circle cx="5" cy="18" r="5"></circle><circle class="bottom-left" cx="5" cy="31" r="5"></circle></g><g><circle cx="18" cy="5" r="5"></circle><circle cx="18" cy="31" r="5"></circle></g><g><circle class="top-right" cx="31" cy="5" r="5"></circle><circle cx="31" cy="18" r="5"></circle><circle class="bottom-right" cx="31" cy="31" r="5"></circle></g></g></svg></button>
	<nav class="menu_navigation svelte-9glaoo"${add_styles({ "--translateX": $menuTween })}><ul id="navigation" class="navigation-list svelte-9glaoo">${each(routeLinks, (link) => {
    return `<li class="${["svelte-9glaoo", $page.url.pathname === link[0] ? "active" : ""].join(" ").trim()}"><a${add_attribute("href", link[0], 0)} class="svelte-9glaoo">${escape(link[1])}</a>
				</li>`;
  })}</ul></nav>
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{background-color:#ffd436;overflow-x:hidden;scrollbar-width:thin;scrollbar-gutter:stable}.page-transition.svelte-1d3ozcq{overflow-x:hidden;scrollbar-width:thin;scrollbar-gutter:stable}.body_container.svelte-1d3ozcq{position:relative;min-height:100vh;min-height:100dvh;background-color:#ffd436;overflow-x:hidden;scrollbar-width:thin;scrollbar-gutter:stable}.container{height:100vh;height:100dvh}.header:not(.home){display:flex;align-items:end;font-size:clamp(3.5rem, 3.2143rem + 1.4286vw, 4.5rem);border-bottom:2px solid black;padding-top:24px;padding-left:24px;padding-bottom:24px}.title, .subtitle{cursor:default;font-family:"Cooper Hewitt", sans-serif;text-transform:uppercase;line-height:1;white-space:nowrap}.title{font-weight:900;writing-mode:vertical-rl;transform:rotate(180deg)}.subtitle{font-weight:300;font-size:30%;line-height:1.2;transform:translate3d(-0.35em, 0.05em, 0);align-self:end}.container, .main{display:grid}.main{padding-top:48px;padding-bottom:48px;padding-inline:24px;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-gutter:stable}.accent{color:#9c0087}a[href^="https"]::after{content:"";display:inline-block;aspect-ratio:1;width:1em;margin-left:0.25em;background-repeat:no-repeat;background-position:bottom;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMSAyNCAyMyI+PHBhdGggZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiLz48L3N2Zz4=");position:relative;top:0.1em}.sr-only{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;height:1px !important;margin:-1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important;white-space:nowrap !important}@media(min-width: 800px){.header:not(.home){border:0;margin:0;padding:0;border-right:2px solid black;padding-bottom:24px;padding-left:24px;padding-right:24px}.container{grid-template-columns:1fr 2fr}.main{margin-top:0;place-items:center}}',
  map: null
};
const duration = 300;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="page-transition svelte-1d3ozcq"><div class="body_container svelte-1d3ozcq">${slots.default ? slots.default({}) : ``}
			${validate_component(Navigation, "Navigation").$$render($$result, { duration }, {}, {})}</div></div>
${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
