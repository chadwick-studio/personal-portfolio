

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b8f4ef75.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.5eb01445.js","_app/immutable/chunks/singletons.047956c0.js"];
export const stylesheets = [];
export const fonts = [];
