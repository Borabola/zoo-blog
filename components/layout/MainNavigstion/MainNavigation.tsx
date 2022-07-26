import { FC } from "react";
import Link from "next/link";
import { useIntl } from "react-intl";
import { Box, MenuList, MenuItem } from "@mui/material";
import Logo from "../Logo/Logo";
import { navigationStyles as styles } from "./MainNavigation.styles"

export const MainNavigation: FC = () => {
	const intl = useIntl();
	return (
		<Box sx={styles.header}>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
				<MenuList sx={styles.menu}>
					<MenuItem sx={styles.item}>
						<Link href="/posts">
							{intl.formatMessage({
								id: "posts",
								defaultMessage: "Posts"
							})}
						</Link>
					</MenuItem>
					<MenuItem sx={styles.item}>
						<Link href="/contact">
							{intl.formatMessage({
								id: "contact",
								defaultMessage: "Contact"
							})}
						</Link>
					</MenuItem>
				</MenuList>
		</Box>
	);
};

export default MainNavigation;
