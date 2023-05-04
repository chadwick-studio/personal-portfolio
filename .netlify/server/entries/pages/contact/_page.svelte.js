import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
const EmailForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.required.svelte-eu6qir.svelte-eu6qir{margin-top:1em}.email.svelte-eu6qir.svelte-eu6qir,.name.svelte-eu6qir.svelte-eu6qir,.work-type.svelte-eu6qir.svelte-eu6qir,.budget.svelte-eu6qir.svelte-eu6qir,.publish-date.svelte-eu6qir.svelte-eu6qir,.message.svelte-eu6qir.svelte-eu6qir{display:flex;flex-direction:column;margin-bottom:1.25rem}.email.svelte-eu6qir.svelte-eu6qir{grid-area:email}.name.svelte-eu6qir.svelte-eu6qir{grid-area:name}.work-type.svelte-eu6qir.svelte-eu6qir{display:grid;grid-template-columns:1em auto;gap:0.5em;grid-area:work-type}.budget.svelte-eu6qir.svelte-eu6qir{grid-area:budget}.publish-date.svelte-eu6qir.svelte-eu6qir{grid-area:publish-date}.message.svelte-eu6qir.svelte-eu6qir{grid-area:message}.email-form_container.svelte-eu6qir.svelte-eu6qir{--margin:1.25rem;display:grid;place-items:center;border:4px solid black;font-family:"Cooper Hewitt";padding:min(5vw, 50px);max-width:30rem;text-transform:uppercase}input.svelte-eu6qir.svelte-eu6qir,textarea.svelte-eu6qir.svelte-eu6qir{text-transform:none}button.svelte-eu6qir.svelte-eu6qir{font-weight:600;margin-top:var(--margin);text-align:center;text-transform:uppercase;grid-area:submit;transform:translateY(0)}button.svelte-eu6qir.svelte-eu6qir:active{transform:translateY(3px)}button.svelte-eu6qir.svelte-eu6qir:disabled{display:none}input.svelte-eu6qir.svelte-eu6qir{width:100%}input.svelte-eu6qir.svelte-eu6qir:not([type=date]){text-transform:none}input[type=checkbox].svelte-eu6qir.svelte-eu6qir{display:grid;place-items:center;appearance:none;transform:translateY(-0.075em);transition:background-color 150ms}input[type=checkbox].svelte-eu6qir.svelte-eu6qir:checked{background-color:black}label.svelte-eu6qir.svelte-eu6qir:is([for=email], [for=name], [for=message])::after{content:"*";display:inline-block;aspect-ratio:1;width:1em;height:1em;color:black;margin-left:0.1em}input.svelte-eu6qir.svelte-eu6qir:focus-visible,textarea.svelte-eu6qir.svelte-eu6qir:focus-visible,button.svelte-eu6qir.svelte-eu6qir:focus-visible{outline:2px solid #3661ff}.email-form.svelte-eu6qir.svelte-eu6qir{display:grid;grid:"email" auto "name" auto "work-type" auto "budget" auto "publish-date" auto "message" auto "submit" auto/1fr}.email-form.svelte-eu6qir input.svelte-eu6qir,.email-form.svelte-eu6qir textarea.svelte-eu6qir{border:2px solid black;padding:0.5em;max-width:30rem}.email-form.svelte-eu6qir legend.svelte-eu6qir,.email-form.svelte-eu6qir label.svelte-eu6qir:not([for=design], [for=development]){text-transform:uppercase;font-size:1.5rem;font-weight:600}.email-form.svelte-eu6qir legend.svelte-eu6qir:not(:nth-of-type(1)),.email-form.svelte-eu6qir label.svelte-eu6qir:not([for=design], [for=development]):not(:nth-of-type(1)){margin-top:var(--margin)}.email-form.svelte-eu6qir textarea.svelte-eu6qir{height:20rem}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="email-form_container svelte-eu6qir"><form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="email-form svelte-eu6qir"><div class="email-form_name"><input type="hidden" name="form-name" value="email-form_name" class="svelte-eu6qir"></div>
		<div class="email svelte-eu6qir"><label for="email" class="svelte-eu6qir">Email</label>
			<input id="email" class="hoverable svelte-eu6qir" type="email" name="email" required></div>
		<div class="name svelte-eu6qir"><label for="name" class="svelte-eu6qir">Name</label>
			<input id="name" class="hoverable svelte-eu6qir" type="text" name="name" required></div>
		<fieldset class="work-type svelte-eu6qir"><legend class="svelte-eu6qir">Work type</legend>

			<input id="development" class="hoverable svelte-eu6qir" type="checkbox" name="development">
			<label for="development" class="svelte-eu6qir">Development</label>

			<input id="design" class="hoverable svelte-eu6qir" type="checkbox" name="design">
			<label for="design" class="svelte-eu6qir">Design</label></fieldset>
		<div class="budget svelte-eu6qir"><label for="budget" class="svelte-eu6qir">Budget (USD)</label>
			<input id="budget" class="hoverable svelte-eu6qir" type="text" inputmode="numeric" name="budget"></div>
		<div class="publish-date svelte-eu6qir"><label for="publish-date" class="svelte-eu6qir">Desired Completion Date</label>
			<input id="publish-date" class="hoverable svelte-eu6qir" type="date" name="publish-date"></div>
		<div class="message svelte-eu6qir"><label for="message" class="svelte-eu6qir">Additional Comments</label>
			<textarea id="message" class="hoverable svelte-eu6qir" name="message" required></textarea></div>
		<button class="hoverable svelte-eu6qir" type="submit">Send</button>
		<p class="required svelte-eu6qir">* = required</p></form>
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
