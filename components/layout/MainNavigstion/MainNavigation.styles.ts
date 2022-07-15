import { Theme } from "@mui/material";

export const navigationStyles = {
	header: {
		width: "100%",
		height: (theme: Theme) => theme.spacing(96 / 8),
		backgroundColor: "primary.dark",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 10%",
	},
	menu: {
		listStyle: "none",
		display: "flex",
		alignItems: "baseline",
		margin: 0,
		padding: 0,
	},
	item: {
		margin: (theme: Theme) => theme.spacing(
			0,
			2),
			fontSize: 20,
		color: "background.default",
			"& a": {
				color: "background.default",
				transition: "0.3s ease",
				"&:hover": {
					color: "info.contrastText"
				},
				"&:focus": {
					color: "info.contrastText"
				},
				"&:active": {
					color: "info.contrastText"
				}
			}
	},
};
