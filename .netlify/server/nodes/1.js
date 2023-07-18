

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8cccf975.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.2594c8db.js","_app/immutable/chunks/singletons.aecbdec8.js","_app/immutable/chunks/paths.9868329f.js"];
export const stylesheets = [];
export const fonts = [];
