import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.1c15eb11.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.8ee15ee4.js","_app/immutable/chunks/singletons.fcd27eaa.js","_app/immutable/chunks/paths.e9380626.js"];
export const stylesheets = ["_app/immutable/assets/0.9f3ac1ee.css","_app/immutable/assets/Nav.49d196cc.css"];
export const fonts = [];
