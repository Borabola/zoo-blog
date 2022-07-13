import { FC } from "react";
import Link from "next/link";
import { useIntl } from "react-intl";
import Logo from "../Logo/Logo";
import classes from "./MainNavigation.module.css";

const MainNavigation: FC = () => {
	const intl = useIntl();
	return (
		<header className={classes.header}>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">
							{intl.formatMessage({
								id: "posts",
								defaultMessage: "Posts"
							})}
						</Link>
					</li>
					<li>
						<Link href="/contact">
							{intl.formatMessage({
								id: "contact",
								defaultMessage: "Contact"
							})}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
