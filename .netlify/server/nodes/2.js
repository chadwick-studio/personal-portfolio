

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.99128f7f.js","_app/immutable/chunks/index.243829f9.js","_app/immutable/chunks/stores.02746ff3.js","_app/immutable/chunks/singletons.f97f3da8.js"];
export const stylesheets = ["_app/immutable/assets/2.261b36b2.css"];
export const fonts = [];
