<div class="page">
	<form
		class="contact-form | grid"
		name="contact"
		method="post"
		netlify
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="contact" />
		<section class="name">
			<label for="name"> Name * </label>
			<input id="name" type="text" name="name" required />
		</section>
		<section class="email">
			<label for="email"> Email * </label>
			<input id="email" type="email" name="email" required />
		</section>
		<section class="services">
			<fieldset>
				<legend>
					What type of services do you need? *
				</legend>
				<div class="inputs">
					<section class="development box">
						<input
							id="development"
							type="checkbox"
							name="services"
							value="development"
						/>
						<label for="development">
							Development
						</label>
					</section>
					<section class="design box">
						<input
							id="design"
							type="checkbox"
							name="services"
							value="design"
						/>
						<label for="design">
							Design
						</label>
					</section>
					<section class="other box">
						<input
							id="other"
							type="checkbox"
							name="services"
							value="other"
						/>
						<label for="other">
							Other
						</label>
					</section>
				</div>
			</fieldset>
		</section>
		<section class="budget">
			<fieldset>
				<legend>
					What's your budget? (optional)
				</legend>
				<div class="inputs">
					<section class="2k box">
						<input
							id="2k"
							type="radio"
							name="budget"
							value="1k-3k"
						/>
						<label for="2k">
							$1k-$3k
						</label>
					</section>
					<section class="4k box">
						<input
							id="design"
							type="radio"
							name="budget"
							value="3k-6k"
						/>
						<label for="4k">
							$3k-$6k
						</label>
					</section>
					<section class="8k box">
						<input
							id="design"
							type="radio"
							name="budget"
							value="6k-8k"
						/>
						<label for="8k">
							$6k-$8k
						</label>
					</section>
					<section class="12k box">
						<input
							id="design"
							type="radio"
							name="budget"
							value="10k+"
						/>
						<label for="12k"> $10k+ </label>
					</section>
				</div>
			</fieldset>
		</section>
		<section class="publish-date">
			<label for="publish-date">
				Desired Completion Date (optional)
			</label>
			<input
				id="publish-date"
				type="date"
				name="publish-date"
			/>
		</section>
		<section class="message">
			<label for="message"> Leave a message! * </label>
			<textarea
				id="message"
				name="message"
				rows="10"
				required
			/>
		</section>
		<button type="submit">Send</button>
		<p>* = required</p>
	</form>
</div>

<style lang="scss">
	.page {
		padding-block: 2rem;
		padding-inline: 1rem;
	}
	@media (min-width: 768px) {
		.page {
			padding-left: 2rem;
		}
	}
	.contact-form {
		border: 2px solid black;
		padding: 2rem;
		max-width: 696px;
		> section + section {
			margin-top: 1rem;
		}
		> p {
			margin-top: 1rem;
		}
	}
	p {
		line-height: 1.5;
		max-width: 60ch;
	}
	section {
		display: grid;
	}
	.box {
		grid-template-columns: 1em auto;
		gap: 0.5em;
		align-items: center;
	}
	input,
	textarea {
		border: 1px solid black;
		padding: 0.5rem;
		width: 100%;
	}
	input:is([type="radio"], [type="checkbox"]) {
		display: grid;
		place-content: center;
		font: inherit;
		color: currentColor;
		width: 1em;
		height: 1em;
		border: 1px solid currentColor;
		transform: translateY(-0.125em);
		&::before {
			content: "";
			width: 0.75em;
			height: 0.75em;
			transition: 150ms transform ease-in-out;
			transform: scale(0);
			background-color: #87ff4a;
		}
		&:checked::before {
			transform: scale(1);
		}
	}
	input[type="radio"] {
		border-radius: 100vw;
		&::before {
			border-radius: 100vw;
			background-color: #ff4a9e;
		}
	}
	section > input {
		border: 1px solid black;
		padding: 0.5rem;
	}
	button {
		margin-top: 1rem;
		background-color: #664aff;
		text-align: center;
		padding-block: 0.75em;
		text-transform: uppercase;
		font-weight: 600;
		border: 1px solid black;
		&:active {
			transform: translateY(1px);
		}
	}
</style>
