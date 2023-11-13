import { sanityClient } from "$utilities/sanityClient";

export async function load() {
	const data = await sanityClient.fetch(`*[_type == "projects"]`);
	if (data) {
		return {
			projects: data,
			title: "Portfolio",
			description: "Check out these cool projects!"
		};
	}
	return {
		status: 500,
		body: new Error("Internal Server Error")
	};
}
