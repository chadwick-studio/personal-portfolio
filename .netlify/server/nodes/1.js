

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.385367e4.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.06484c5e.js","_app/immutable/chunks/singletons.1ce48a2e.js","_app/immutable/chunks/paths.1e3c1896.js"];
export const stylesheets = [];
export const fonts = [];
