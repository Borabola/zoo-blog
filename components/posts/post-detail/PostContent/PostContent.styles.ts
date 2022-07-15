import { Theme } from "@mui/material";

export const postContentStyles = {
	content: {
		width: "95%",
		maxWidth: (theme: Theme) => theme.spacing(960 / 8),
		margin: (theme: Theme) => theme.spacing(4, "auto"),
		padding: (theme: Theme) => theme.spacing(4),

		"& p": {
			fontSize: 20,
			lineHeight: 1.6,
		}
	},
	title: {
		margin: (theme: Theme) => theme.spacing(
			6,
			"auto"
		),
		color: "primary.contrastText",
  	textAlign: "center",
	},
	image: {
		margin: (theme: Theme) => theme.spacing(
			2,
			"auto"
		),
		width: "100%",
		maxWidth: (theme: Theme) => theme.spacing(600 / 8),
	}
};
