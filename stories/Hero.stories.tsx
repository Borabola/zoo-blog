import { FC } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { Hero } from "../components/home-page/Hero/Hero";

export default {
	title: 'component/home-page/Hero',
	component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<Hero />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicHero = Template.bind({});
