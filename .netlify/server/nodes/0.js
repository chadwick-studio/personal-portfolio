import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.2945776a.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.eac173b5.js","_app/immutable/chunks/singletons.3967f28c.js","_app/immutable/chunks/paths.247855d2.js"];
export const stylesheets = ["_app/immutable/assets/0.9f3ac1ee.css","_app/immutable/assets/Nav.a914bd5f.css"];
export const fonts = [];
