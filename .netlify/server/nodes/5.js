

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.15388dde.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/paths.9098254c.js"];
export const stylesheets = ["_app/immutable/assets/5.6fd5e4d8.css","_app/immutable/assets/Nav.a914bd5f.css"];
export const fonts = [];
