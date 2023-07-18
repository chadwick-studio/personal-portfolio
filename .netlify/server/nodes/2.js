

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.77bf61db.js","_app/immutable/chunks/index.624e1a22.js","_app/immutable/chunks/index.64c6cf68.js"];
export const stylesheets = ["_app/immutable/assets/2.d4c6ed7d.css"];
export const fonts = [];
