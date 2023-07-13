import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.c6e58ea7.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.96b3de7e.js","_app/immutable/chunks/singletons.d36353ff.js","_app/immutable/chunks/paths.bc6cd462.js"];
export const stylesheets = ["_app/immutable/assets/0.9f3ac1ee.css","_app/immutable/assets/Nav.a914bd5f.css"];
export const fonts = [];
