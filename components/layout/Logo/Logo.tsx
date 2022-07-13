import { FC } from "react";
import { useIntl } from "react-intl";
import classes from "./Logo.module.css";

const Logo: FC = () => {
	const intl = useIntl();
	return <div className={classes.logo}> {intl.formatMessage({
		id: "mykolaivZooBlog",
		defaultMessage: "Mykolaiv Zoo Blog"
	})}</div>;
}

export default Logo;
