

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ca7eda3a.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/paths.e9380626.js"];
export const stylesheets = ["_app/immutable/assets/5.6fd5e4d8.css","_app/immutable/assets/Nav.49d196cc.css"];
export const fonts = [];
