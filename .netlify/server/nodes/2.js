

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.932d8d0b.js","_app/immutable/chunks/index.243829f9.js","_app/immutable/chunks/stores.5cebd789.js","_app/immutable/chunks/singletons.523da839.js"];
export const stylesheets = ["_app/immutable/assets/2.261b36b2.css"];
export const fonts = [];
