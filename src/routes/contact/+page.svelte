<div class="content">
	<header class="header">
		<h1>Contact</h1>
		<p>Let's create a website!</p>
	</header>
	<main class="main">
		<form
			class="contact-form"
			name="contact"
			method="POST"
			netlify
			netlify-honeypot="bot-field"
		>
			<input
				type="hidden"
				name="form-name"
				value="contact"
				class="svelte-xc25p6"
			/>
			<label for="name">
				Name *
				<input
					id="name"
					type="text"
					name="name"
					required=""
				/>
			</label>
			<label for="email">
				Email *
				<input
					id="email"
					type="email"
					name="email"
					required=""
				/>
			</label>
			<fieldset>
				<legend>
					What type of services do you need? *
				</legend>
				<div class="inputs">
					<label for="development">
						<input
							id="development"
							type="checkbox"
							name="services"
							value="development"
						/>
						Development
					</label>
					<label for="design">
						<input
							id="design"
							type="checkbox"
							name="services"
							value="design"
						/>
						Design
					</label>
					<label for="design">
						<input
							id="design"
							type="checkbox"
							name="services"
							value="other"
						/>
						Other
					</label>
				</div>
			</fieldset>
			<fieldset>
				<legend>
					What's your budget? (optional)
				</legend>
				<div class="inputs">
					<label for="2k">
						<input
							id="2k"
							type="radio"
							name="budget"
							value="2k-4k"
						/>
						$2k-$4k
					</label>
					<label for="4k">
						<input
							id="design"
							type="radio"
							name="budget"
							value="4k-8k"
						/>
						$4k-$8k
					</label>
					<label for="8k">
						<input
							id="design"
							type="radio"
							name="budget"
							value="8k-12k"
						/>
						$8k-$12k
					</label>

					<label for="12k">
						<input
							id="design"
							type="radio"
							name="budget"
							value="12k+"
						/>
						$12k+
					</label>
				</div>
			</fieldset>
			<label for="publish-date">
				Desired Completion Date (optional)
				<input
					id="publish-date"
					type="date"
					name="publish-date"
				/>
			</label>
			<label for="message">
				Leave a message! *
				<textarea
					id="message"
					name="message"
					rows="10"
				/>
			</label>
			<button type="submit">Send</button>
			<p>* = required</p>
		</form>
	</main>
</div>

<style lang="scss">
	.content {
		height: 100vh;
		font-family: "Poppins";
		display: grid;
		grid-template-rows: auto 1fr;
	}

	.header {
		display: flex;
		justify-content: space-between;
		position: relative;
		gap: 0.75rem;
		padding: 32px;
		border-bottom: 8px solid black;
		text-transform: uppercase;

		> h1 {
			font-family: "Pilowlava";
			font-size: var(--fs-400);
		}
		> p {
			border: 1px solid black;
			padding: 1rem;
			line-height: 1;
			width: fit-content;
		}
	}
	@media (max-width: 677px) {
		.header {
			flex-direction: column;
		}
	}
	.main {
		padding-block: 32px;
		padding-inline: 32px;
		overflow-y: auto;
	}
	@media (max-width: 767px) {
		.main {
			overflow-y: visible;
		}
	}
	.contact-form {
		border: 2px solid black;
		border-radius: 20px;
		padding: 32px;
		max-width: 768px;
	}
	p {
		line-height: 1.5;
		max-width: 60ch;
	}
	.contact-form {
		display: grid;
		> p:last-child {
			margin-top: 1rem;
		}
	}
	input:is([type="text"], [type="email"]) {
		width: 100%;
	}
	label {
		display: grid;
	}
	.inputs {
		display: flex;
		gap: 1rem;
	}
	@media (max-width: 500px) {
		.inputs {
			flex-direction: column;
			gap: 0;
		}
	}
	fieldset > .inputs > label {
		grid-template-columns: 1em auto;
		gap: 0.5em;
		align-items: center;
	}
	input:is([type="radio"], [type="checkbox"]) {
		display: grid;
		place-content: center;
		font: inherit;
		color: currentColor;
		width: 1em;
		height: 1em;
		border: 1px solid currentColor;
		transform: translateY(-0.075em);
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
	label > input {
		border: 1px solid black;
		padding: 0.5rem;
	}
	.contact-form > label + label {
		margin-top: 1rem;
	}
	.contact-form > fieldset + label {
		margin-top: 1rem;
	}
	fieldset {
		margin-top: 1rem;
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
	textarea {
		border: 1px solid black;
		padding: 0.5rem;
	}
</style>
