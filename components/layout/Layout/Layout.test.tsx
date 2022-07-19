import { FC } from "react"
import { renderWithWrapper } from "../../../lib/testHelper"
import Layout from "./Layout";

const FakeComponent: FC = () => {
	return (
		<h1>Test contect</h1>
	);
};
describe(
	"Component: Layout",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<Layout>
						<FakeComponent />
					</Layout>
				);

				expect(getByText(/Posts/i)).toBeInTheDocument();
				expect(getByText(/Contact/i)).toBeInTheDocument();
				expect(getByText(/Mykolaiv Zoo Blog/i)).toBeInTheDocument();
				expect(getByText(/Test contect/i)).toBeInTheDocument();
			}
		);
	}
);
