import { FC, useMemo } from "react";
import Head from "next/head";
import { useIntl } from "react-intl";
import { FormikHelpers } from "formik";
import { Message } from "types";
import { getIntlTexts } from "../components/contact/ContactForm/ContactForm.text"
import { sendContactData } from "../components/contact/ContactForm/ContactForm.utils";
import { useEnqueueSnackbar } from "../hooks/useEnqueueSnackbar/useEnqueueSnackbar";

import ContactForm from "../components/contact/ContactForm/ContactForm";

const initialValues: Message = {
		id: null,
		email: "",
		name: "",
		message: "",
	}

const ContactPage: FC = () => {
	const intl = useIntl();
	const {
		enqueueSnackbarInfo,
		enqueueSnackbarError,
		enqueueSnackbarSuccess,
	} = useEnqueueSnackbar();

	const msg = useMemo(
		() => getIntlTexts(intl),
		[intl]
	);

	const onSubmit = async (
		values: Message, form: FormikHelpers<Message>
	) => {
		console.log("Sending message")
		enqueueSnackbarInfo(msg.sentInfo);
		try {
			await sendContactData({
				email: values.email,
				name: values.name,
				message: values.message,
			}
			);
			enqueueSnackbarSuccess(msg.sentSuccess);
			form.resetForm();
		} catch (error) {
			enqueueSnackbarError(msg.sentError);
		}

		form.setSubmitting(false);
	}
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm
				initialValues={initialValues}
				onSubmit={onSubmit}
			/>
    </>
  );
}

export default ContactPage;
