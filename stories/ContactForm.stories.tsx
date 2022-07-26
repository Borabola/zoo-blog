import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import { ContactForm } from "../components/contact/ContactForm/ContactForm";

const initialValues = {
	email: "",
	name: "",
	message: "",
};
const initialValues2 = {
	email: "test2@tesc.com",
	name: "Test Name",
	message: "New message!",
};

const submitHandler = () => {};

export default {
	title: 'component/contact/ContactForm',
	component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => (
	<AppIntlProvider>
			<ThemeProvider theme={theme}>
				<ContactForm {...args} />
			</ThemeProvider>
	</AppIntlProvider>
)

export const Basic = Template.bind({});
Basic.args = {
	initialValues: initialValues,
	onSubmit: submitHandler
};

export const Filled = Template.bind({});
Filled.args = {
	initialValues: initialValues2,
	onSubmit: submitHandler
};
