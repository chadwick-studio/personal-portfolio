

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c1cfa22b.js","_app/immutable/chunks/index.a77fdec4.js","_app/immutable/chunks/stores.60aa4d4d.js","_app/immutable/chunks/singletons.4dcfaec5.js"];
export const stylesheets = [];
export const fonts = [];
