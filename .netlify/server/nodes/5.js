import * as universal from '../entries/pages/(subdirectories)/contact/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(subdirectories)/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(subdirectories)/contact/+page.js";
export const imports = ["_app/immutable/nodes/5.cc66be5f.js","_app/immutable/chunks/index.828ada48.js"];
export const stylesheets = ["_app/immutable/assets/5.2a1b66d7.css"];
export const fonts = [];
