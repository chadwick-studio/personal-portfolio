

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.46f69141.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/index.ae959d69.js"];
export const stylesheets = ["_app/immutable/assets/5.8786e73e.css"];
export const fonts = [];
