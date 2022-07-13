/* eslint-env jest */
/* eslint-disable */
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe(
	"Component: Button",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = render
				(<Button
						color="primary"
						disabled={false}
						type="submit"
						variant="contained"
						data-testid="submitBtn"
						isLoading={false}
				>
						Test Button
     </Button>);

				expect(getByText(/Test Button/i)).toBeInTheDocument();
			}
		);
		it(
			"should render disabled",
			() => {
				const { getByText } = render
				(<Button
						color="primary"
						disabled={true}
						type="submit"
						variant="contained"
						data-testid="submitBtn"
						isLoading={false}
				>
						Test Button
     </Button>);

			expect(getByText(/Test Button/i).closest('button')).toBeDisabled();
			}
		);
		it(
			"should render without test while loading",
			() => {
				const { getByText } = render
				(<Button
						color="primary"
						disabled={false}
						type="submit"
						variant="contained"
						data-testid="submitBtn"
						isLoading={true}
				>
						Test Button
     </Button>);

				expect(() => getByText(/Test Button/i)).toThrow()
			}
		);
	}
);
