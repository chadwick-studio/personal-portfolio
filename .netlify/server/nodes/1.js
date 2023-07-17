

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dce101c0.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.9fd4b18d.js","_app/immutable/chunks/singletons.a5d650c2.js","_app/immutable/chunks/paths.db36b3aa.js"];
export const stylesheets = [];
export const fonts = [];
