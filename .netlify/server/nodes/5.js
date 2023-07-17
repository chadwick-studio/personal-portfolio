

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.dcec6619.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/paths.969718e6.js"];
export const stylesheets = ["_app/immutable/assets/5.390c55e3.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
