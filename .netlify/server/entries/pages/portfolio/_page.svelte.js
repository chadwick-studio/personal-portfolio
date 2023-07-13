import { c as create_ssr_component, a as add_attribute, e as escape, b as each, d as add_styles } from "../../../chunks/index.js";
/* empty css                                                 */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");:root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}:root{--padding-left:2rem;--hover-animation:all 100ms ease-out;--blue:#0f00ff}.content.svelte-13oh8l2.svelte-13oh8l2{font-family:"Poppins";display:grid;grid-template-rows:auto 1fr;height:100svh}@media(max-width: 904px){.content.svelte-13oh8l2.svelte-13oh8l2{overflow-y:auto;height:auto}}.header.svelte-13oh8l2.svelte-13oh8l2{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-13oh8l2>h1.svelte-13oh8l2{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-13oh8l2>p.svelte-13oh8l2{width:fit-content;border:1px solid black;padding:16px;line-height:1}@media(max-width: 680px){.header.svelte-13oh8l2.svelte-13oh8l2{flex-direction:column}}.main.svelte-13oh8l2.svelte-13oh8l2{display:grid;grid-template:1fr/3fr 2fr;gap:4rem;position:relative}@media(max-width: 904px){.main.svelte-13oh8l2.svelte-13oh8l2{grid-template:1fr 28rem/1fr;gap:0}}.project-list-wrapper.svelte-13oh8l2.svelte-13oh8l2{position:relative;padding-block:32px;padding-left:64px;border-left:2px solid black;overflow-y:auto;overflow-x:hidden}@media(max-width: 904px){.project-list-wrapper.svelte-13oh8l2.svelte-13oh8l2{padding:16px;overflow-x:auto;overflow-y:hidden;border-left:none;border-top:2px solid black;overscroll-behavior:none}}.project-list.svelte-13oh8l2.svelte-13oh8l2{display:flex;flex-direction:column;gap:16px;position:absolute;width:110%}@media(max-width: 904px){.project-list.svelte-13oh8l2.svelte-13oh8l2{flex-direction:row;gap:32px;width:auto;height:110%;transform:translateY(20px)}}.project-item.svelte-13oh8l2.svelte-13oh8l2{border:2px solid #000;border-top-left-radius:20px;border-bottom-left-radius:20px;border-right:0;text-transform:uppercase;font-family:"Poppins";transition:var(--hover-animation);overflow:hidden}.project-item.svelte-13oh8l2.svelte-13oh8l2:is(:hover, :focus-visible){box-shadow:8px 4px 0 2px black;transform:translateX(-24px);transition:var(--hover-animation)}.project-item.svelte-13oh8l2>button.svelte-13oh8l2{transition:background-color 100ms ease-in;cursor:pointer;display:inline-block;width:100%;padding:1.5rem 2rem;line-height:1}.project-item.svelte-13oh8l2>button li.svelte-13oh8l2:first-child{font-size:var(--fs-300);font-weight:var(--fw-500);margin-bottom:0.5rem}.project-item.svelte-13oh8l2>button li.svelte-13oh8l2:last-child{font-size:var(--fs-100);font-weight:var(--fw-300)}.project-item.svelte-13oh8l2>button li.svelte-13oh8l2:last-child::before{content:"/";margin-right:0.25em}@media(max-width: 904px){.project-item.svelte-13oh8l2.svelte-13oh8l2{border:2px solid black;border-radius:20px;rotate:20deg}.project-item.svelte-13oh8l2.svelte-13oh8l2:is(:hover, :focus-visible){box-shadow:8px 4px 0 2px black;transform:translateY(-16px);transition:var(--hover-animation)}.project-item.svelte-13oh8l2>button.svelte-13oh8l2{display:flex;justify-content:center;align-items:start;width:100%;height:100%}.project-item.svelte-13oh8l2>button ul.svelte-13oh8l2{display:flex}.project-item.svelte-13oh8l2>button li.svelte-13oh8l2{width:max-content;transform:rotate(-180deg);writing-mode:vertical-lr}.project-item.svelte-13oh8l2>button li.svelte-13oh8l2:first-child{font-size:var(--fs-100);margin-bottom:0;margin-block-start:0.5rem}.project-item.svelte-13oh8l2>button li.svelte-13oh8l2:last-child{font-size:var(--fs-100)}.project-item.svelte-13oh8l2>button li.svelte-13oh8l2:last-child::before{content:"/";margin-right:0.25em}}.current-project.svelte-13oh8l2.svelte-13oh8l2{border:2px solid black;border-top-right-radius:20px;border-bottom-right-radius:20px;border-left:none;padding-left:128px;padding-right:64px;margin-block:32px;padding-block:32px}@media(max-width: 904px){.current-project.svelte-13oh8l2.svelte-13oh8l2{border:none;padding-inline:16px;margin:0}}img.svelte-13oh8l2.svelte-13oh8l2{width:100%;height:300px;overflow:hidden;object-fit:cover;border:1px solid black;border-radius:20px;border-bottom-left-radius:0}h2.svelte-13oh8l2.svelte-13oh8l2{font-size:var(--fs-100);font-weight:var(--fw-500);line-height:1;text-transform:uppercase;padding:0.75rem;border:1px solid black;border-top:none;width:fit-content;border-radius:8px;border-top-left-radius:0;border-top-right-radius:0}p.svelte-13oh8l2.svelte-13oh8l2{max-width:60ch}.project-subheading.svelte-13oh8l2.svelte-13oh8l2{display:flex;gap:1em;margin-top:0.5rem;margin-bottom:1rem}.project-subheading.svelte-13oh8l2>h3.svelte-13oh8l2{background-color:#87ff4a;color:black;font-size:var(--fs-000);line-height:1;padding:1em;border-radius:8px;border:1px solid black}.project-subheading.svelte-13oh8l2>h3.svelte-13oh8l2:first-child{background-color:#664aff}',
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
      alt: "Test"
    },
    {
      title: "Historical Marker Database",
      type: "Logo Rebranding + Header Redesign",
      role: "Design",
      year: "2023",
      description: "Reconceptualization of <abbr title='Historical Marker Database'>HMdb</abbr>'s logo and redesign of website's header to be more user friendly and accessible.",
      src: "/images/hmdb-logo.png",
      alt: "The Historical Marker Database logo. It contains the acronym 'HMDB', with a silhouette of a historical marker placed above the ascendor of the letter H."
    },
    {
      title: "-ette Magazine",
      type: "CSS Code Refactor",
      role: "Development",
      year: "2023",
      description: "Refactor of CSS code for -ette literary magazine. Organized code into modules, and utilized new CSS features like grid and logical properties to make layouts easier to work with.",
      src: "/images/ette-review-refactor.png",
      alt: "Test"
    }
  ];
  projects.sort((a, b) => {
    return b.year - a.year;
  });
  $$result.css.add(css);
  currentProject = projects[currentProjectIndex];
  return `

<div class="content svelte-13oh8l2"><header class="header svelte-13oh8l2"><h1 class="svelte-13oh8l2">Portfolio</h1>
		<p class="svelte-13oh8l2">Checkout the projects I&#39;ve done!</p></header>
	<main class="main svelte-13oh8l2"><div class="current-project svelte-13oh8l2"><img${add_attribute("src", currentProject.src, 0)}${add_attribute("alt", currentProject.alt, 0)} class="svelte-13oh8l2">
			<h2 class="svelte-13oh8l2">${escape(currentProject.title)}</h2>
			<div class="project-subheading svelte-13oh8l2"><h3 class="svelte-13oh8l2">${escape(currentProject.type)}</h3>
				<h3 class="svelte-13oh8l2">${escape(currentProject.role)}</h3></div>
			<p class="svelte-13oh8l2"><!-- HTML_TAG_START -->${currentProject.description}<!-- HTML_TAG_END --></p></div>
		<div class="project-list-wrapper svelte-13oh8l2"><ul class="project-list svelte-13oh8l2">${each(projects, (project, i) => {
    return `<li class="project-item svelte-13oh8l2"><button class="svelte-13oh8l2"${add_styles({
      "background-color": currentProject === project ? "#f4ff4a" : "#ff4a9e"
    })}><ul class="svelte-13oh8l2"><li class="svelte-13oh8l2">${escape(project.title)}</li>
								<li class="svelte-13oh8l2">${escape(project.year)}</li>
							</ul></button>
					</li>`;
  })}</ul></div></main>
</div>`;
});
export {
  Page as default
};
