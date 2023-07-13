

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.386ee982.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.18d50503.js","_app/immutable/chunks/singletons.a5ad9fa3.js","_app/immutable/chunks/paths.46394d37.js"];
export const stylesheets = [];
export const fonts = [];
