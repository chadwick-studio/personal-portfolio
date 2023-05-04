import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
const EmailForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.required.svelte-xc25p6.svelte-xc25p6{margin-top:1em}.email.svelte-xc25p6.svelte-xc25p6,.name.svelte-xc25p6.svelte-xc25p6,.work-type.svelte-xc25p6.svelte-xc25p6,.budget.svelte-xc25p6.svelte-xc25p6,.publish-date.svelte-xc25p6.svelte-xc25p6,.message.svelte-xc25p6.svelte-xc25p6{display:flex;flex-direction:column;margin-bottom:1.25rem}.email.svelte-xc25p6.svelte-xc25p6{grid-area:email}.name.svelte-xc25p6.svelte-xc25p6{grid-area:name}.work-type.svelte-xc25p6.svelte-xc25p6{display:grid;grid-template-columns:1em auto;gap:0.5em;grid-area:work-type}.budget.svelte-xc25p6.svelte-xc25p6{grid-area:budget}.publish-date.svelte-xc25p6.svelte-xc25p6{grid-area:publish-date}.message.svelte-xc25p6.svelte-xc25p6{grid-area:message}.email-form_container.svelte-xc25p6.svelte-xc25p6{--margin:1.25rem;display:grid;place-items:center;border:4px solid black;font-family:"Cooper Hewitt";padding:min(5vw, 50px);max-width:30rem;text-transform:uppercase}input.svelte-xc25p6.svelte-xc25p6,textarea.svelte-xc25p6.svelte-xc25p6{text-transform:none}button.svelte-xc25p6.svelte-xc25p6{width:100%;font-weight:600;margin-top:var(--margin);text-align:center;text-transform:uppercase;grid-area:submit;transform:translateY(0)}button.svelte-xc25p6.svelte-xc25p6:active{transform:translateY(3px)}input.svelte-xc25p6.svelte-xc25p6{width:100%}input.svelte-xc25p6.svelte-xc25p6:not([type=date]){text-transform:none}input[type=checkbox].svelte-xc25p6.svelte-xc25p6{display:grid;place-items:center;appearance:none;transform:translateY(-0.075em);transition:background-color 150ms}input[type=checkbox].svelte-xc25p6.svelte-xc25p6:checked{background-color:black}label.svelte-xc25p6.svelte-xc25p6:is([for=email], [for=name], [for=message])::after{content:"*";display:inline-block;aspect-ratio:1;width:1em;height:1em;color:black;margin-left:0.1em}input.svelte-xc25p6.svelte-xc25p6:focus-visible,textarea.svelte-xc25p6.svelte-xc25p6:focus-visible,button.svelte-xc25p6.svelte-xc25p6:focus-visible{outline:2px solid #3661ff}.email-form.svelte-xc25p6.svelte-xc25p6{display:grid;grid:"email" auto "name" auto "work-type" auto "budget" auto "publish-date" auto "message" auto "submit" auto/1fr}.email-form.svelte-xc25p6 input.svelte-xc25p6,.email-form.svelte-xc25p6 textarea.svelte-xc25p6,.email-form.svelte-xc25p6 button.svelte-xc25p6{border:2px solid black;padding:0.5em;max-width:30rem}.email-form.svelte-xc25p6 legend.svelte-xc25p6,.email-form.svelte-xc25p6 label.svelte-xc25p6:not([for=design], [for=development]){text-transform:uppercase;font-size:1.5rem;font-weight:600}.email-form.svelte-xc25p6 legend.svelte-xc25p6:not(:nth-of-type(1)),.email-form.svelte-xc25p6 label.svelte-xc25p6:not([for=design], [for=development]):not(:nth-of-type(1)){margin-top:var(--margin)}.email-form.svelte-xc25p6 textarea.svelte-xc25p6{height:20rem}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="email-form_container svelte-xc25p6"><form class="email-form svelte-xc25p6" name="contact" method="POST" netlify netlify-honeypot="bot-field"><div class="email-form_name"><input type="hidden" name="form-name" value="contact" class="svelte-xc25p6"></div>
		<div class="email svelte-xc25p6"><label for="email" class="svelte-xc25p6">Email</label>
			<input id="email" class="hoverable svelte-xc25p6" type="email" name="email" required></div>
		<div class="name svelte-xc25p6"><label for="name" class="svelte-xc25p6">Name</label>
			<input id="name" class="hoverable svelte-xc25p6" type="text" name="name" required></div>
		<fieldset class="work-type svelte-xc25p6"><legend class="svelte-xc25p6">Work type</legend>

			<input id="development" class="hoverable svelte-xc25p6" type="checkbox" name="development">
			<label for="development" class="svelte-xc25p6">Development</label>

			<input id="design" class="hoverable svelte-xc25p6" type="checkbox" name="design">
			<label for="design" class="svelte-xc25p6">Design</label></fieldset>
		<div class="budget svelte-xc25p6"><label for="budget" class="svelte-xc25p6">Budget (USD)</label>
			<input id="budget" class="hoverable svelte-xc25p6" type="text" inputmode="numeric" name="budget"></div>
		<div class="publish-date svelte-xc25p6"><label for="publish-date" class="svelte-xc25p6">Desired Completion Date</label>
			<input id="publish-date" class="hoverable svelte-xc25p6" type="date" name="publish-date"></div>
		<div class="message svelte-xc25p6"><label for="message" class="svelte-xc25p6">Additional Comments</label>
			<textarea id="message" class="hoverable svelte-xc25p6" name="message" required></textarea></div>
		<button class="hoverable svelte-xc25p6" type="submit">Send</button>
		<p class="required svelte-xc25p6">* = required</p></form>
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
