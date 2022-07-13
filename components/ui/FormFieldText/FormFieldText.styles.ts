import { Theme } from "@mui/material";

export const styles = {
	field: {
		margin: (theme: Theme) => theme.spacing(
			1.25,
			0
		),
		"&:hover": {
			borderColor: "primary.dark",
			"& .MuiFormLabel-root.MuiInputLabel-root": {
			}
		},
		"&:focus": {
			borderColor: "background.dafault",
		},
	},
};
