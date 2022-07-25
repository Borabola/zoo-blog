import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, Formik } from "formik";
import { FormFieldText } from "../components/ui/FormFieldText/FormFieldText";

const initialValues = {
	fieldName: ""
};

const submitHandler = () => {};

export default {
	title: 'component/ui/FormFieldText',
	component: FormFieldText,
} as ComponentMeta<typeof FormFieldText>;

const Template: ComponentStory<typeof FormFieldText> = (args) => (
	<Formik
		initialValues={initialValues}
		validateOnBlur={false}
		onSubmit={submitHandler}
			>
				{() => (
		<Form>
			<FormFieldText {...args} />
		</Form>
			)}
	</Formik>
)

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
	name: "fieldName",
	value: "test",
	color: "primary",
	variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
	type: 'default',
	placeholder: 'Placeholder Text',
	name: "fieldName",
	value: "Test value",
	color: "primary",
	variant: "outlined",
};

export const OutlinedEmty = Template.bind({});
OutlinedEmty.args = {
	type: 'default',
	placeholder: 'Placeholder Text',
	name: "fieldName",
	value: "",
	color: "primary",
	variant: "outlined",
};

export const FormFieldWithError = Template.bind({});
FormFieldWithError.args = {
	type: 'default',
	placeholder: 'Placeholder Text',
	name: "fieldName",
	value: "",
	color: "primary",
	variant: "outlined",
	error: true,
	helperText: "Error Helper Text"
};

export const FormFieldDisabled = Template.bind({});
FormFieldDisabled.args = {
	type: 'default',
	placeholder: 'Placeholder Text',
	name: "fieldName",
	value: "",
	color: "primary",
	variant: "outlined",
	disabled: true
};

export const TextareaOutlined = Template.bind({});
TextareaOutlined.args = {
	type: 'default',
	placeholder: 'Placeholder Text',
	name: "fieldName",
	value: "",
	color: "primary",
	variant: "outlined",
	multiline: true,
	minRows: 3,
	maxRows: 4
};
