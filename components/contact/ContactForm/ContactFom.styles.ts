import {Theme} from "@mui/material";

export const contactFormStyles =  {
	contact: {
		margin: (theme: Theme) => theme.spacing(
			4,
			"auto"
		),
		borderRadius: (theme: Theme) => theme.spacing( 6 / 8),
		backgroundColor: "background.default",
		width: "90%",
		maxWidth: "50rem",
		padding: (theme: Theme) => theme.spacing( 16 / 8),
		fontSize: 24,
		"& h1": {
			margin: (theme: Theme) => theme.spacing(
			0.5,
			"auto"
		),
  		textAlign: "left",
		}
	},
	controls:  {
		display: "flex",
    columnGap: (theme: Theme) => theme.spacing(2),
	},
	control: {
		flex: 1,
  	minWidth: (theme: Theme) => theme.spacing(20),
	},
	actions: {
		marginTop: (theme: Theme) => theme.spacing(0.5),
		display: "flex",
		justifyContent: "end"
	}
};
