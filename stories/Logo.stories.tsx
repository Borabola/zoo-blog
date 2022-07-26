import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { Logo } from "../components/layout/Logo/Logo";

export default {
  title: 'component/layout/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<div style={{
				background: "blue",
				width: "100%",
				height: "100px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<Logo {...args} />
			</div>
		</ThemeProvider>
	</AppIntlProvider>
);

export const BasicLogo = Template.bind({});

