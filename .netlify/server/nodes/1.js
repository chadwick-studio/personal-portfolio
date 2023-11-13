

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d2f5eb3f.js","_app/immutable/chunks/index.243829f9.js","_app/immutable/chunks/stores.a48ea4f8.js","_app/immutable/chunks/singletons.84243646.js"];
export const stylesheets = [];
export const fonts = [];
