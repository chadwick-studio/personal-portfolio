import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.content.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{height:100vh;font-family:"Poppins";display:grid;grid-template-rows:auto 1fr}.header.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-1sqcbm3>h1.svelte-1sqcbm3.svelte-1sqcbm3{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-1sqcbm3>p.svelte-1sqcbm3.svelte-1sqcbm3{border:1px solid black;padding:1rem;line-height:1;width:fit-content}@media(max-width: 677px){.header.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{flex-direction:column}}.main.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{padding-block:32px;padding-inline:32px;overflow-y:auto}@media(max-width: 767px){.main.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{overflow-y:visible}}.contact-form.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{border:2px solid black;border-radius:20px;padding:32px;max-width:768px}p.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{line-height:1.5;max-width:60ch}.contact-form.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{display:grid}.contact-form.svelte-1sqcbm3>p.svelte-1sqcbm3.svelte-1sqcbm3:last-child{margin-top:1rem}input.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3:is([type=text], [type=email]){width:100%}label.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{display:grid}.inputs.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{display:flex;gap:1rem}@media(max-width: 500px){.inputs.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{flex-direction:column;gap:0}}fieldset.svelte-1sqcbm3>.inputs.svelte-1sqcbm3>label.svelte-1sqcbm3{grid-template-columns:1em auto;gap:0.5em;align-items:center}input.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3:is([type=radio], [type=checkbox]){display:grid;place-content:center;font:inherit;color:currentColor;width:1em;height:1em;border:1px solid currentColor;transform:translateY(-0.075em)}input.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3:is([type=radio], [type=checkbox])::before{content:"";width:0.75em;height:0.75em;transition:150ms transform ease-in-out;transform:scale(0);background-color:#87ff4a}input.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3:is([type=radio], [type=checkbox]):checked::before{transform:scale(1)}input[type=radio].svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{border-radius:100vw}input[type=radio].svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3::before{border-radius:100vw;background-color:#ff4a9e}label.svelte-1sqcbm3>input.svelte-1sqcbm3.svelte-1sqcbm3{border:1px solid black;padding:0.5rem}.contact-form.svelte-1sqcbm3>label.svelte-1sqcbm3+label.svelte-1sqcbm3{margin-top:1rem}.contact-form.svelte-1sqcbm3>fieldset.svelte-1sqcbm3+label.svelte-1sqcbm3{margin-top:1rem}fieldset.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{margin-top:1rem}button.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{margin-top:1rem;background-color:#664aff;text-align:center;padding-block:0.75em;text-transform:uppercase;font-weight:600;border:1px solid black}button.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3:active{transform:translateY(1px)}textarea.svelte-1sqcbm3.svelte-1sqcbm3.svelte-1sqcbm3{border:1px solid black;padding:0.5rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-1sqcbm3"><header class="header svelte-1sqcbm3"><h1 class="svelte-1sqcbm3">Contact</h1>
		<p class="svelte-1sqcbm3">Let&#39;s create a website!</p></header>
	<main class="main svelte-1sqcbm3"><form class="contact-form svelte-1sqcbm3" name="contact" method="post" netlify netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="contact" class="svelte-1sqcbm3">
			<label for="name" class="svelte-1sqcbm3">Name *
				<input id="name" type="text" name="name" required class="svelte-1sqcbm3"></label>
			<label for="email" class="svelte-1sqcbm3">Email *
				<input id="email" type="email" name="email" required class="svelte-1sqcbm3"></label>
			<fieldset class="svelte-1sqcbm3"><legend>What type of services do you need? *
				</legend>
				<div class="inputs svelte-1sqcbm3"><label for="development" class="svelte-1sqcbm3"><input id="development" type="checkbox" name="services" value="development" class="svelte-1sqcbm3">
						Development
					</label>
					<label for="design" class="svelte-1sqcbm3"><input id="design" type="checkbox" name="services" value="design" class="svelte-1sqcbm3">
						Design
					</label>
					<label for="design" class="svelte-1sqcbm3"><input id="design" type="checkbox" name="services" value="other" class="svelte-1sqcbm3">
						Other
					</label></div></fieldset>
			<fieldset class="svelte-1sqcbm3"><legend>What&#39;s your budget? (optional)
				</legend>
				<div class="inputs svelte-1sqcbm3"><label for="2k" class="svelte-1sqcbm3"><input id="2k" type="radio" name="budget" value="2k-4k" class="svelte-1sqcbm3">
						$2k-$4k
					</label>
					<label for="4k" class="svelte-1sqcbm3"><input id="design" type="radio" name="budget" value="4k-8k" class="svelte-1sqcbm3">
						$4k-$8k
					</label>
					<label for="8k" class="svelte-1sqcbm3"><input id="design" type="radio" name="budget" value="8k-12k" class="svelte-1sqcbm3">
						$8k-$12k
					</label>

					<label for="12k" class="svelte-1sqcbm3"><input id="design" type="radio" name="budget" value="12k+" class="svelte-1sqcbm3">
						$12k+
					</label></div></fieldset>
			<label for="publish-date" class="svelte-1sqcbm3">Desired Completion Date (optional)
				<input id="publish-date" type="date" name="publish-date" class="svelte-1sqcbm3"></label>
			<label for="message" class="svelte-1sqcbm3">Leave a message! *
				<textarea id="message" name="message" rows="10" required class="svelte-1sqcbm3"></textarea></label>
			<button type="submit" class="svelte-1sqcbm3">Send</button>
			<p class="svelte-1sqcbm3">* = required</p></form></main>
</div>`;
});
export {
  Page as default
};
