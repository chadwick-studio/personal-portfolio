import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/entry/_layout.svelte.495e39f1.js","_app/immutable/chunks/index.65e75478.js","_app/immutable/chunks/stores.36b5a3e3.js","_app/immutable/chunks/singletons.ef880a54.js","_app/immutable/chunks/paths.f4796ef1.js","_app/immutable/entry/_layout.js.4ed993c7.js"];
export const stylesheets = ["_app/immutable/assets/_layout.933cd69d.css","_app/immutable/assets/Nav.49d196cc.css"];
export const fonts = [];
