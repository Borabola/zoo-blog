import { Theme } from "@mui/material";

export const postItemStyles = {
	post: {
		width: "100%",
		display: "list-item",
		backgroundColor: "primary.contrastText",
		padding: 0,
		textAlign: "center",
		"time": {
  		fontStyle: "italic",
		},
		"&:hover": {
				backgroundColor: "primary.contrastText",
				boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
			},
		"& a": {
			width: "100%",
			textDecoration: "none",
			"&:hover": {
				backgroundColor: "primary.contrastText",
				boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
			}
		}
	},
	content: {
		width: "100%",
		display: "block",
  	padding: (theme: Theme) => theme.spacing(2),
		color: "background.default"
	},
	image: {
		width: "100%",
		maxHeight: (theme: Theme) => theme.spacing(320 / 8),
		overflow: "hidden",
		"& img": {
			objectFit: "cover",
		}
	}

};
