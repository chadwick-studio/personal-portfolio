

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.745ee17d.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/paths.b62d4646.js"];
export const stylesheets = ["_app/immutable/assets/5.390c55e3.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
