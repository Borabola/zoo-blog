import {Theme} from "@mui/material";

export const heroStyles =  {
	hero: {
		textAlign: "center",
  	backgroundImage: (theme: Theme) =>`linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.contrastText})`,
		padding: (theme: Theme) => theme.spacing(
			4,
			0
		),
	},
	text: {
		color: "secondary.contrastText"
	},
	title: {
		margin: (theme: Theme) => theme.spacing(
			2,
			0
		),
	},
	description: {
		width: "90%",
  	maxWidth: (theme: Theme) => theme.spacing(640 / 8),
  	margin: "auto",
	},
	image: {
		width:(theme: Theme) => theme.spacing(600 / 8),
  	height: (theme: Theme) => theme.spacing(300 / 8),
  	margin: "auto",
		"& img": {
			objectFit: "cover",
  		objectPosition: "top",
  		width: "100%",
  		height: "100%",
		}
	}
};
