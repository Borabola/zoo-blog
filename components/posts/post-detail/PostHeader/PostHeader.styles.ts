import { Theme } from "@mui/material";

export const postHeaderStyles = {
	header: {
		paddingBottom: (theme: Theme) => theme.spacing(4),
  	borderBottom: `8px solid var(--color-primary-100)`,

  	display: "flex",
  	flexDirection: "column-reverse",
  	justifyContent: "space-between",
  	alignItems: "center",
  	gap: (theme: Theme) => theme.spacing(2),
		"& img": {
			objectFit: "cover",
  		width: (theme: Theme) => theme.spacing(200 / 8),
  		height: (theme: Theme) => theme.spacing(120 / 8),
		}
	},
	title: {
		margin: 0,
		color: "secondary.light",
  	textAlign: "center",
	}
};
