import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from "../components/ui/Button/Button";

export default {
  title: 'component/ui/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Click me",
  color: "primary",
	variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Click me",
  color: "secondary",
	variant: "contained"
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: "Click me",
  color: "primary",
	variant: "outlined"
};

export const Small = Template.bind({});
Small.args = {
	children: "Click me",
	size: "small",
  color: "secondary",
	variant: "contained"
};
export const Medium = Template.bind({});
Medium.args = {
	children: "Click me",
	size: "medium",
  color: "secondary",
	variant: "contained"
};

export const Large = Template.bind({});
Large.args = {
	children: "Click me",
	size: "large",
  color: "secondary",
	variant: "contained"
};

export const Loading = Template.bind({});
Loading.args = {
	children: "Click me",
  color: "secondary",
	variant: "contained",
	isLoading: true,
	isShowText: false,
};

export const LoadingWithText = Template.bind({});
LoadingWithText.args = {
	children: "Click me",
  color: "secondary",
	variant: "contained",
	isLoading: true,
	isShowText: true,
};
