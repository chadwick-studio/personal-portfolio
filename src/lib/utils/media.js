export function media(node, breakpoints = []) {
	let transition = () => { };
	for (let { query, transition, options } of breakpoints) {
		if (window.matchMedia(query).matches) {
			return transition(node, options);
		}
	}
	return transition;
}
