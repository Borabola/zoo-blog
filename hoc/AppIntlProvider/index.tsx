import { FC } from "react";
import { IntlProvider } from "react-intl";
import messagesEn from "../../i18n/en.json";
import {   MessagesProps } from "./AppIntlProvider.types";
import { AppIntlProps } from "./AppIntlProvider.types";

const AppIntlProvider: FC<AppIntlProps> = ({
	children
}) => {

	const messages: MessagesProps = {
		en: messagesEn,
		"en-US": messagesEn
	};

	return (
		<IntlProvider
			locale={"en-US"}
      		messages={messages["en"]}
		>
			{children}
		</IntlProvider>
	);
};

export default AppIntlProvider;
