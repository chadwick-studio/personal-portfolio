import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.4b1b05b6.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/stores.a30de834.js","_app/immutable/chunks/singletons.e4fbb049.js","_app/immutable/chunks/index.79edeb2f.js"];
export const stylesheets = ["_app/immutable/assets/0.49dcf2f9.css"];
export const fonts = [];
