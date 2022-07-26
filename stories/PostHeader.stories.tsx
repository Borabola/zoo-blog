import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { PostHeader } from "../components/posts/post-detail/PostHeader/PostHeader";

export default {
  title: 'component/post/PostHeader',
  component: PostHeader,
} as ComponentMeta<typeof PostHeader>;

const Template: ComponentStory<typeof PostHeader> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<PostHeader {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicPostHeader = Template.bind({});
BasicPostHeader.args = {
  title: "Post Header",
	image: "/posts/february-2-is-hedgehog-day-and-marmot-day/white_hedgehog.jpg"
};
