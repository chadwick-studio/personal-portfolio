

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8f66e60d.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.46f388e1.js","_app/immutable/chunks/singletons.ce94ceee.js","_app/immutable/chunks/index.es.485ed4ea.js","_app/immutable/chunks/tslib.es6.071229d1.js"];
export const stylesheets = ["_app/immutable/assets/2.e9baba94.css"];
export const fonts = [];
