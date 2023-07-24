

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.39415279.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/index.es.485ed4ea.js","_app/immutable/chunks/tslib.es6.071229d1.js"];
export const stylesheets = ["_app/immutable/assets/3.5d23be07.css"];
export const fonts = [];
