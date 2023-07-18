

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.01a459f2.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/stores.a30de834.js","_app/immutable/chunks/singletons.e4fbb049.js"];
export const stylesheets = [];
export const fonts = [];
