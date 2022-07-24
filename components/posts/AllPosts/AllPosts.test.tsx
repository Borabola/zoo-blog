import { testPosts } from "../../../__mock__/posts";
import { renderWithWrapper } from "../../../lib/testHelper"
import AllPosts from "./AllPosts";

describe(
	"Component: AllPosts",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<AllPosts posts={testPosts}  />
				);

				expect(getByText(/All Posts/i)).toBeInTheDocument();
				expect(getByText(/Test title 1/i)).toBeInTheDocument();
        expect(getByText(/Test title 2/i)).toBeInTheDocument();
			}
		);
	}
);
