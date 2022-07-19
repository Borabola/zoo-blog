import { screen } from "@testing-library/react";
import { testPosts } from "../../../__mock__/posts";
import { renderWithWrapper } from "../../../lib/testHelper"
import PostsGrid from "./PostsGrid";

describe(
	"Component: PostItem",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<PostsGrid posts={testPosts}  />
				);

				expect(getByText(/Test title 1/i)).toBeInTheDocument();
        expect(getByText(/Test title 2/i)).toBeInTheDocument();
			}
		);
	}
);
