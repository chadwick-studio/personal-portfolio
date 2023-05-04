import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
const EmailForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.required.svelte-17kij1q.svelte-17kij1q{margin-top:1em}.email.svelte-17kij1q.svelte-17kij1q,.name.svelte-17kij1q.svelte-17kij1q,.work-type.svelte-17kij1q.svelte-17kij1q,.budget.svelte-17kij1q.svelte-17kij1q,.publish-date.svelte-17kij1q.svelte-17kij1q,.message.svelte-17kij1q.svelte-17kij1q{display:flex;flex-direction:column;margin-bottom:1.25rem}.email.svelte-17kij1q.svelte-17kij1q{grid-area:email}.name.svelte-17kij1q.svelte-17kij1q{grid-area:name}.work-type.svelte-17kij1q.svelte-17kij1q{display:grid;grid-template-columns:1em auto;gap:0.5em;grid-area:work-type}.budget.svelte-17kij1q.svelte-17kij1q{grid-area:budget}.publish-date.svelte-17kij1q.svelte-17kij1q{grid-area:publish-date}.message.svelte-17kij1q.svelte-17kij1q{grid-area:message}.email-form_container.svelte-17kij1q.svelte-17kij1q{--margin:1.25rem;display:grid;place-items:center;border:4px solid black;font-family:"Cooper Hewitt";padding:min(5vw, 50px);max-width:30rem;text-transform:uppercase}input.svelte-17kij1q.svelte-17kij1q,textarea.svelte-17kij1q.svelte-17kij1q{text-transform:none}input.svelte-17kij1q.svelte-17kij1q{width:100%}input.svelte-17kij1q.svelte-17kij1q:not([type=date]){text-transform:none}input[type=submit].svelte-17kij1q.svelte-17kij1q{font-weight:600;margin-top:var(--margin);text-align:center;text-transform:uppercase;grid-area:submit;transform:translateY(0)}input[type=submit].svelte-17kij1q.svelte-17kij1q:active{transform:translateY(3px)}input[type=submit].svelte-17kij1q.svelte-17kij1q:disabled{display:none}input[type=checkbox].svelte-17kij1q.svelte-17kij1q{display:grid;place-items:center;appearance:none;transform:translateY(-0.075em);transition:background-color 150ms}input[type=checkbox].svelte-17kij1q.svelte-17kij1q:checked{background-color:black}label.svelte-17kij1q.svelte-17kij1q:is([for=email], [for=name], [for=message])::after{content:"*";display:inline-block;aspect-ratio:1;width:1em;height:1em;color:black;margin-left:0.1em}input.svelte-17kij1q.svelte-17kij1q:focus-visible,textarea.svelte-17kij1q.svelte-17kij1q:focus-visible{outline:2px solid #3661ff}.email-form.svelte-17kij1q.svelte-17kij1q{display:grid;grid:"email" auto "name" auto "work-type" auto "budget" auto "publish-date" auto "message" auto "submit" auto/1fr}.email-form.svelte-17kij1q input.svelte-17kij1q,.email-form.svelte-17kij1q textarea.svelte-17kij1q{border:2px solid black;padding:0.5em;max-width:30rem}.email-form.svelte-17kij1q legend.svelte-17kij1q,.email-form.svelte-17kij1q label.svelte-17kij1q:not([for=design], [for=development]){text-transform:uppercase;font-size:1.5rem;font-weight:600}.email-form.svelte-17kij1q legend.svelte-17kij1q:not(:nth-of-type(1)),.email-form.svelte-17kij1q label.svelte-17kij1q:not([for=design], [for=development]):not(:nth-of-type(1)){margin-top:var(--margin)}.email-form.svelte-17kij1q textarea.svelte-17kij1q{height:20rem}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="email-form_container svelte-17kij1q"><form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="email-form svelte-17kij1q"><div class="email-form_name"><input type="hidden" name="form-name" value="email-form_name" class="svelte-17kij1q"></div>
		<div class="email svelte-17kij1q"><label for="email" class="svelte-17kij1q">Email</label>
			<input id="email" class="hoverable svelte-17kij1q" type="email" name="email" required></div>
		<div class="name svelte-17kij1q"><label for="name" class="svelte-17kij1q">Name</label>
			<input id="name" class="hoverable svelte-17kij1q" type="text" name="name" required></div>
		<fieldset class="work-type svelte-17kij1q"><legend class="svelte-17kij1q">Work type</legend>

			<input id="development" class="hoverable svelte-17kij1q" type="checkbox" name="development">
			<label for="development" class="svelte-17kij1q">Development</label>

			<input id="design" class="hoverable svelte-17kij1q" type="checkbox" name="design">
			<label for="design" class="svelte-17kij1q">Design</label></fieldset>
		<div class="budget svelte-17kij1q"><label for="budget" class="svelte-17kij1q">Budget (USD)</label>
			<input id="budget" class="hoverable svelte-17kij1q" type="text" inputmode="numeric" name="budget"></div>
		<div class="publish-date svelte-17kij1q"><label for="publish-date" class="svelte-17kij1q">Desired Completion Date</label>
			<input id="publish-date" class="hoverable svelte-17kij1q" type="date" name="publish-date"></div>
		<div class="message svelte-17kij1q"><label for="message" class="svelte-17kij1q">Additional Comments</label>
			<textarea id="message" class="hoverable svelte-17kij1q" name="message" required></textarea></div>
		<input class="hoverable svelte-17kij1q" type="submit" value="Send">
		<p class="required svelte-17kij1q">* = required</p></form>
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
