import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.12ceb22f.js","_app/immutable/chunks/index.d4dab233.js","_app/immutable/chunks/stores.b0ef13f6.js","_app/immutable/chunks/singletons.15d1dad3.js","_app/immutable/chunks/paths.b62d4646.js"];
export const stylesheets = ["_app/immutable/assets/0.9f3ac1ee.css","_app/immutable/assets/Nav.241d2652.css"];
export const fonts = [];
