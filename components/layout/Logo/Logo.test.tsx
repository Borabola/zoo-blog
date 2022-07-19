import { screen } from "@testing-library/react";
import { renderWithWrapper } from "../../../lib/testHelper"
import Logo from "./Logo";
describe(
	"Component: MainNavigation",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<Logo />
				);
				expect(getByText(/Mykolaiv Zoo Blog/i)).toBeInTheDocument();
			}
		);
	}
);
