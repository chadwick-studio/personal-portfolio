import * as universal from '../entries/pages/(subdirectories)/about/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(subdirectories)/about/+page.js";
export const imports = ["_app/immutable/nodes/4.2a703e7c.js","_app/immutable/chunks/index.243829f9.js"];
export const stylesheets = ["_app/immutable/assets/4.5ad8e16f.css"];
export const fonts = [];
