

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.6b8fb1d9.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/paths.fea6cf17.js"];
export const stylesheets = ["_app/immutable/assets/5.f7518c48.css","_app/immutable/assets/Nav.49d196cc.css"];
export const fonts = [];
