

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.281f2af4.js","_app/immutable/chunks/index.fc9ba97a.js"];
export const stylesheets = ["_app/immutable/assets/3.dcc24a3f.css"];
export const fonts = [];
