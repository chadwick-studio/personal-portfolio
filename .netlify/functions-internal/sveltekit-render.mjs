import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/cooper_hewitt/CooperHewitt-Bold.woff2","fonts/cooper_hewitt/CooperHewitt-Book.woff2","fonts/cooper_hewitt/CooperHewitt-Heavy.woff2","fonts/cooper_hewitt/CooperHewitt-Light.woff2","fonts/cooper_hewitt/CooperHewitt-Medium.woff2","fonts/cooper_hewitt/CooperHewitt-Semibold.woff2","fonts/cooper_hewitt/CooperHewitt-Thin.woff2","fonts/nacelle/nacelle-light.woff2","fonts/nacelle/nacelle_ultralight.woff2","fonts/tenderness/Tenderness-Regular.woff2","fonts/yard_sale/yardsale.woff2","icons/close.svg","icons/iconmonstr-share-11.svg","icons/menu.svg","images/amanda-samimi_website.png","images/hmdb_logo.png"]),
	mimeTypes: {".woff2":"font/woff2",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f06e1e0b.js","imports":["_app/immutable/entry/start.f06e1e0b.js","_app/immutable/chunks/index.44555a08.js","_app/immutable/chunks/singletons.f72d069e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8b9b22f0.js","imports":["_app/immutable/entry/app.8b9b22f0.js","_app/immutable/chunks/index.44555a08.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
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
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/playground",
				pattern: /^\/playground\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});