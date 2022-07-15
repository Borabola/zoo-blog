import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { Form, Formik, FormikHelpers } from "formik";
import { Message } from "types";
import { Button } from "../../../components/ui/Button/Button";
import { useEnqueueSnackbar } from "../../../hooks/useEnqueueSnackbar/useEnqueueSnackbar";
import { FormFieldText } from "../../../components/ui/FormFieldText/FormFieldText";
import { getIntlTexts } from "./ContactForm.text";
import { validateShema } from "./ContactForm.schema";
import { sendContactData } from "./ContactForm.utils";
import { contactFormStyles } from "./ContactFom.styles";

const ContactForm = () => {
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

	const initialValues: Message = {
		id: null,
		email: "",
		name: "",
		message: "",
	}
	const sendMessageHandler = async (
		values: Message, form: FormikHelpers<Message>
	) => {
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
		<Box sx={contactFormStyles.contact}>
			<Typography variant="h1">
				{intl.formatMessage({
					id: "howCanIHelpYou",
					defaultMessage: "How can I help you?"
				})}
			</Typography>
			<Formik
				initialValues={initialValues}
				validateOnBlur={false}
				validationSchema={validateShema}
				onSubmit={sendMessageHandler}
			>
				{({
					isSubmitting
				}) => (
					<Form>
						<Box sx={contactFormStyles.controls}>
							<FormFieldText
								sx={contactFormStyles.control}
								name="email"
								title="Email"
								placeholder="Email"
							/>
							<FormFieldText
								sx={contactFormStyles.control}
								name="name"
								title="Name"
								placeholder="Name"
							/>
						</Box>
						<FormFieldText
							sx={contactFormStyles.control}
							name="message"
							title="Message"
							placeholder="Message"
							multiline
							minRows={3}
							maxRows={4} />
						<Box sx={contactFormStyles.actions}>
							<Button
								color="primary"
								type="submit"
								variant="contained"
								disabled={isSubmitting}
								isLoading={isSubmitting}
							>
								{intl.formatMessage({
									id: "sendMessage",
									defaultMessage: "Send Message"
								})}
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</Box>
	);
}

export default ContactForm;
