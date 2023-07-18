

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c531e42f.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/stores.f6dc6dd7.js","_app/immutable/chunks/singletons.3afb1eae.js"];
export const stylesheets = [];
export const fonts = [];
