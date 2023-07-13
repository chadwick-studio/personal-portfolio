

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c527fe91.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.96b3de7e.js","_app/immutable/chunks/singletons.d36353ff.js","_app/immutable/chunks/paths.bc6cd462.js"];
export const stylesheets = [];
export const fonts = [];
