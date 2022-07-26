import { Theme } from "@mui/material";

export const postGridStyles = {
	grid: {
		listStyle: "none",
		margin: 0,
		padding: 0,
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
		gap: (theme: Theme) => theme.spacing(4),
		alignContent: "center",
		"& a": {
  		textDecoration: "none",
		},
	}
};
