import { screen, waitFor } from "@testing-library/react";
import { renderWithWrapper } from "../lib/testHelper"
import { testPosts } from "../__mock__/posts";
import HomePage from "./index";
describe(
	"Page: HomePage",
	() => {
		it(
			"should render correctly ",
			async () => {
				renderWithWrapper(
					<HomePage posts={testPosts} />
				);
				await waitFor(() => {
					expect(screen.getByText(/Featured Posts/i)).toBeInTheDocument();
					expect(screen.getByText(/Test title 1/i)).toBeInTheDocument();
					expect(screen.getByText(/Test title 2/i)).toBeInTheDocument();
				})
			}
		);
	}
);

