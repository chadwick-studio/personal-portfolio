

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.568d734d.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.156bf72d.js","_app/immutable/chunks/singletons.f8cf14f5.js","_app/immutable/chunks/paths.7df5e5bf.js"];
export const stylesheets = [];
export const fonts = [];
