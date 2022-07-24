import { render } from "@testing-library/react";
import { faker } from '@faker-js/faker';
import { Button } from "./Button";
import "@testing-library/jest-dom";

const randomText = faker.lorem.word()

describe(
	"Component: Button",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = render(
					<Button
						color="primary"
						disabled={false}
						type="submit"
						variant="contained"
						data-testid="submitBtn"
						isLoading={false}
					>
						{randomText}
					</Button>);

				expect(getByText(randomText)).toBeInTheDocument();
			}
		);
		it(
			"should render disabled",
			() => {
				const { getByText } = render(
					<Button
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
			"should render without text while loading",
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
