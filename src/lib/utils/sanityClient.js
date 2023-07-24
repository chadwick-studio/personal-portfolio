import { createClient } from "@sanity/client";

export const sanityClient = createClient({
	projectId: "ml9ck1w1",
	dataset: "production",
	apiVersion: "2023-07-20",
	useCdn: false,
});
