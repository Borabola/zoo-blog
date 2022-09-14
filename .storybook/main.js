module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@bbbtech/storybook-formik/register",
	],
	staticDirs: ["../public"],
	//staticDirs: [{ from: "../public/images", to: "/_next" }],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
};
