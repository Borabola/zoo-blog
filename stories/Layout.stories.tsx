import { FC } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { Layout } from "../components/layout/Layout/Layout";

export default {
	title: 'component/layout/Layout',
	component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<Layout {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicLayout = Template.bind({});
BasicLayout.args = {
	children: " Some content",
};
