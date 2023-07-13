

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cc3179bb.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.f31aa9cf.js","_app/immutable/chunks/singletons.ca7cfb13.js","_app/immutable/chunks/paths.9098254c.js"];
export const stylesheets = [];
export const fonts = [];
