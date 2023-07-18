

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f65bc919.js","_app/immutable/chunks/index.624e1a22.js","_app/immutable/chunks/stores.aabdcff7.js","_app/immutable/chunks/singletons.e4277f48.js"];
export const stylesheets = [];
export const fonts = [];
