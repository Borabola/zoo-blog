import {Theme} from "@mui/material";

export const logoStyles =  {
	logo: {
		textTransform: "uppercase",
  	color: "primary.main",
  	padding: (theme: Theme) => theme.spacing(
			4,
			0
		),
		transition: "0.3s ease",
			"&:hover": {
				color: "info.contrastText"
			}
	},
}
