

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2284f022.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.8ee15ee4.js","_app/immutable/chunks/singletons.fcd27eaa.js","_app/immutable/chunks/paths.e9380626.js"];
export const stylesheets = [];
export const fonts = [];
