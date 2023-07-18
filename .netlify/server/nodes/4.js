import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.d2fc1c1b.js","_app/immutable/chunks/index.624e1a22.js"];
export const stylesheets = ["_app/immutable/assets/4.6cfde321.css"];
export const fonts = [];
