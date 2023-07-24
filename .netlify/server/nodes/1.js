

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ffca95f1.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.7345f61b.js","_app/immutable/chunks/singletons.22bdd4b8.js"];
export const stylesheets = [];
export const fonts = [];
