import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { faker } from '@faker-js/faker';
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { PostContent } from "../components/posts/post-detail/PostContent/PostContent";

const randomSlug = faker.lorem.slug();
const randomTitle = faker.lorem.word(10);
const randomContent = faker.lorem.paragraph()

const newPost = {
	title: randomTitle,
	date: "2022-06-10",
	slug: randomSlug,
	content: randomContent,
	isFeatured: true,
}

export default {
  title: 'component/post/PostContent',
  component: PostContent,
} as ComponentMeta<typeof PostContent>;

const Template: ComponentStory<typeof PostContent> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<PostContent {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicPostContent = Template.bind({});
BasicPostContent.args = {
  post: newPost,
};
