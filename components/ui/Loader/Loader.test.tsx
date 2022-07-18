
import { render,  screen } from "@testing-library/react";
import { Loader } from "./Loader";
import "@testing-library/jest-dom";

describe(
	"Component: Loader",
	() => {
		it(
			"should render svg",
			() => {
				const {container} = render(
					<Loader
						color="inherit"
						size={20}
						/>
				);

				const svg = container.querySelector('svg');
				expect(svg).toBeInTheDocument();
			}
		);
		it(
			"should render svg with definite size",
			() => {
				render(
					<Loader
						color="inherit"
						size={30}
						/>
				);
				expect(screen.queryByTestId("image")).toHaveStyle("width:30px;height:30px")
			}
		);
	}
);
