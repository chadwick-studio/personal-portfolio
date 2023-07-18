

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e9a7f3d0.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/stores.de1614e2.js","_app/immutable/chunks/singletons.7febd01a.js"];
export const stylesheets = [];
export const fonts = [];
