

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.656158cb.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.c6a47f2e.js","_app/immutable/chunks/singletons.1b84feb8.js","_app/immutable/chunks/paths.d2888d7e.js"];
export const stylesheets = [];
export const fonts = [];
