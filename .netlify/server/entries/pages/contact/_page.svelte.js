import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "@emailjs/browser";
const EmailForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.required.svelte-1h3b3ah.svelte-1h3b3ah{margin-top:1em}.email-sent.svelte-1h3b3ah.svelte-1h3b3ah{font-size:1.5rem}.email.svelte-1h3b3ah.svelte-1h3b3ah,.name.svelte-1h3b3ah.svelte-1h3b3ah,.work-type.svelte-1h3b3ah.svelte-1h3b3ah,.budget.svelte-1h3b3ah.svelte-1h3b3ah,.publish-date.svelte-1h3b3ah.svelte-1h3b3ah,.message.svelte-1h3b3ah.svelte-1h3b3ah{display:flex;flex-direction:column;margin-bottom:1.25rem}.email.svelte-1h3b3ah.svelte-1h3b3ah{grid-area:email}.name.svelte-1h3b3ah.svelte-1h3b3ah{grid-area:name}.work-type.svelte-1h3b3ah.svelte-1h3b3ah{display:grid;grid-template-columns:1em auto;gap:0.5em;grid-area:work-type}.budget.svelte-1h3b3ah.svelte-1h3b3ah{grid-area:budget}.publish-date.svelte-1h3b3ah.svelte-1h3b3ah{grid-area:publish-date}.message.svelte-1h3b3ah.svelte-1h3b3ah{grid-area:message}.email-form_container.svelte-1h3b3ah.svelte-1h3b3ah{--margin:1.25rem;display:grid;place-items:center;border:4px solid black;font-family:"Cooper Hewitt";padding:min(5vw, 50px);max-width:30rem;text-transform:uppercase}input.svelte-1h3b3ah.svelte-1h3b3ah,textarea.svelte-1h3b3ah.svelte-1h3b3ah{text-transform:none}input.svelte-1h3b3ah.svelte-1h3b3ah{width:100%}input.svelte-1h3b3ah.svelte-1h3b3ah:not([type=date]){text-transform:none}input[type=submit].svelte-1h3b3ah.svelte-1h3b3ah{font-weight:600;margin-top:var(--margin);text-align:center;text-transform:uppercase;grid-area:submit;transform:translateY(0)}input[type=submit].svelte-1h3b3ah.svelte-1h3b3ah:active{transform:translateY(3px)}input[type=checkbox].svelte-1h3b3ah.svelte-1h3b3ah{display:grid;place-items:center;appearance:none;transform:translateY(-0.075em);transition:background-color 150ms}input[type=checkbox].svelte-1h3b3ah.svelte-1h3b3ah:checked{background-color:black}label.svelte-1h3b3ah.svelte-1h3b3ah:is([for=email], [for=name], [for=message])::after{content:"*";display:inline-block;aspect-ratio:1;width:1em;height:1em;color:black;margin-left:0.1em}.email-form.svelte-1h3b3ah.svelte-1h3b3ah{display:grid;grid:"email" auto "name" auto "work-type" auto "budget" auto "publish-date" auto "message" auto "submit" auto/1fr}.email-form.svelte-1h3b3ah .svelte-1h3b3ah:focus-visible{outline:5px solid #3661ff}.email-form.svelte-1h3b3ah input.svelte-1h3b3ah,.email-form.svelte-1h3b3ah textarea.svelte-1h3b3ah{border:2px solid black;padding:0.5em;max-width:30rem}.email-form.svelte-1h3b3ah legend.svelte-1h3b3ah,.email-form.svelte-1h3b3ah label.svelte-1h3b3ah:not([for=design], [for=development]){text-transform:uppercase;font-size:1.5rem;font-weight:600}.email-form.svelte-1h3b3ah legend.svelte-1h3b3ah:not(:nth-of-type(1)),.email-form.svelte-1h3b3ah label.svelte-1h3b3ah:not([for=design], [for=development]):not(:nth-of-type(1)){margin-top:var(--margin)}.email-form.svelte-1h3b3ah textarea.svelte-1h3b3ah{height:20rem}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="email-form_container svelte-1h3b3ah">${`<form class="email-form svelte-1h3b3ah"><div class="email svelte-1h3b3ah"><label for="email" class="svelte-1h3b3ah">Email</label>
				<input class="hoverable svelte-1h3b3ah" type="email" name="email" required></div>
			<div class="name svelte-1h3b3ah"><label for="name" class="svelte-1h3b3ah">Name</label>
				<input class="hoverable svelte-1h3b3ah" type="text" name="name" required></div>
			<fieldset class="work-type svelte-1h3b3ah"><legend class="svelte-1h3b3ah">Work type</legend>

				<input class="hoverable svelte-1h3b3ah" type="checkbox" name="development">
				<label for="development" class="svelte-1h3b3ah">Development</label>

				<input class="hoverable svelte-1h3b3ah" type="checkbox" name="design">
				<label for="design" class="svelte-1h3b3ah">Design</label></fieldset>
			<div class="budget svelte-1h3b3ah"><label for="budget" class="svelte-1h3b3ah">Budget (USD)</label>
				<input class="hoverable svelte-1h3b3ah" type="text" inputmode="numeric" name="budget"></div>
			<div class="publish-date svelte-1h3b3ah"><label for="publish-date" class="svelte-1h3b3ah">Desired Completion Date</label>
				<input class="hoverable svelte-1h3b3ah" type="date" name="publish-date"></div>
			<div class="message svelte-1h3b3ah"><label for="message" class="svelte-1h3b3ah">Additional Comments</label>
				<textarea class="hoverable svelte-1h3b3ah" name="message" required></textarea></div>
			<input class="hoverable svelte-1h3b3ah" type="submit" value="Send">
			<p class="required svelte-1h3b3ah">* = required</p></form>`}
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
