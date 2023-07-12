import preprocess from "svelte-preprocess";
import seqPreprocessor from "svelte-sequential-preprocessor";
import { preprocessThrelte } from "@threlte/preprocess";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			// these are the aliases and paths to them
			$components: "./src/lib/components",
			$utils: "./src/lib/utils",
		},
	},

	preprocess: seqPreprocessor([
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
		preprocessThrelte(),
	]),
};

export default config;
