import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		background: {
			default: "#4e8207",
			paper: "##343036"
		},
		primary: {
			main: "#f4effa", //white text
			dark: "#221f23" // black bg
		}
	},
});

theme.typography.h1 = {
	fontSize: 64,
	lineHeight: 1.5,
	fontWeight: 700,
};

theme.typography.h2 = {
	fontSize: 32,
	lineHeight: 1.5,
	fontWeight: 700,
};

theme.typography.h3 = {
	fontSize: 24,
	lineHeight: 1.5,
	fontWeight: 700,
};

theme.typography.h4 = {
	fontSize: 20,
	lineHeight: 1.5,
	fontWeight: 500,
};
