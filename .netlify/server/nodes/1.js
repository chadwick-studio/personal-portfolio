

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5b751554.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.4930cf4c.js","_app/immutable/chunks/singletons.0c0f4bb6.js"];
export const stylesheets = [];
export const fonts = [];
