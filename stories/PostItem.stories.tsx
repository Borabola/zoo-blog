import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { PostItem } from "../components/posts/PostItem/PostItem";

const testPost = {
	title: "Item Title",
	date: "2022-06-10",
	slug: "storybook-post-item",
	image: "../__mock__/images/test1.jpg",
	content: "Test content",
	excerpt: "Test excerpt",
	isFeatured: true,
}
export default {
	title: 'component/post/PostItem',
	component: PostItem,
} as ComponentMeta<typeof PostItem>;

const Template: ComponentStory<typeof PostItem> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
				<PostItem {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
	post: testPost
};


