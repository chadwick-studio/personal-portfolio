

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d7d29aaa.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/paths.46394d37.js"];
export const stylesheets = ["_app/immutable/assets/2.d4c6ed7d.css","_app/immutable/assets/Nav.a914bd5f.css"];
export const fonts = [];
