

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.89ab8064.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/index.ae959d69.js"];
export const stylesheets = ["_app/immutable/assets/2.d4c6ed7d.css"];
export const fonts = [];
