

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f5da14b4.js","_app/immutable/chunks/index.a77fdec4.js","_app/immutable/chunks/stores.60aa4d4d.js","_app/immutable/chunks/singletons.4dcfaec5.js"];
export const stylesheets = ["_app/immutable/assets/0.7243b370.css"];
export const fonts = [];
