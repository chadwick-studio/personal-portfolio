import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.23b1103d.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.9fd4b18d.js","_app/immutable/chunks/singletons.a5d650c2.js","_app/immutable/chunks/paths.db36b3aa.js","_app/immutable/chunks/index.5a473649.js"];
export const stylesheets = ["_app/immutable/assets/0.9f3ac1ee.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
