import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.d240181c.js","_app/immutable/chunks/index.4fe0e47b.js"];
export const stylesheets = ["_app/immutable/assets/4.6cfde321.css"];
export const fonts = [];
