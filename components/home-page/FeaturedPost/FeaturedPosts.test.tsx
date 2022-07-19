import { renderWithWrapper } from "../../../lib/testHelper"
import FeaturedPosts from "./FeaturedPosts";
import "@testing-library/jest-dom";

const testPosts = [
	{
		title: "Test title 1",
		date: "2022-06-10",
		slug: "test-title-1",
		isFeatured: true,
	},
	{
		title: "Test title 2",
		date: "2022-06-11",
		slug: "test-title-2",
		isFeatured: false,
	},
]
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
