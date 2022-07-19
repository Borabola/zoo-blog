import { renderWithWrapper } from "../../../lib/testHelper"
import MainNavigation from "./MainNavigation";
describe(
	"Component: MainNavigation",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<MainNavigation />
				);

				expect(getByText(/Posts/i)).toBeInTheDocument();
				expect(getByText(/Contact/i)).toBeInTheDocument();
				expect(getByText(/Mykolaiv Zoo Blog/i)).toBeInTheDocument();
			}
		);
	}
);
