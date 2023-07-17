

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.47fa280a.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.af7f2a98.js","_app/immutable/chunks/singletons.92df146e.js","_app/immutable/chunks/paths.5b47275c.js"];
export const stylesheets = [];
export const fonts = [];
