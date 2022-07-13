import { render, screen } from "@testing-library/react";
import { FC } from "react";
import { IntlProvider, useIntl } from "react-intl";
import messagesEn from "../../i18n/en.json";
import { MessagesProps, AppIntlProps } from "./AppIntlProvider.types";

const testMessageId = "sendMessage";

export const FakeIntlProvider: FC<AppIntlProps> = ({
	children
}) => {
	// dictionary keys with translation
	const messages: MessagesProps = {
		en: messagesEn,
		"en-US": messagesEn
	};

	return (
		<IntlProvider
			locale={"en-US"}
			messages={messages["en-US"]}
		>
			{children}
		</IntlProvider>
	);
};

const FakeComponent: FC = () => {
	const intl = useIntl();

	return (
		<p>{intl.formatMessage({ id: testMessageId })}</p>

	);
};

describe(
	"IntlProvider tests",
	() => {
		it(
			"should render correct text",
			() => {
				render(<FakeIntlProvider>
					<FakeComponent />
           </FakeIntlProvider>);

				const testText = messagesEn[testMessageId] as string;

				expect(screen.getByText(testText)).toBeInTheDocument();
			}
		);
	}
);
