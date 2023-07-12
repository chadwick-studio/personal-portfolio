

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4469938e.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.7f3ba492.js","_app/immutable/chunks/singletons.5aaa7f18.js","_app/immutable/chunks/paths.fea6cf17.js"];
export const stylesheets = [];
export const fonts = [];
