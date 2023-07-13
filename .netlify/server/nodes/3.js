

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8b5c0c33.js","_app/immutable/chunks/index.d4dab233.js"];
export const stylesheets = ["_app/immutable/assets/3.5e62ea8a.css"];
export const fonts = [];
