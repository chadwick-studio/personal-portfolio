

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1e20482e.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.4255e11a.js","_app/immutable/chunks/singletons.25de4e79.js","_app/immutable/chunks/paths.42848886.js"];
export const stylesheets = [];
export const fonts = [];
