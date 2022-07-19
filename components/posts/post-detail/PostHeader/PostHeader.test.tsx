import { screen } from "@testing-library/react";
import { renderWithWrapper } from "../../../../lib/testHelper"
import PostHeader from "./PostHeader";

describe(
	"Component: PostHeader",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<PostHeader title="Test title" image={"/test.jpg"} />
				);

				expect(getByText(/Test title/i)).toBeInTheDocument();
				expect(screen.getByAltText(/Test title/i)).toBeInTheDocument();
			}
		);
	}
);
