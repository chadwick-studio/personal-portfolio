import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.54694716.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.500880a1.js","_app/immutable/chunks/singletons.67042c88.js","_app/immutable/chunks/paths.26f79049.js"];
export const stylesheets = ["_app/immutable/assets/0.f2250d6a.css","_app/immutable/assets/Nav.49d196cc.css"];
export const fonts = [];
