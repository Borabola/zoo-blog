import { renderWithWrapper } from "../../../lib/testHelper"
import { testPosts } from "../../../__mock__/posts";
import FeaturedPosts from "./FeaturedPosts";

describe(
	"Component: FeaturedPosts",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<FeaturedPosts posts={testPosts} />
				);

				expect(getByText(/Featured Posts/i)).toBeInTheDocument();
				expect(getByText(/Test title 1/i)).toBeInTheDocument();
				expect(getByText(/Test title 2/i)).toBeInTheDocument();
			}
		);
	}
);
