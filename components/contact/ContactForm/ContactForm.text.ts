import { IntlShape } from "react-intl";

export const getIntlTexts = (intl: IntlShape) => ({
	sentSuccess: intl.formatMessage({
		id: "snackbar.sentSuccessfully",
		defaultMessage: "Message sent successfully!",
	}),
	sentInfo: intl.formatMessage({
		id: "snackbar.sentPending",
		defaultMessage: "Your message is on its way!",
	}),
	sentError: intl.formatMessage({
		id: "snackbar.sentError",
		defaultMessage: "Error!",
	}),
});
