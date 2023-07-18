

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.47f52196.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/stores.d66eb02d.js","_app/immutable/chunks/singletons.7508df8d.js"];
export const stylesheets = [];
export const fonts = [];
