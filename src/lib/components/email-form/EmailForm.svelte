<script>
	import emailjs from "@emailjs/browser";

	let sent = false;
	function sendEmail(e) {
		emailjs.sendForm(
			"service_1z17tcq",
			"template_attira4",
			e.target,
			"C1GbZmigSg8nAoKUh"
		).then(
			(res) => {
				sent = true;
				console.log("SUCCESS!", res.text);
			},
			(err) => {
				console.log("FAILED...", err.text);
			}
		);
	}
</script>

<div class="email-form_container">
	{#if sent === false}
		<form class="email-form" on:submit|preventDefault={sendEmail}>
			<div class="email">
				<label for="email">Email</label>
				<input
					class="hoverable"
					type="email"
					name="email"
					required
				/>
			</div>
			<div class="name">
				<label for="name">Name</label>
				<input
					class="hoverable"
					type="text"
					name="name"
					required
				/>
			</div>
			<fieldset class="work-type">
				<legend>Work type</legend>

				<input
					class="hoverable"
					type="checkbox"
					name="development"
				/>
				<label for="development">Development</label>

				<input
					class="hoverable"
					type="checkbox"
					name="design"
				/>
				<label for="design">Design</label>
			</fieldset>
			<div class="budget">
				<label for="budget">Budget (USD)</label>
				<input
					class="hoverable"
					type="text"
					inputmode="numeric"
					name="budget"
				/>
			</div>
			<div class="publish-date">
				<label for="publish-date"
					>Desired Completion Date</label
				>
				<input
					class="hoverable"
					type="date"
					name="publish-date"
				/>
			</div>
			<div class="message">
				<label for="message">Additional Comments</label>
				<textarea
					class="hoverable"
					name="message"
					required
				/>
			</div>
			<input class="hoverable" type="submit" value="Send" />
			<p class="required">* = required</p>
		</form>
	{:else}
		<p class="email-sent">Email Sent!</p>
	{/if}
</div>

<style lang="scss">
	.required {
		margin-top: 1em;
	}
	.email-sent {
		font-size: 1.5rem;
	}
	.email,
	.name,
	.work-type,
	.budget,
	.publish-date,
	.message {
		display: flex;
		flex-direction: column;
		margin-bottom: 1.25rem;
	}
	.email {
		grid-area: email;
	}
	.name {
		grid-area: name;
	}
	.work-type {
		display: grid;
		grid-template-columns: 1em auto;
		gap: 0.5em;
		grid-area: work-type;
	}
	.budget {
		grid-area: budget;
	}
	.publish-date {
		grid-area: publish-date;
	}
	.message {
		grid-area: message;
	}
	.email-form_container {
		--margin: 1.25rem;
		display: grid;
		place-items: center;
		border: 4px solid black;
		font-family: "Cooper Hewitt";
		padding: min(5vw, 50px);
		max-width: 30rem;
		text-transform: uppercase;
	}
	input,
	textarea {
		text-transform: none;
	}
	input {
		width: 100%;
		&:not([type="date"]) {
			text-transform: none;
		}
		&[type="submit"] {
			font-weight: 600;
			margin-top: var(--margin);
			text-align: center;
			text-transform: uppercase;
			grid-area: submit;
			transform: translateY(0);
			&:active {
				transform: translateY(3px);
			}
		}
		&[type="checkbox"] {
			display: grid;
			place-items: center;
			appearance: none;
			transform: translateY(-0.075em);
			transition: background-color 150ms;
			&:checked {
				background-color: black;
			}
		}
	}
	label:is([for="email"], [for="name"], [for="message"]) {
		&::after {
			content: "*";
			display: inline-block;
			aspect-ratio: 1;
			width: 1em;
			height: 1em;
			color: black;
			margin-left: 0.1em;
		}
	}
	input,
	textarea {
		&:focus-visible {
			outline: 2px solid $selection;
		}
	}
	.email-form {
		display: grid;
		grid:
			"email" auto
			"name" auto
			"work-type" auto
			"budget" auto
			"publish-date" auto
			"message" auto
			"submit" auto / 1fr;
		input,
		textarea {
			border: 2px solid black;
			padding: 0.5em;
			max-width: 30rem;
		}
		legend,
		label:not([for="design"], [for="development"]) {
			text-transform: uppercase;
			font-size: 1.5rem;
			font-weight: 600;
			&:not(:nth-of-type(1)) {
				margin-top: var(--margin);
			}
		}
		textarea {
			height: 20rem;
		}
	}
</style>
