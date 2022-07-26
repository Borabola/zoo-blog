import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { logoStyles as styles } from "./Logo.styles";

export const Logo: FC = () => {
	const intl = useIntl();
	return (
		<Typography
			variant="h2"
			sx={styles.logo}>
			{intl.formatMessage({
				id: "mykolaivZooBlog",
				defaultMessage: "Mykolaiv Zoo Blog"
			})}
		</Typography>
	);
}

export default Logo;
