import { createTheme, darken } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#f4effa", //white text
			dark: "#221f23", // black bg
			light: "rgba(0, 0, 0, 0.2)",
		},
		secondary: {
			main: "#EBEBEB", //var(--color-primary-700);
			light: "#5a097a", //var(--color-primary-500);
			dark: "#BCBCBC",
		},
		info: {
			main: "#3d0264",
			light: "#c8b3ce",
			dark: "#918d96",
			//contrastText: "#293780",
		},
		background: {
			default: "#dfdbe6",
			paper: "#343036",
		},
		common: {
			white: "#FFFFFF",
			black: "#000000",
		},
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

theme.components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				fontSize: 16,
				backgroundColor: theme.palette.common.white,
				letterSpacing: 0.25,
				minHeight: "100vh",
				padding: 0,
				margin: 0,
				"& #root": {
					minHeight: "100vh",
					padding: 0,
					margin: 0,
				}
			},
			html: {
				fontSize: 16,
			},
			"& *": {
				[theme.breakpoints.up("sm")]: {
					"&::-webkit-scrollbar": {
						width: theme.spacing(4 / 8)
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: theme.palette.common.white
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: darken(
							theme.palette.background.paper,
							0.25
						),
						borderRadius: theme.spacing(2 / 8),
					}
				}
			}
		},
	},
	MuiButtonBase: {
		defaultProps: {
			disableRipple: true,
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: theme.spacing(2 / 8),
				whiteSpace: "nowrap",
				boxShadow: "none",

				padding: theme.spacing(
					0,
					11 / 8
				),
				textTransform: "none",
			},
			sizeLarge: {
				minWidth: 100,
				minHeight:  theme.spacing(44 / 8),
			},
			sizeMedium: {
				minWidth: 77
			}
		},
		variants: [
			{
				props: { variant: "contained" },
				style: {
					color: theme.palette.info.light,
					backgroundColor: theme.palette.info.main,
					borderRadius: theme.spacing(4 / 8),
					fontSize: 24,
					fontWeight: 700,
					lineHeight: 1.5,
					textAlign: "center",
					textTransform: "none",
					padding: theme.spacing(
						1,
						2
					),
					"&:hover": {
						opacity: 0.8,
						backgroundColor: theme.palette.secondary.light,
						boxShadow: "none",
					},
					"&:disabled": {
						backgroundColor: theme.palette.secondary.light,
						color: theme.palette.common.white,
						opacity: 0.24,
					}
				},
			},
			{
				props: { variant: "outlined" },
				style: {
					margin: 0,
					backgroundColor: theme.palette.primary.contrastText,
					color: theme.palette.primary.main,
					borderRadius: theme.spacing(2 / 8),
					fontSize: 14,
					fontWeight: 700,
					lineHeight: 1.5,
					textAlign: "center",
					textTransform: "none",
					padding: theme.spacing(
						11 / 8,
						0
					),
					"&.MuiButtonBase-root.MuiButton-root&:hover": {
						backgroundColor: theme.palette.common.white,
					},
					"&:hover": {
						opacity: 0.8,
						backgroundColor: theme.palette.common.white,
						boxShadow: "none",
					},
					"&:disabled": {
						backgroundColor: theme.palette.common.white,
						color: theme.palette.primary.main,
						opacity: 0.45,
					}
				},
			},
		],
	},
	MuiInput: {
		styleOverrides: {
			root: {
				color: theme.palette.primary.main,
				backgroundColor: theme.palette.primary.main,
				borderRadius: theme.spacing(4 / 8),
				fontSize: 24,
				"&::placeholder": {
					fontSize: 14,
					fontWeight: 500,
					lineHeight: 1.5,
					color: theme.palette.primary.main,
					opacity: 0.45,
				},
				transition: "0.3s ease",

				"&.MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
					borderColor: theme.palette.primary.main,
				},
			}
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				fontSize: 24,
				borderRadius: theme.spacing(4 / 8),
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.info.dark,
			}
		}
	},

	MuiPaper: {
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.background.paper
			}
		}
	},
};
