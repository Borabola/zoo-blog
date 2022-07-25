import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from "../components/ui/Loader/Loader";

export default {
  title: 'component/ui/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
	<div style={{ background: "blue",
	width: "100px",
	height: "100px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"}}>
		<Loader {...args} />
	</div>
);

export const BasiLoader = Template.bind({});
BasiLoader.args = {
  color: "primary",
	size: 20
};

export const LargeLoader = Template.bind({});
LargeLoader.args = {
  color: "primary",
	size: 70
};

export const ColoredLoader = Template.bind({});
ColoredLoader.args = {
  color: "error",
	size: 20
};
