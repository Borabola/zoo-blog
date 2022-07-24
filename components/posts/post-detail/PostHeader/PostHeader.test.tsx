import { screen } from "@testing-library/react";
import { faker } from '@faker-js/faker';
import { renderWithWrapper } from "../../../../lib/testHelper"
import PostHeader from "./PostHeader";

const randomTitle = faker.name.findName();

describe(
	"Component: PostHeader",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<PostHeader title={randomTitle} image={"/test.jpg"} />
				);

				expect(getByText(randomTitle)).toBeInTheDocument();
				expect(screen.getByAltText(randomTitle)).toBeInTheDocument();
			}
		);
	}
);
