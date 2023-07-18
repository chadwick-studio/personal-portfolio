import { c as create_ssr_component, a as add_attribute, e as escape, b as each, d as add_styles } from "../../../chunks/index.js";
const projects = [
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
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");:root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}:root{--padding-left:2rem;--hover-animation:all 100ms ease-out;--blue:#0f00ff}.content.svelte-131qq86.svelte-131qq86.svelte-131qq86{font-family:"Poppins";display:grid;grid-template-rows:auto 1fr;height:100%;overflow-y:hidden;overflow-x:auto}@media(max-width: 904px){.content.svelte-131qq86.svelte-131qq86.svelte-131qq86{overflow-y:auto;height:auto}}.header.svelte-131qq86.svelte-131qq86.svelte-131qq86{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-131qq86>h1.svelte-131qq86.svelte-131qq86{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-131qq86>p.svelte-131qq86.svelte-131qq86{width:fit-content;border:1px solid black;padding:16px;line-height:1}@media(max-width: 680px){.header.svelte-131qq86.svelte-131qq86.svelte-131qq86{flex-direction:column}}.main.svelte-131qq86.svelte-131qq86.svelte-131qq86{display:grid;grid-template:1fr/1fr 40rem;gap:4rem;position:relative}@media(max-width: 1200px){.main.svelte-131qq86.svelte-131qq86.svelte-131qq86{grid-template:1fr 28rem/1fr;gap:0}}.project-list-wrapper.svelte-131qq86.svelte-131qq86.svelte-131qq86{position:relative;padding-block:32px;padding-left:64px;border-left:2px solid black;overflow-y:auto;overflow-x:hidden}@media(max-width: 1200px){.project-list-wrapper.svelte-131qq86.svelte-131qq86.svelte-131qq86{padding:16px;overflow-x:auto;overflow-y:hidden;border-left:none;border-top:2px solid black;overscroll-behavior:none}}.project-list.svelte-131qq86.svelte-131qq86.svelte-131qq86{display:flex;flex-direction:column;gap:16px;position:absolute;width:110%}@media(max-width: 1200px){.project-list.svelte-131qq86.svelte-131qq86.svelte-131qq86{flex-direction:row;gap:32px;width:auto;height:110%;transform:translateY(20px)}}.project-item.svelte-131qq86.svelte-131qq86.svelte-131qq86{border:2px solid #000;border-top-left-radius:20px;border-bottom-left-radius:20px;border-right:0;text-transform:uppercase;font-family:"Poppins";transition:var(--hover-animation);overflow:hidden}.project-item.svelte-131qq86.svelte-131qq86.svelte-131qq86:is(:hover, :focus-visible){box-shadow:8px 4px 0 2px black;transform:translateX(-24px);transition:var(--hover-animation)}.project-item.svelte-131qq86>button.svelte-131qq86.svelte-131qq86{transition:background-color 100ms ease-in;cursor:pointer;display:inline-block;width:100%;padding:1.5rem 2rem;line-height:1}.project-item.svelte-131qq86>button li.svelte-131qq86.svelte-131qq86:first-child{font-size:var(--fs-300);font-weight:var(--fw-500);margin-bottom:0.5rem}.project-item.svelte-131qq86>button li.svelte-131qq86.svelte-131qq86:last-child{font-size:var(--fs-100);font-weight:var(--fw-300)}.project-item.svelte-131qq86>button li.svelte-131qq86.svelte-131qq86:last-child::before{content:"/";margin-right:0.25em}@media(max-width: 1200px){.project-item.svelte-131qq86.svelte-131qq86.svelte-131qq86{border:2px solid black;border-radius:20px;rotate:20deg}.project-item.svelte-131qq86.svelte-131qq86.svelte-131qq86:is(:hover, :focus-visible){box-shadow:8px 4px 0 2px black;transform:translateY(-16px);transition:var(--hover-animation)}.project-item.svelte-131qq86>button.svelte-131qq86.svelte-131qq86{display:flex;justify-content:center;align-items:start;width:100%;height:100%}.project-item.svelte-131qq86>button ul.svelte-131qq86.svelte-131qq86{display:flex}.project-item.svelte-131qq86>button li.svelte-131qq86.svelte-131qq86{width:max-content;transform:rotate(-180deg);writing-mode:vertical-lr}.project-item.svelte-131qq86>button li.svelte-131qq86.svelte-131qq86:first-child{font-size:var(--fs-100);margin-bottom:0;margin-block-start:0.5rem}.project-item.svelte-131qq86>button li.svelte-131qq86.svelte-131qq86:last-child{font-size:var(--fs-100)}.project-item.svelte-131qq86>button li.svelte-131qq86.svelte-131qq86:last-child::before{content:"/";margin-right:0.25em}}.current-project.svelte-131qq86.svelte-131qq86.svelte-131qq86{display:grid;grid-template-rows:1fr auto auto;border:2px solid black;border-top-right-radius:20px;border-bottom-right-radius:20px;border-left:none;padding-left:128px;padding-right:64px;padding-block:32px;margin-block:32px}.current-project.svelte-131qq86>p.svelte-131qq86.svelte-131qq86{max-width:60ch}@media(max-width: 1200px){.current-project.svelte-131qq86.svelte-131qq86.svelte-131qq86{border:none;padding-inline:16px;margin:0}}.project-image.svelte-131qq86.svelte-131qq86.svelte-131qq86{display:grid;grid-template-rows:1fr auto;position:relative;height:100%}.project-image.svelte-131qq86>.img-wrapper.svelte-131qq86.svelte-131qq86{width:100%;height:40vh;overflow:hidden;border:1px solid black;border-radius:20px;border-bottom-left-radius:0}.project-image.svelte-131qq86>.img-wrapper.svelte-131qq86>img.svelte-131qq86{object-fit:cover;width:100%;height:100%}.project-image.svelte-131qq86>h2.svelte-131qq86.svelte-131qq86{font-size:var(--fs-100);font-weight:var(--fw-500);line-height:1;text-transform:uppercase;padding:0.75rem;border:1px solid black;border-top:none;width:fit-content;border-radius:8px;border-top-left-radius:0;border-top-right-radius:0;background-color:#87ff4a}.project-image.svelte-131qq86>h2.svelte-131qq86>a.svelte-131qq86::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.project-subheading.svelte-131qq86.svelte-131qq86.svelte-131qq86{align-self:start;display:flex;gap:1em;margin-top:1rem;margin-bottom:1rem}.project-subheading.svelte-131qq86>h3.svelte-131qq86.svelte-131qq86{color:black;font-size:var(--fs-000);line-height:1;padding:1em;border-radius:8px;border:1px solid black;background-color:#f4ff4a}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentProject;
  projects.sort((a, b) => {
    return b.year - a.year;
  });
  let currentProjectIndex = 0;
  $$result.css.add(css);
  currentProject = projects[currentProjectIndex];
  return `

<div class="content svelte-131qq86"><header class="header svelte-131qq86"><h1 class="svelte-131qq86">Portfolio</h1>
		<p class="svelte-131qq86">Checkout his projects!</p></header>
	<main class="main svelte-131qq86"><div class="current-project-container"><div class="current-project svelte-131qq86"><div class="project-image svelte-131qq86"><div class="img-wrapper svelte-131qq86"><img${add_attribute("src", currentProject.src, 0)}${add_attribute("alt", currentProject.alt, 0)} class="svelte-131qq86"></div>
						${currentProject.link ? `<h2 class="svelte-131qq86"><a${add_attribute("href", currentProject.link, 0)} class="svelte-131qq86">${escape(currentProject.title)}</a></h2>` : `<h2 class="svelte-131qq86">${escape(currentProject.title)}</h2>`}</div>
					<div class="project-subheading svelte-131qq86"><h3 class="svelte-131qq86">${escape(currentProject.type)}</h3>
						<h3 class="svelte-131qq86">${escape(currentProject.role)}</h3></div>
					<p class="svelte-131qq86"><!-- HTML_TAG_START -->${currentProject.description}<!-- HTML_TAG_END --></p></div></div>
		<div class="project-list-wrapper svelte-131qq86"><ul class="project-list svelte-131qq86">${each(projects, (project, i) => {
    return `<li class="project-item svelte-131qq86"><button class="svelte-131qq86"${add_styles({
      "background-color": currentProject === project ? "#87ff4a" : "transparent"
    })}><ul class="svelte-131qq86"><li class="svelte-131qq86">${escape(project.title)}</li>
								<li class="svelte-131qq86">${escape(project.year)}</li>
							</ul></button>
					</li>`;
  })}</ul></div></main>
</div>`;
});
export {
  Page as default
};
