import {Theme} from "@mui/material";

export const buttonStyles =  {
	tableBtn: {
		minWidth: (theme: Theme) => theme.spacing(100/8),
		minHeight: (theme: Theme) => theme.spacing(44/8),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: (theme: Theme) => theme.spacing(
			1.25,
			1.875
		),
		fontSize: 24,
		fontWeight: 700,
		borderRadius: (theme: Theme) =>theme.spacing(4 / 8),
		overflow: "hidden",
		outline: "none",
		transition: "0.3 ease",
		backgroundColor: "info.main",
		//boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
		"&.MuiButton-contained": {
			color: "primary.contrastText",
			"&.MuiButtonBase-root.MuiButton-root:hover": {
				backgroundColor: "info.main",
				opacity: 0.8,
			}
		},
		"&:disabled": {
			opacity: 0.24,
		},
		"&:hover": {
			backgroundColor: "secondary.light", //"secondary.light",
		},
		"&:focus": {
			backgroundColor: "secondary.light",
		}
	},
	disabled: {
		opacity: 0.24,
	}
};
