<script>
	import "../app.scss";
	import Cursor from "$lib/cursor/Cursor.svelte";
	import Navigation from "$lib/navigation/Navigation.svelte";

	$: ({ pathname } = data); // pathname = data.pathname
	import { fade } from "svelte/transition";
	import { cubicIn, cubicOut } from "svelte/easing";

	export let data;

	const duration = 300;
	const delay = duration + 200;

	const transitionIn = { easing: cubicOut, duration, delay };
	const transitionOut = { easing: cubicIn, duration };
</script>

{#key pathname}
	<div
		class="page-transition"
		in:fade={transitionIn}
		out:fade={transitionOut}
	>
		<div class="body_container">
			<slot />
			<Navigation {duration} />
		</div>
	</div>
{/key}
<Cursor />

<style lang="scss">
	:global(body) {
		background-color: $main-background;
		overflow-x: hidden;
		scrollbar-width: thin;
	}
	.body_container {
		position: relative;
		min-height: 100vh; //browser fallback
		min-height: 100dvh;
		background-color: $main-background;
	}
	:global(.container) {
		height: 100vh;
		height: 100dvh;
	}
	:global(.header:not(.home)) {
		display: flex;
		align-items: end;
		font-size: clamp(3.5rem, 3.2143rem + 1.4286vw, 4.5rem);
		border-bottom: 2px solid black;
		padding-top: $main-padding-top;
		padding-left: $main-padding-left;
		padding-bottom: $main-padding-bottom;
	}

	:global(.title, .subtitle) {
		cursor: default;
		font-family: "Cooper Hewitt";
		text-transform: uppercase;
		line-height: 1;
		white-space: nowrap;
	}
	:global(.title) {
		font-weight: 900;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
	}
	:global(.subtitle) {
		font-weight: 300;
		font-size: 30%;
		line-height: 1.2;
		transform: translate3d(-0.35em, 0.05em, 0);
		align-self: end;
	}
	:global(.container, .main) {
		display: grid;
	}
	:global(.main) {
		padding-top: calc($main-padding-top * 2);
		padding-bottom: calc($main-padding-bottom * 2);
		padding-inline: $main-padding-left;
		overflow-y: scroll;
		overflow-x: hidden;
		scrollbar-width: thin;
	}
	:global(.accent) {
		color: $accent;
	}
	:global(a[href^="https"]::after) {
		content: "";
		display: inline-block;
		aspect-ratio: 1;
		width: 1em;
		margin-left: 0.25em;
		background-repeat: no-repeat;
		background-position: bottom;
		background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMSAyNCAyMyI+PHBhdGggZD0iTTIxIDEzdjEwaC0yMXYtMTloMTJ2MmgtMTB2MTVoMTd2LThoMnptMy0xMmgtMTAuOTg4bDQuMDM1IDQtNi45NzcgNy4wNyAyLjgyOCAyLjgyOCA2Ljk3Ny03LjA3IDQuMTI1IDQuMTcydi0xMXoiLz48L3N2Zz4=");
		position: relative;
		top: 0.1em;
	}
	:global(.sr-only) {
		border: 0 !important;
		clip: rect(1px, 1px, 1px, 1px) !important;
		-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;
		height: 1px !important;
		margin: -1px !important;
		overflow: hidden !important;
		padding: 0 !important;
		position: absolute !important;
		width: 1px !important;
		white-space: nowrap !important;
	}
	@media (min-width: 800px) {
		:global(.header) {
			border-right: 2px solid black;
			border-bottom: none;
			margin: 0;
			padding: 0;
			padding-bottom: $main-padding-bottom;
			padding-left: $main-padding-left;
			padding-right: $main-padding-right;
		}
		:global(.container) {
			grid-template-columns: 1fr 2fr;
		}
		:global(.main) {
			margin-top: 0;
			place-items: center;
		}
	}
</style>
