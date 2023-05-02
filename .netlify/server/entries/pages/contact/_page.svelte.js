import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "@emailjs/browser";
const EmailForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.required.svelte-kku0ht.svelte-kku0ht{margin-top:1em}.email-sent.svelte-kku0ht.svelte-kku0ht{font-size:1.5rem}.email.svelte-kku0ht.svelte-kku0ht,.name.svelte-kku0ht.svelte-kku0ht,.work-type.svelte-kku0ht.svelte-kku0ht,.budget.svelte-kku0ht.svelte-kku0ht,.publish-date.svelte-kku0ht.svelte-kku0ht,.message.svelte-kku0ht.svelte-kku0ht{display:flex;flex-direction:column;margin-bottom:1.25rem}.email.svelte-kku0ht.svelte-kku0ht{grid-area:email}.name.svelte-kku0ht.svelte-kku0ht{grid-area:name}.work-type.svelte-kku0ht.svelte-kku0ht{display:grid;grid-template-columns:1em auto;gap:0.5em;grid-area:work-type}.budget.svelte-kku0ht.svelte-kku0ht{grid-area:budget}.publish-date.svelte-kku0ht.svelte-kku0ht{grid-area:publish-date}.message.svelte-kku0ht.svelte-kku0ht{grid-area:message}.email-form_container.svelte-kku0ht.svelte-kku0ht{--margin:1.25rem;display:grid;place-items:center;border:4px solid black;font-family:"Cooper Hewitt";padding:min(5vw, 50px);max-width:30rem;text-transform:uppercase}input.svelte-kku0ht.svelte-kku0ht,textarea.svelte-kku0ht.svelte-kku0ht{text-transform:none}input.svelte-kku0ht.svelte-kku0ht{width:100%}input.svelte-kku0ht.svelte-kku0ht:not([type=date]){text-transform:none}input[type=submit].svelte-kku0ht.svelte-kku0ht{font-weight:600;margin-top:var(--margin);text-align:center;text-transform:uppercase;grid-area:submit;transform:translateY(0)}input[type=submit].svelte-kku0ht.svelte-kku0ht:active{transform:translateY(3px)}input[type=checkbox].svelte-kku0ht.svelte-kku0ht{display:grid;place-items:center;appearance:none;transform:translateY(-0.075em);transition:background-color 150ms}input[type=checkbox].svelte-kku0ht.svelte-kku0ht:checked{background-color:black}label.svelte-kku0ht.svelte-kku0ht:is([for=email], [for=name], [for=message])::after{content:"*";display:inline-block;aspect-ratio:1;width:1em;height:1em;color:black;margin-left:0.1em}input.svelte-kku0ht.svelte-kku0ht:focus-visible,textarea.svelte-kku0ht.svelte-kku0ht:focus-visible{outline:5px solid #3661ff}.email-form.svelte-kku0ht.svelte-kku0ht{display:grid;grid:"email" auto "name" auto "work-type" auto "budget" auto "publish-date" auto "message" auto "submit" auto/1fr}.email-form.svelte-kku0ht input.svelte-kku0ht,.email-form.svelte-kku0ht textarea.svelte-kku0ht{border:2px solid black;padding:0.5em;max-width:30rem}.email-form.svelte-kku0ht legend.svelte-kku0ht,.email-form.svelte-kku0ht label.svelte-kku0ht:not([for=design], [for=development]){text-transform:uppercase;font-size:1.5rem;font-weight:600}.email-form.svelte-kku0ht legend.svelte-kku0ht:not(:nth-of-type(1)),.email-form.svelte-kku0ht label.svelte-kku0ht:not([for=design], [for=development]):not(:nth-of-type(1)){margin-top:var(--margin)}.email-form.svelte-kku0ht textarea.svelte-kku0ht{height:20rem}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="email-form_container svelte-kku0ht">${`<form class="email-form svelte-kku0ht"><div class="email svelte-kku0ht"><label for="email" class="svelte-kku0ht">Email</label>
				<input class="hoverable svelte-kku0ht" type="email" name="email" required></div>
			<div class="name svelte-kku0ht"><label for="name" class="svelte-kku0ht">Name</label>
				<input class="hoverable svelte-kku0ht" type="text" name="name" required></div>
			<fieldset class="work-type svelte-kku0ht"><legend class="svelte-kku0ht">Work type</legend>

				<input class="hoverable svelte-kku0ht" type="checkbox" name="development">
				<label for="development" class="svelte-kku0ht">Development</label>

				<input class="hoverable svelte-kku0ht" type="checkbox" name="design">
				<label for="design" class="svelte-kku0ht">Design</label></fieldset>
			<div class="budget svelte-kku0ht"><label for="budget" class="svelte-kku0ht">Budget (USD)</label>
				<input class="hoverable svelte-kku0ht" type="text" inputmode="numeric" name="budget"></div>
			<div class="publish-date svelte-kku0ht"><label for="publish-date" class="svelte-kku0ht">Desired Completion Date</label>
				<input class="hoverable svelte-kku0ht" type="date" name="publish-date"></div>
			<div class="message svelte-kku0ht"><label for="message" class="svelte-kku0ht">Additional Comments</label>
				<textarea class="hoverable svelte-kku0ht" name="message" required></textarea></div>
			<input class="hoverable svelte-kku0ht" type="submit" value="Send">
			<p class="required svelte-kku0ht">* = required</p></form>`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-1vf1w8d{padding-inline:24px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container"><header class="header"><h1 class="title">Contact</h1>
		<p class="subtitle">Let&#39;s connect!</p></header>
	<main class="main svelte-1vf1w8d">${validate_component(EmailForm, "EmailForm").$$render($$result, {}, {}, {})}</main>
</div>`;
});
export {
  Page as default
};
