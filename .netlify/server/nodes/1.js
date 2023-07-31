

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fe9c39f9.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.b72678d7.js","_app/immutable/chunks/singletons.459607af.js"];
export const stylesheets = [];
export const fonts = [];
