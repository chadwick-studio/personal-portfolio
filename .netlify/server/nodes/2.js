

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7e32c471.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/index.d6fe139d.js"];
export const stylesheets = ["_app/immutable/assets/2.d4c6ed7d.css"];
export const fonts = [];
