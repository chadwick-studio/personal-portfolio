

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.31753a52.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/paths.db36b3aa.js","_app/immutable/chunks/index.5a473649.js"];
export const stylesheets = ["_app/immutable/assets/2.d4c6ed7d.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
