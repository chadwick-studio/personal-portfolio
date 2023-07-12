

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e058df6e.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.e90f0c04.js","_app/immutable/chunks/singletons.6d353db6.js","_app/immutable/chunks/paths.77edf45f.js"];
export const stylesheets = [];
export const fonts = [];
