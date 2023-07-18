import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.24f2c8eb.js","_app/immutable/chunks/index.624e1a22.js","_app/immutable/chunks/stores.aabdcff7.js","_app/immutable/chunks/singletons.e4277f48.js","_app/immutable/chunks/index.64c6cf68.js"];
export const stylesheets = ["_app/immutable/assets/0.49dcf2f9.css"];
export const fonts = [];
