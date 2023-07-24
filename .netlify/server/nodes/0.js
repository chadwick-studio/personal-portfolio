import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.0fe07158.js","_app/immutable/chunks/index.828ada48.js","_app/immutable/chunks/stores.4930cf4c.js","_app/immutable/chunks/singletons.0c0f4bb6.js"];
export const stylesheets = ["_app/immutable/assets/0.49dcf2f9.css"];
export const fonts = [];
