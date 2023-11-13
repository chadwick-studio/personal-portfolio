

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4b266ea1.js","_app/immutable/chunks/index.243829f9.js","_app/immutable/chunks/stores.02746ff3.js","_app/immutable/chunks/singletons.f97f3da8.js"];
export const stylesheets = [];
export const fonts = [];
