

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.36be9619.js","_app/immutable/chunks/index.624e1a22.js","_app/immutable/chunks/index.64c6cf68.js"];
export const stylesheets = ["_app/immutable/assets/5.8786e73e.css"];
export const fonts = [];
