

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2d627b02.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.46f388e1.js","_app/immutable/chunks/singletons.ce94ceee.js"];
export const stylesheets = [];
export const fonts = [];
