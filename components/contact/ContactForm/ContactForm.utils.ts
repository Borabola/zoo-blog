import { ContactFormContent } from "./ContactForm.types"

export const sendContactData = async (contactDetails: ContactFormContent
	) => {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong!");
	}
};
