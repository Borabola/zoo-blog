import {Theme} from "@mui/material";

export const featuredPostStyles =  {
	latest: {
		width: "90%",
  	maxWidth: (theme: Theme) => theme.spacing(1280 / 8),
  	margin: (theme: Theme) => theme.spacing(
			4,
			"auto"
		),
	},
	featuredTitle: {
		margin: (theme: Theme) => theme.spacing(
			6,
			"auto"
		),
		color: "primary.contrastText",
  	textAlign: "center",
	}
};
