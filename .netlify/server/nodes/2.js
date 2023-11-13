

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d143acc8.js","_app/immutable/chunks/index.a77fdec4.js","_app/immutable/chunks/stores.60aa4d4d.js","_app/immutable/chunks/singletons.4dcfaec5.js"];
export const stylesheets = ["_app/immutable/assets/2.261b36b2.css"];
export const fonts = [];
