import { Theme } from "@mui/material";

export const allPostsStyles = {
	posts: {
		width: "90%",
		maxWidth: (theme: Theme) => theme.spacing(960 / 8),
		margin: (theme: Theme) => theme.spacing(4, "auto"),
	},
	title: {
		margin: (theme: Theme) => theme.spacing(
			6,
			"auto"
		),
		color: "primary.contrastText",
  	textAlign: "center",
	}
};
