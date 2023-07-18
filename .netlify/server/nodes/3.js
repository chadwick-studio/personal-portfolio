

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.fe4dddf2.js","_app/immutable/chunks/index.4fe0e47b.js"];
export const stylesheets = ["_app/immutable/assets/3.8ff329f7.css"];
export const fonts = [];
