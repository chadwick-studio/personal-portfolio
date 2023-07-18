

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a5554909.js","_app/immutable/chunks/index.fc9ba97a.js"];
export const stylesheets = ["_app/immutable/assets/5.643c72f6.css"];
export const fonts = [];
