

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fac628af.js","_app/immutable/chunks/index.243829f9.js","_app/immutable/chunks/stores.5cebd789.js","_app/immutable/chunks/singletons.523da839.js"];
export const stylesheets = [];
export const fonts = [];
