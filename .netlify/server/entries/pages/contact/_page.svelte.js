import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--main-background:#cf92ff;--primary:#fff;--secondary:#9bff00;--accent:#000;--fs-000:0.75rem;--fs-100:1rem;--fs-200:1.333rem;--fs-300:1.777rem;--fs-400:2.369rem;--fs-500:3.157rem;--fs-600:4.209rem;--fs-700:5.61rem;--fs-800:7.478rem;--fw-100:100;--fw-200:200;--fw-300:300;--fw-400:400;--fw-500:500;--fw-600:600;--fw-700:700;--fw-800:800;--fw-900:900}.content.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{height:100svh;font-family:"Poppins";display:grid;grid-template-rows:auto 1fr}@media(max-width: 677px){.content.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{overflow-y:auto;height:auto}}.header.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{display:flex;justify-content:space-between;position:relative;gap:0.75rem;padding:32px;border-bottom:8px solid black;text-transform:uppercase}.header.svelte-1tt97lw>h1.svelte-1tt97lw.svelte-1tt97lw{font-family:"Pilowlava";font-size:var(--fs-400)}.header.svelte-1tt97lw>p.svelte-1tt97lw.svelte-1tt97lw{border:1px solid black;padding:1rem;line-height:1;width:fit-content}@media(max-width: 677px){.header.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{flex-direction:column}}.main.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{padding-block:32px;padding-inline:32px;overflow-y:auto}@media(max-width: 767px){.main.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{overflow-y:visible}}.contact-form.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{border:2px solid black;border-radius:20px;padding:32px;max-width:768px}p.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{line-height:1.5;max-width:60ch}.contact-form.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{display:grid}.contact-form.svelte-1tt97lw>p.svelte-1tt97lw.svelte-1tt97lw:last-child{margin-top:1rem}input.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw:is([type=text], [type=email]){width:100%}label.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{display:grid}.inputs.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{display:flex;gap:1rem}@media(max-width: 500px){.inputs.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{flex-direction:column;gap:0}}fieldset.svelte-1tt97lw>.inputs.svelte-1tt97lw>label.svelte-1tt97lw{grid-template-columns:1em auto;gap:0.5em;align-items:center}input.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw:is([type=radio], [type=checkbox]){display:grid;place-content:center;font:inherit;color:currentColor;width:1em;height:1em;border:1px solid currentColor;transform:translateY(-0.075em)}input.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw:is([type=radio], [type=checkbox])::before{content:"";width:0.75em;height:0.75em;transition:150ms transform ease-in-out;transform:scale(0);background-color:#87ff4a}input.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw:is([type=radio], [type=checkbox]):checked::before{transform:scale(1)}input[type=radio].svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{border-radius:100vw}input[type=radio].svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw::before{border-radius:100vw;background-color:#ff4a9e}label.svelte-1tt97lw>input.svelte-1tt97lw.svelte-1tt97lw{border:1px solid black;padding:0.5rem}.contact-form.svelte-1tt97lw>label.svelte-1tt97lw+label.svelte-1tt97lw{margin-top:1rem}.contact-form.svelte-1tt97lw>fieldset.svelte-1tt97lw+label.svelte-1tt97lw{margin-top:1rem}fieldset.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{margin-top:1rem}button.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{margin-top:1rem;background-color:#664aff;text-align:center;padding-block:0.75em;text-transform:uppercase;font-weight:600;border:1px solid black}button.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw:active{transform:translateY(1px)}textarea.svelte-1tt97lw.svelte-1tt97lw.svelte-1tt97lw{border:1px solid black;padding:0.5rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-1tt97lw"><header class="header svelte-1tt97lw"><h1 class="svelte-1tt97lw">Contact</h1>
		<p class="svelte-1tt97lw">Let&#39;s create a website!</p></header>
	<main class="main svelte-1tt97lw"><form class="contact-form svelte-1tt97lw" name="contact" method="post" netlify netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="contact" class="svelte-1tt97lw">
			<label for="name" class="svelte-1tt97lw">Name *
				<input id="name" type="text" name="name" required class="svelte-1tt97lw"></label>
			<label for="email" class="svelte-1tt97lw">Email *
				<input id="email" type="email" name="email" required class="svelte-1tt97lw"></label>
			<fieldset class="svelte-1tt97lw"><legend>What type of services do you need? *
				</legend>
				<div class="inputs svelte-1tt97lw"><label for="development" class="svelte-1tt97lw"><input id="development" type="checkbox" name="services" value="development" class="svelte-1tt97lw">
						Development
					</label>
					<label for="design" class="svelte-1tt97lw"><input id="design" type="checkbox" name="services" value="design" class="svelte-1tt97lw">
						Design
					</label>
					<label for="design" class="svelte-1tt97lw"><input id="design" type="checkbox" name="services" value="other" class="svelte-1tt97lw">
						Other
					</label></div></fieldset>
			<fieldset class="svelte-1tt97lw"><legend>What&#39;s your budget? (optional)
				</legend>
				<div class="inputs svelte-1tt97lw"><label for="2k" class="svelte-1tt97lw"><input id="2k" type="radio" name="budget" value="2k-4k" class="svelte-1tt97lw">
						$2k-$4k
					</label>
					<label for="4k" class="svelte-1tt97lw"><input id="design" type="radio" name="budget" value="4k-8k" class="svelte-1tt97lw">
						$4k-$8k
					</label>
					<label for="8k" class="svelte-1tt97lw"><input id="design" type="radio" name="budget" value="8k-12k" class="svelte-1tt97lw">
						$8k-$12k
					</label>

					<label for="12k" class="svelte-1tt97lw"><input id="design" type="radio" name="budget" value="12k+" class="svelte-1tt97lw">
						$12k+
					</label></div></fieldset>
			<label for="publish-date" class="svelte-1tt97lw">Desired Completion Date (optional)
				<input id="publish-date" type="date" name="publish-date" class="svelte-1tt97lw"></label>
			<label for="message" class="svelte-1tt97lw">Leave a message! *
				<textarea id="message" name="message" rows="10" required class="svelte-1tt97lw"></textarea></label>
			<button type="submit" class="svelte-1tt97lw">Send</button>
			<p class="svelte-1tt97lw">* = required</p></form></main>
</div>`;
});
export {
  Page as default
};
