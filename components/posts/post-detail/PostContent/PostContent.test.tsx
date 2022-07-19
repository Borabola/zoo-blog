import { renderWithWrapper } from "../../../../lib/testHelper"
import PostContent from "./PostContent";

const testPost = {
	title: "Test title 1",
	date: "2022-06-10",
	slug: "test-title-1",
	content: "Test content",
	isFeatured: true,
}
describe(
	"Component: PostContent",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<PostContent post={testPost} />
				);

				expect(getByText(/Test title 1/i)).toBeInTheDocument();
				expect(getByText(/Test content/i)).toBeInTheDocument();
			}
		);
	}
);
