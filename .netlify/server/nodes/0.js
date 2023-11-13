

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f470044b.js","_app/immutable/chunks/index.243829f9.js","_app/immutable/chunks/stores.5cebd789.js","_app/immutable/chunks/singletons.523da839.js"];
export const stylesheets = ["_app/immutable/assets/0.7243b370.css"];
export const fonts = [];
