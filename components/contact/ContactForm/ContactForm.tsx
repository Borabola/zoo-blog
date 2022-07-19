import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { Form, Formik } from "formik";
import { Button } from "../../../components/ui/Button/Button";
import { FormFieldText } from "../../../components/ui/FormFieldText/FormFieldText";
import { validateShema } from "./ContactForm.schema";
import { contactFormStyles } from "./ContactFom.styles";
import { ContactFormProps } from "./ContactForm.types"

const ContactForm: FC<ContactFormProps> = ({
	initialValues,
	onSubmit
}) => {
	const intl = useIntl();
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
				onSubmit={onSubmit}
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
								data-testid="submitBtn"
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
