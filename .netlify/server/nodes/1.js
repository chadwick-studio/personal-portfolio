

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.048874ce.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.500880a1.js","_app/immutable/chunks/singletons.67042c88.js","_app/immutable/chunks/paths.26f79049.js"];
export const stylesheets = [];
export const fonts = [];
