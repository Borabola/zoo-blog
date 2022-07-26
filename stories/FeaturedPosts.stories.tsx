import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { testPosts } from "../__mock__/posts";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { FeaturedPosts } from "../components/home-page/FeaturedPost/FeaturedPosts";

export default {
  title: 'component/home-page/FeaturedPosts',
  component: FeaturedPosts,
} as ComponentMeta<typeof FeaturedPosts>;

const Template: ComponentStory<typeof FeaturedPosts> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<FeaturedPosts {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicFeaturedPosts = Template.bind({});
BasicFeaturedPosts.args = {
  posts: testPosts,
};
