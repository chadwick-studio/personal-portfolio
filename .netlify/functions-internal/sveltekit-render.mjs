import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon/about.txt","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/site.webmanifest","fonts/Pilowlava/Pilowlava-Regular.woff2","icons/iconmonstr-share-11.svg","images/amanda-samimi-website.png","images/ette-review-refactor.png","images/hmdb-logo.png"]),
	mimeTypes: {".txt":"text/plain",".png":"image/png",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json",".woff2":"font/woff2",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.1cd6a54b.js","app":"_app/immutable/entry/app.b58f86ec.js","imports":["_app/immutable/entry/start.1cd6a54b.js","_app/immutable/chunks/index.4fe0e47b.js","_app/immutable/chunks/singletons.e4fbb049.js","_app/immutable/entry/app.b58f86ec.js","_app/immutable/chunks/index.4fe0e47b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
