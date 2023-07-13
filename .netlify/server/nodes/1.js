

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8986d40b.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.b0ef13f6.js","_app/immutable/chunks/singletons.15d1dad3.js","_app/immutable/chunks/paths.b62d4646.js"];
export const stylesheets = [];
export const fonts = [];
