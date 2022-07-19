import { screen } from "@testing-library/react";
import { renderWithWrapper } from "../../../lib/testHelper";
import PostItem from "./PostItem";

const testPost = {
	title: "Test title 1",
	date: "2022-06-10",
	slug: "test-title-1",
	content: "Test content",
	isFeatured: true,
}

describe(
	"Component: PostItem",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<PostItem post={testPost}  />
				);

				expect(getByText(/Test title 1/i)).toBeInTheDocument();
				expect(getByText(/June/i)).toBeInTheDocument();
				expect(screen.getByAltText(/Test title 1/i)).toBeInTheDocument();
			}
		);
	}
);
