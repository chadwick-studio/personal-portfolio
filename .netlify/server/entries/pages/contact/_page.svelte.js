import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.content.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{font-family:"Poppins";display:grid;grid-template-rows:auto 1fr;height:100%;overflow-y:auto}@media(max-width: 677px){.content.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{height:auto}}.header.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-1ikdq3m>h1.svelte-1ikdq3m.svelte-1ikdq3m{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-1ikdq3m>p.svelte-1ikdq3m.svelte-1ikdq3m{border:1px solid black;padding:1rem;line-height:1;width:fit-content}@media(max-width: 677px){.header.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{flex-direction:column}}.main.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{padding-block:32px;padding-inline:32px;overflow-y:auto}@media(max-width: 767px){.main.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{overflow-y:visible}}.contact-form.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{border:2px solid black;border-radius:20px;padding:32px;max-width:768px}p.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{line-height:1.5;max-width:60ch}.contact-form.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{display:grid}.contact-form.svelte-1ikdq3m>p.svelte-1ikdq3m.svelte-1ikdq3m:last-child{margin-top:1rem}input.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m:is([type=text], [type=email]){width:100%}label.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{display:grid}.inputs.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{display:flex;gap:1rem}@media(max-width: 560px){.inputs.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{flex-direction:column;gap:0}}fieldset.svelte-1ikdq3m>.inputs.svelte-1ikdq3m>label.svelte-1ikdq3m{grid-template-columns:1em auto;gap:0.5em;align-items:center}input.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m:is([type=radio], [type=checkbox]){display:grid;place-content:center;font:inherit;color:currentColor;width:1em;height:1em;border:1px solid currentColor;transform:translateY(-0.075em)}input.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m:is([type=radio], [type=checkbox])::before{content:"";width:0.75em;height:0.75em;transition:150ms transform ease-in-out;transform:scale(0);background-color:#87ff4a}input.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m:is([type=radio], [type=checkbox]):checked::before{transform:scale(1)}input[type=radio].svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{border-radius:100vw}input[type=radio].svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m::before{border-radius:100vw;background-color:#ff4a9e}label.svelte-1ikdq3m>input.svelte-1ikdq3m.svelte-1ikdq3m{border:1px solid black;padding:0.5rem}.contact-form.svelte-1ikdq3m>label.svelte-1ikdq3m+label.svelte-1ikdq3m{margin-top:1rem}.contact-form.svelte-1ikdq3m>fieldset.svelte-1ikdq3m+label.svelte-1ikdq3m{margin-top:1rem}fieldset.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{margin-top:1rem}button.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{margin-top:1rem;background-color:#664aff;text-align:center;padding-block:0.75em;text-transform:uppercase;font-weight:600;border:1px solid black}button.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m:active{transform:translateY(1px)}textarea.svelte-1ikdq3m.svelte-1ikdq3m.svelte-1ikdq3m{border:1px solid black;padding:0.5rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-1ikdq3m"><header class="header svelte-1ikdq3m"><h1 class="svelte-1ikdq3m">Contact</h1>
		<p class="svelte-1ikdq3m">Let&#39;s create a website!</p></header>
	<main class="main svelte-1ikdq3m"><form class="contact-form svelte-1ikdq3m" name="contact" method="post" netlify netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="contact" class="svelte-1ikdq3m">
			<label for="name" class="svelte-1ikdq3m">Name *
				<input id="name" type="text" name="name" required class="svelte-1ikdq3m"></label>
			<label for="email" class="svelte-1ikdq3m">Email *
				<input id="email" type="email" name="email" required class="svelte-1ikdq3m"></label>
			<fieldset class="svelte-1ikdq3m"><legend>What type of services do you need? *
				</legend>
				<div class="inputs svelte-1ikdq3m"><label for="development" class="svelte-1ikdq3m"><input id="development" type="checkbox" name="services" value="development" class="svelte-1ikdq3m">
						Development
					</label>
					<label for="design" class="svelte-1ikdq3m"><input id="design" type="checkbox" name="services" value="design" class="svelte-1ikdq3m">
						Design
					</label>
					<label for="design" class="svelte-1ikdq3m"><input id="design" type="checkbox" name="services" value="other" class="svelte-1ikdq3m">
						Other
					</label></div></fieldset>
			<fieldset class="svelte-1ikdq3m"><legend>What&#39;s your budget? (optional)
				</legend>
				<div class="inputs svelte-1ikdq3m"><label for="2k" class="svelte-1ikdq3m"><input id="2k" type="radio" name="budget" value="2k-4k" class="svelte-1ikdq3m">
						$2k-$4k
					</label>
					<label for="4k" class="svelte-1ikdq3m"><input id="design" type="radio" name="budget" value="4k-8k" class="svelte-1ikdq3m">
						$4k-$8k
					</label>
					<label for="8k" class="svelte-1ikdq3m"><input id="design" type="radio" name="budget" value="8k-12k" class="svelte-1ikdq3m">
						$8k-$12k
					</label>

					<label for="12k" class="svelte-1ikdq3m"><input id="design" type="radio" name="budget" value="12k+" class="svelte-1ikdq3m">
						$12k+
					</label></div></fieldset>
			<label for="publish-date" class="svelte-1ikdq3m">Desired Completion Date (optional)
				<input id="publish-date" type="date" name="publish-date" class="svelte-1ikdq3m"></label>
			<label for="message" class="svelte-1ikdq3m">Leave a message! *
				<textarea id="message" name="message" rows="10" required class="svelte-1ikdq3m"></textarea></label>
			<button type="submit" class="svelte-1ikdq3m">Send</button>
			<p class="svelte-1ikdq3m">* = required</p></form></main>
</div>`;
});
export {
  Page as default
};
