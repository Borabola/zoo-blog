import { faker } from '@faker-js/faker';
import { renderWithWrapper } from "../../../../lib/testHelper"
import PostContent from "./PostContent";

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
	"Component: PostContent",
	() => {
		it(
			"should render correctly ",
			() => {
				const { getByText } = renderWithWrapper(
					<PostContent post={testPost} />
				);

				expect(getByText(randomTitle)).toBeInTheDocument();
				expect(getByText(randomContent)).toBeInTheDocument();
			}
		);
	}
);
