import { screen, waitFor } from "@testing-library/react";
import { renderWithWrapper } from "../../lib/testHelper"
import ContactPage from "./index";

const testPost = {
		title: "Test title 1",
		date: "2022-06-10",
		slug: "test-title-1",
		content: "Test content",
		excerpt: "Test",
		image: "/test.jpg",
		isFeatured: true,
}
describe(
	"Page: ContactPage",
	() => {
		it(
			"should render correctly ",
			async() => {
				renderWithWrapper(
					<ContactPage />
				);

    		expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
				expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
				expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
				expect(screen.getByText(
					/Send Message/i,
				)).toBeInTheDocument();

			}
		);
	}
);

