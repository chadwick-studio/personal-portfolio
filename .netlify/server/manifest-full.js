export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Pilowlava/Pilowlava-Regular.woff2","icons/iconmonstr-share-11.svg","images/amanda-samimi-website.png","images/ette-review-refactor.png","images/hmdb-logo.png"]),
	mimeTypes: {".woff2":"font/woff2",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6dd205e2.js","imports":["_app/immutable/entry/start.6dd205e2.js","_app/immutable/chunks/index.65e75478.js","_app/immutable/chunks/singletons.ef880a54.js","_app/immutable/chunks/paths.f4796ef1.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8d0c3efb.js","imports":["_app/immutable/entry/app.8d0c3efb.js","_app/immutable/chunks/index.65e75478.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
