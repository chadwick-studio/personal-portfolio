

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4928bca1.js","_app/immutable/chunks/index.a77fdec4.js","_app/immutable/chunks/stores.fea31c59.js","_app/immutable/chunks/singletons.d3b8ef01.js"];
export const stylesheets = [];
export const fonts = [];
