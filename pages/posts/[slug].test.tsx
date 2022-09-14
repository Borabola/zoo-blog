import { screen, waitFor } from "@testing-library/react";
import { renderWithWrapper } from "../../lib/testHelper"
import PostDetailPage from "./[slug].page";

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
	"Page: PostDetailPage",
	() => {
		it(
			"should render correctly ",
			async() => {
				renderWithWrapper(
					<PostDetailPage post={testPost}  />
				);
				 await waitFor(() => {
    			expect(screen.getByText(/Test title 1/i)).toBeInTheDocument();
					expect(screen.getByText(/Test content/i)).toBeInTheDocument();
				 })
			}
		);
	}
);

