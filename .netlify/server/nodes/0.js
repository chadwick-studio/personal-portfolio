import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.51d098da.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/stores.d66eb02d.js","_app/immutable/chunks/singletons.7508df8d.js","_app/immutable/chunks/index.d6fe139d.js"];
export const stylesheets = ["_app/immutable/assets/0.49dcf2f9.css"];
export const fonts = [];
