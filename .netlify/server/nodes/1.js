

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f944b658.js","_app/immutable/chunks/index.a77fdec4.js","_app/immutable/chunks/stores.e89e7e89.js","_app/immutable/chunks/singletons.98432a0a.js"];
export const stylesheets = [];
export const fonts = [];
