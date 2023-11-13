

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ba40a7b5.js","_app/immutable/chunks/index.a77fdec4.js","_app/immutable/chunks/stores.e89e7e89.js","_app/immutable/chunks/singletons.98432a0a.js"];
export const stylesheets = ["_app/immutable/assets/2.261b36b2.css"];
export const fonts = [];
