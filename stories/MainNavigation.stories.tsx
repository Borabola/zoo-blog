import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { MainNavigation } from "../components/layout/MainNavigstion/MainNavigation";

export default {
  title: 'component/layout/MainNavigation',
  component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>;

const Template: ComponentStory<typeof MainNavigation> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<MainNavigation {...args} />
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicMainNavigation = Template.bind({});

