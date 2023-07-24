

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7d1cdad0.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.de9f951f.js","_app/immutable/chunks/singletons.1dcfec30.js"];
export const stylesheets = [];
export const fonts = [];
