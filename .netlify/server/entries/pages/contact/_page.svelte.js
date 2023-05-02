import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "@emailjs/browser";
const EmailForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.required.svelte-br1akk.svelte-br1akk{margin-top:1em}.email-sent.svelte-br1akk.svelte-br1akk{font-size:1.5rem}.email.svelte-br1akk.svelte-br1akk,.name.svelte-br1akk.svelte-br1akk,.work-type.svelte-br1akk.svelte-br1akk,.budget.svelte-br1akk.svelte-br1akk,.publish-date.svelte-br1akk.svelte-br1akk,.message.svelte-br1akk.svelte-br1akk{display:flex;flex-direction:column;margin-bottom:1.25rem}.email.svelte-br1akk.svelte-br1akk{grid-area:email}.name.svelte-br1akk.svelte-br1akk{grid-area:name}.work-type.svelte-br1akk.svelte-br1akk{display:grid;grid-template-columns:1em auto;gap:0.5em;grid-area:work-type}.budget.svelte-br1akk.svelte-br1akk{grid-area:budget}.publish-date.svelte-br1akk.svelte-br1akk{grid-area:publish-date}.message.svelte-br1akk.svelte-br1akk{grid-area:message}.email-form_container.svelte-br1akk.svelte-br1akk{--margin:1.25rem;display:grid;place-items:center;border:4px solid black;font-family:"Cooper Hewitt";padding:min(5vw, 50px);max-width:30rem;text-transform:uppercase}input.svelte-br1akk.svelte-br1akk,textarea.svelte-br1akk.svelte-br1akk{text-transform:none}input.svelte-br1akk.svelte-br1akk{width:100%}input.svelte-br1akk.svelte-br1akk:not([type=date]){text-transform:none}input[type=submit].svelte-br1akk.svelte-br1akk{font-weight:600;margin-top:var(--margin);text-align:center;text-transform:uppercase;grid-area:submit;transform:translateY(0)}input[type=submit].svelte-br1akk.svelte-br1akk:active{transform:translateY(3px)}input[type=checkbox].svelte-br1akk.svelte-br1akk{display:grid;place-items:center;appearance:none;transform:translateY(-0.075em);transition:background-color 150ms}input[type=checkbox].svelte-br1akk.svelte-br1akk:checked{background-color:black}label.svelte-br1akk.svelte-br1akk:is([for=email], [for=name], [for=message])::after{content:"*";display:inline-block;aspect-ratio:1;width:1em;height:1em;color:black;margin-left:0.1em}input.svelte-br1akk.svelte-br1akk:focus-visible,textarea.svelte-br1akk.svelte-br1akk:focus-visible{outline:2px solid #3661ff}.email-form.svelte-br1akk.svelte-br1akk{display:grid;grid:"email" auto "name" auto "work-type" auto "budget" auto "publish-date" auto "message" auto "submit" auto/1fr}.email-form.svelte-br1akk input.svelte-br1akk,.email-form.svelte-br1akk textarea.svelte-br1akk{border:2px solid black;padding:0.5em;max-width:30rem}.email-form.svelte-br1akk legend.svelte-br1akk,.email-form.svelte-br1akk label.svelte-br1akk:not([for=design], [for=development]){text-transform:uppercase;font-size:1.5rem;font-weight:600}.email-form.svelte-br1akk legend.svelte-br1akk:not(:nth-of-type(1)),.email-form.svelte-br1akk label.svelte-br1akk:not([for=design], [for=development]):not(:nth-of-type(1)){margin-top:var(--margin)}.email-form.svelte-br1akk textarea.svelte-br1akk{height:20rem}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="email-form_container svelte-br1akk">${`<form class="email-form svelte-br1akk"><div class="email svelte-br1akk"><label for="email" class="svelte-br1akk">Email</label>
				<input id="email" class="hoverable svelte-br1akk" type="email" name="email" required></div>
			<div class="name svelte-br1akk"><label for="name" class="svelte-br1akk">Name</label>
				<input id="name" class="hoverable svelte-br1akk" type="text" name="name" required></div>
			<fieldset class="work-type svelte-br1akk"><legend class="svelte-br1akk">Work type</legend>

				<input id="development" class="hoverable svelte-br1akk" type="checkbox" name="development">
				<label for="development" class="svelte-br1akk">Development</label>

				<input id="design" class="hoverable svelte-br1akk" type="checkbox" name="design">
				<label for="design" class="svelte-br1akk">Design</label></fieldset>
			<div class="budget svelte-br1akk"><label for="budget" class="svelte-br1akk">Budget (USD)</label>
				<input id="budget" class="hoverable svelte-br1akk" type="text" inputmode="numeric" name="budget"></div>
			<div class="publish-date svelte-br1akk"><label for="publish-date" class="svelte-br1akk">Desired Completion Date</label>
				<input id="publish-date" class="hoverable svelte-br1akk" type="date" name="publish-date"></div>
			<div class="message svelte-br1akk"><label for="message" class="svelte-br1akk">Additional Comments</label>
				<textarea id="message" class="hoverable svelte-br1akk" name="message" required></textarea></div>
			<input class="hoverable svelte-br1akk" type="submit" value="Send">
			<p class="required svelte-br1akk">* = required</p></form>`}
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
