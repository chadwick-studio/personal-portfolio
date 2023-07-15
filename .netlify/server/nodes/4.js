import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.4e9a09d3.js","_app/immutable/chunks/index.fc9ba97a.js"];
export const stylesheets = ["_app/immutable/assets/4.6cfde321.css"];
export const fonts = [];
