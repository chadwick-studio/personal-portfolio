import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each, d as add_styles } from "../../../chunks/index.js";
const Img_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}img.svelte-fewlcq{transition:200ms opacity ease-in;object-fit:cover}img[data-loaded=false].svelte-fewlcq{opacity:0}",
  map: null
};
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let img;
  let isLoaded = false;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$1);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("data-loaded", isLoaded, 0)} class="svelte-fewlcq"${add_attribute("this", img, 0)}>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");:root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}:root{--padding-left:2rem;--hover-animation:all 100ms ease-out;--blue:#0f00ff}.content.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{font-family:"Poppins";display:grid;grid-template-rows:auto 1fr;height:100%;overflow-y:auto;overflow-x:auto}@media(max-width: 904px){.content.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{overflow-y:auto;height:auto}}.header.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-r9lxbx>h1.svelte-r9lxbx.svelte-r9lxbx{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-r9lxbx>p.svelte-r9lxbx.svelte-r9lxbx{width:fit-content;border:1px solid black;padding:16px;line-height:1}@media(max-width: 680px){.header.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{flex-direction:column}}.main.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{display:grid;grid-template:1fr/1fr 40rem;gap:4rem;position:relative}@media(max-width: 1200px){.main.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{grid-template:1fr 28rem/1fr;gap:0}}.project-list-wrapper.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{position:relative;padding-block:32px;padding-left:64px;border-left:2px solid black;overflow-y:auto;overflow-x:hidden}@media(max-width: 1200px){.project-list-wrapper.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{padding:16px;overflow-x:auto;overflow-y:hidden;border-left:none;border-top:2px solid black;overscroll-behavior:none}}.project-list.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{display:flex;flex-direction:column;gap:16px;position:absolute;width:110%}@media(max-width: 1200px){.project-list.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{flex-direction:row;gap:32px;width:auto;height:110%;transform:translateY(20px)}}.project-item.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{border:2px solid #000;border-top-left-radius:20px;border-bottom-left-radius:20px;border-right:0;text-transform:uppercase;font-family:"Poppins";transition:var(--hover-animation);overflow:hidden}.project-item.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx:is(:hover, :focus-visible){box-shadow:8px 4px 0 2px black;transform:translateX(-24px);transition:var(--hover-animation)}.project-item.svelte-r9lxbx>button.svelte-r9lxbx.svelte-r9lxbx{transition:background-color 100ms ease-in;cursor:pointer;display:inline-block;width:100%;padding:1.5rem 2rem;line-height:1}.project-item.svelte-r9lxbx>button li.svelte-r9lxbx.svelte-r9lxbx:first-child{font-size:var(--fs-300);font-weight:var(--fw-500);margin-bottom:0.5rem}.project-item.svelte-r9lxbx>button li.svelte-r9lxbx.svelte-r9lxbx:last-child{font-size:var(--fs-100);font-weight:var(--fw-300)}.project-item.svelte-r9lxbx>button li.svelte-r9lxbx.svelte-r9lxbx:last-child::before{content:"/";margin-right:0.25em}@media(max-width: 1200px){.project-item.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{border:2px solid black;border-radius:20px;rotate:20deg}.project-item.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx:is(:hover, :focus-visible){box-shadow:8px 4px 0 2px black;transform:translateY(-16px);transition:var(--hover-animation)}.project-item.svelte-r9lxbx>button.svelte-r9lxbx.svelte-r9lxbx{display:flex;justify-content:center;align-items:start;width:100%;height:100%}.project-item.svelte-r9lxbx>button ul.svelte-r9lxbx.svelte-r9lxbx{display:flex}.project-item.svelte-r9lxbx>button li.svelte-r9lxbx.svelte-r9lxbx{width:max-content;transform:rotate(-180deg);writing-mode:vertical-lr}.project-item.svelte-r9lxbx>button li.svelte-r9lxbx.svelte-r9lxbx:first-child{font-size:var(--fs-100);margin-bottom:0;margin-block-start:0.5rem}.project-item.svelte-r9lxbx>button li.svelte-r9lxbx.svelte-r9lxbx:last-child{font-size:var(--fs-100)}.project-item.svelte-r9lxbx>button li.svelte-r9lxbx.svelte-r9lxbx:last-child::before{content:"/";margin-right:0.25em}}.current-project.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{border:2px solid black;border-top-right-radius:20px;border-bottom-right-radius:20px;border-left:none;padding-left:max(128px, 8vw);padding-right:64px;padding-block:32px;margin-block:32px}@media(max-width: 1200px){.current-project.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{border:none;padding-inline:16px;margin:0}}.project-image.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{position:relative}.project-image.svelte-r9lxbx>.img-wrapper.svelte-r9lxbx.svelte-r9lxbx{height:40vh;width:100%;overflow:hidden;border:1px solid black;border-radius:20px;border-bottom-left-radius:0}.project-image.svelte-r9lxbx>.img-wrapper.svelte-r9lxbx>img{width:100%;height:100%}.project-image.svelte-r9lxbx>h2.svelte-r9lxbx.svelte-r9lxbx{font-size:var(--fs-100);font-weight:var(--fw-500);line-height:1;text-transform:uppercase;padding:0.75rem;border:1px solid black;border-top:none;width:fit-content;border-radius:8px;border-top-left-radius:0;border-top-right-radius:0}.project-image.svelte-r9lxbx>h2.svelte-r9lxbx>a.svelte-r9lxbx::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.project-subheading.svelte-r9lxbx.svelte-r9lxbx.svelte-r9lxbx{align-self:start;display:flex;gap:1em;margin-top:1rem;margin-bottom:1rem}.project-subheading.svelte-r9lxbx>h3.svelte-r9lxbx.svelte-r9lxbx{background-color:#87ff4a;color:black;font-size:var(--fs-000);line-height:1;padding:1em;border-radius:8px;border:1px solid black}.project-subheading.svelte-r9lxbx>h3.svelte-r9lxbx.svelte-r9lxbx:first-child{background-color:#664aff}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentProject;
  let currentProjectIndex = 0;
  let projects = [
    {
      title: "Amanda Samimi Art",
      type: "Portfolio",
      role: "Design + Development",
      year: "2023",
      description: "Virtual painting gallery for the artist Amanda Samimi.",
      src: "/images/amanda-samimi-website.png",
      alt: "Website for Amanda Samimi art.",
      link: "https://amandasamimi.com/"
    },
    {
      title: "Historical Marker Database",
      type: "Logo Rebranding + Header Redesign",
      role: "Design",
      year: "2023",
      description: "Reconceptualization of <abbr title='Historical Marker Database'>HMdb</abbr>'s logo and redesign of website's header to be more user friendly and accessible.",
      src: "/images/hmdb-logo.png",
      alt: "The Historical Marker Database logo. It contains the acronym 'HMDB', with a silhouette of a historical marker placed above the ascendor of the letter H.",
      link: "https://github.com/chadwick-studio/hmdb-navbar"
    },
    {
      title: "-ette Magazine",
      type: "CSS Code Refactor",
      role: "Development",
      year: "2023",
      description: "Refactor of CSS code for -ette literary magazine. Organization of code into modules, and utilization of new CSS features like grid and logical properties to facilitate layout production.",
      src: "/images/ette-review-refactor.png",
      alt: "Picture of code for -ette Magazine."
    }
  ];
  projects.sort((a, b) => {
    return b.year - a.year;
  });
  $$result.css.add(css);
  currentProject = projects[currentProjectIndex];
  return `

<div class="content svelte-r9lxbx"><header class="header svelte-r9lxbx"><h1 class="svelte-r9lxbx">Portfolio</h1>
		<p class="svelte-r9lxbx">Checkout his projects!</p></header>
	<main class="main svelte-r9lxbx"><div class="current-project svelte-r9lxbx"><div class="project-image svelte-r9lxbx"><div class="img-wrapper svelte-r9lxbx">${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: currentProject.src,
      alt: currentProject.alt
    },
    {},
    {}
  )}</div>
				${currentProject.link ? `<h2 class="svelte-r9lxbx"><a${add_attribute("href", currentProject.link, 0)} class="svelte-r9lxbx">${escape(currentProject.title)}</a></h2>` : `<h2 class="svelte-r9lxbx">${escape(currentProject.title)}</h2>`}</div>
			<div class="project-subheading svelte-r9lxbx"><h3 class="svelte-r9lxbx">${escape(currentProject.type)}</h3>
				<h3 class="svelte-r9lxbx">${escape(currentProject.role)}</h3></div>
			<p><!-- HTML_TAG_START -->${currentProject.description}<!-- HTML_TAG_END --></p></div>
		<div class="project-list-wrapper svelte-r9lxbx"><ul class="project-list svelte-r9lxbx">${each(projects, (project, i) => {
    return `<li class="project-item svelte-r9lxbx"><button class="svelte-r9lxbx"${add_styles({
      "background-color": currentProject === project ? "#f4ff4a" : "#ff4a9e"
    })}><ul class="svelte-r9lxbx"><li class="svelte-r9lxbx">${escape(project.title)}</li>
								<li class="svelte-r9lxbx">${escape(project.year)}</li>
							</ul></button>
					</li>`;
  })}</ul></div></main>
</div>`;
});
export {
  Page as default
};
