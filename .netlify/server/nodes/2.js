

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.24ba495f.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/paths.7df5e5bf.js"];
export const stylesheets = ["_app/immutable/assets/2.d4c6ed7d.css","_app/immutable/assets/Nav.49d196cc.css"];
export const fonts = [];
