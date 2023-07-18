import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.8854b77b.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/stores.f6dc6dd7.js","_app/immutable/chunks/singletons.3afb1eae.js","_app/immutable/chunks/index.ae959d69.js"];
export const stylesheets = ["_app/immutable/assets/0.49dcf2f9.css"];
export const fonts = [];
