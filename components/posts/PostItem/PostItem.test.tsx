import { screen } from "@testing-library/react";
import { faker } from '@faker-js/faker';
import { renderWithWrapper } from "../../../lib/testHelper";
import PostItem from "./PostItem";

const randomSlug = faker.lorem.slug();
const randomTitle = faker.name.findName();
const randomContent = faker.lorem.paragraph()

const testPost = {
	title: randomTitle,
	date: "2022-06-10",
	slug: randomSlug,
	content: randomContent,
	isFeatured: true,
}

describe(
	"Component: PostItem",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<PostItem post={testPost}  />
				);

				expect(getByText(randomTitle)).toBeInTheDocument();
				expect(getByText(/June/i)).toBeInTheDocument();
				expect(screen.getByAltText(randomTitle)).toBeInTheDocument();
			}
		);
	}
);
