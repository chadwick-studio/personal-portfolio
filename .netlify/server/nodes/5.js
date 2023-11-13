import * as universal from '../entries/pages/(subdirectories)/contact/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(subdirectories)/contact/+page.js";
export const imports = ["_app/immutable/nodes/5.6fd39706.js","_app/immutable/chunks/index.243829f9.js"];
export const stylesheets = ["_app/immutable/assets/5.a6b3aea8.css"];
export const fonts = [];
