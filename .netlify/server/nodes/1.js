

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.edc70d5a.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.e8ecf55e.js","_app/immutable/chunks/singletons.65cb15da.js","_app/immutable/chunks/paths.900d9d07.js"];
export const stylesheets = [];
export const fonts = [];
