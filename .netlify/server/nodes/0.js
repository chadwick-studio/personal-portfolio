

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.50665583.js","_app/immutable/chunks/index.243829f9.js","_app/immutable/chunks/stores.a48ea4f8.js","_app/immutable/chunks/singletons.84243646.js"];
export const stylesheets = ["_app/immutable/assets/0.19985d0d.css"];
export const fonts = [];
