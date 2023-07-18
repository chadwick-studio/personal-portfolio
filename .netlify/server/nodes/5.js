

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.06ba249d.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/index.d6fe139d.js"];
export const stylesheets = ["_app/immutable/assets/5.72627b46.css"];
export const fonts = [];
