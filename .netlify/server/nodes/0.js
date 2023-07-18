import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.9bbbd0af.js","_app/immutable/chunks/index.fc9ba97a.js","_app/immutable/chunks/stores.2594c8db.js","_app/immutable/chunks/singletons.aecbdec8.js","_app/immutable/chunks/paths.9868329f.js","_app/immutable/chunks/Nav.svelte_svelte_type_style_lang.23df724f.js"];
export const stylesheets = ["_app/immutable/assets/0.9f3ac1ee.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
