

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.bf8fe449.js","_app/immutable/chunks/index.d4dab233.js"];
export const stylesheets = ["_app/immutable/assets/3.c0fd5f7b.css"];
export const fonts = [];
