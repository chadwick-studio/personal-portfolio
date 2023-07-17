

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d48c61d1.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.0adf6cb0.js","_app/immutable/chunks/singletons.c69aa699.js","_app/immutable/chunks/paths.969718e6.js"];
export const stylesheets = [];
export const fonts = [];
