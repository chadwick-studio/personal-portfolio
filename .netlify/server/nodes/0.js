import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.d2c96daf.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.e90f0c04.js","_app/immutable/chunks/singletons.6d353db6.js","_app/immutable/chunks/paths.77edf45f.js"];
export const stylesheets = ["_app/immutable/assets/0.bce6b928.css","_app/immutable/assets/Nav.49d196cc.css"];
export const fonts = [];
