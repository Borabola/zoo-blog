import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { PostItem } from "../components/posts/PostItem/PostItem";

export default {
	title: 'component/post/PostItem',
	component: PostItem,
} as ComponentMeta<typeof PostItem>;

const Template: ComponentStory<typeof PostItem> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<div style={{
				background: "blue",
				width: "100px",
				height: "100px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<PostItem {...args} />
			</div>
		</ThemeProvider>
	</AppIntlProvider>
);

export const Basic = Template.bind({});
Basic.args = {
	title: "Item Title",
	date: "2022-06-10",
	slug: "storybook-post-item",
	image: "/post.jpg",
	content: "Test content",
	excerpt: "Test excerpt",
	isFeatured: true,
};


