

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ad50ffef.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/paths.9868329f.js","_app/immutable/chunks/Nav.svelte_svelte_type_style_lang.23df724f.js"];
export const stylesheets = ["_app/immutable/assets/2.d4c6ed7d.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
