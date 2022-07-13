import { Theme } from "@mui/material";

export const styles =  {
	wrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",

		"& svg": {
			width: (theme: Theme) => theme.spacing(7),
			height: (theme: Theme) => theme.spacing(7),
			animation: `$lds-roller 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
		},
	}
};
