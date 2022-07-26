import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { testPosts } from "../__mock__/posts";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { PostsGrid } from "../components/posts/PostsGrid/PostsGrid";

export default {
  title: 'component/post/PostsGrid',
  component: PostsGrid,
} as ComponentMeta<typeof PostsGrid>;

const Template: ComponentStory<typeof PostsGrid> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<PostsGrid {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicPostsGrid = Template.bind({});
BasicPostsGrid.args = {
  posts: testPosts,
};
