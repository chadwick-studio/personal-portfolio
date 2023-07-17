import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.abb3b1fa.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.0adf6cb0.js","_app/immutable/chunks/singletons.c69aa699.js","_app/immutable/chunks/paths.969718e6.js","_app/immutable/chunks/index.5a473649.js"];
export const stylesheets = ["_app/immutable/assets/0.9f3ac1ee.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
