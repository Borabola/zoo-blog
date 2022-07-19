import { screen } from "@testing-library/react";
import { renderWithWrapper } from "../../../lib/testHelper"
import Hero from "./Hero";
import "@testing-library/jest-dom";


describe(
	"Component: Hero",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<Hero />
				);

				expect(getByText(/Mykolaiv Zoo Blog/i)).toBeInTheDocument();
				expect(getByText(/The blog about animals and our Zoo/i)).toBeInTheDocument();
				expect(screen.getByAltText(/Mykolaiv zoo/i)).toBeInTheDocument();
			}
		);
	}
);
