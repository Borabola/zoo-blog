import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { testPosts } from "../__mock__/posts";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { AllPosts } from "../components/posts/AllPosts/AllPosts";

export default {
  title: 'component/post/AllPosts',
  component: AllPosts,
} as ComponentMeta<typeof AllPosts>;

const Template: ComponentStory<typeof AllPosts> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<AllPosts {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicAllPosts = Template.bind({});
BasicAllPosts.args = {
  posts: testPosts,
};
