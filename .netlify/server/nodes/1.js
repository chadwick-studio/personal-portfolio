

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.465b8e80.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.eac173b5.js","_app/immutable/chunks/singletons.3967f28c.js","_app/immutable/chunks/paths.247855d2.js"];
export const stylesheets = [];
export const fonts = [];
