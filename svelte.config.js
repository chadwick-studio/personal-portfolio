import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			// these are the aliases and paths to them
			$components: "./src/lib/components",
			$utils: "./src/lib/utils",
		},
	},

	preprocess: preprocess({
		scss: {
			prependData: '@use "src/variables.scss" as *;',
		},
	}),
};

export default config;
