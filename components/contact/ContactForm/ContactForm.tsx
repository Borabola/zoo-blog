import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { StatusEnum, Message } from "types";
import { FormikHelpers } from "formik";
import { FormFieldText } from "../../../components/ui/FormFieldText/FormFieldText";
import { Form, Formik } from "formik";
import Notification from "../../ui/Notification/Notification";
import { sendContactData } from "./ContactForm.utils";
import { contactFormStyles } from "./ContactFom.styles";

const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState<null | StatusEnum>(null);
  const [requestError, setRequestError] = useState<null | string>(null);

	const initialValues: Message = {
		id: null,
		email: "",
		name: "",
		message: "",
	}
  useEffect(() => {
    if (requestStatus === StatusEnum.SUCCESS || requestStatus === StatusEnum.ERROR) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);


  const sendMessageHandler = async(
		values: Message, form: FormikHelpers<Message>
	) => {

    setRequestStatus(StatusEnum.PENDING);

    try {
      await sendContactData({
        email: values.email,
        name: values.name,
        message: values.message,
      }
);
      setRequestStatus(StatusEnum.SUCCESS);
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus(StatusEnum.ERROR);
    }

		form.setSubmitting(false);
  }

  let notification;

  if (requestStatus === StatusEnum.PENDING) {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === StatusEnum.SUCCESS) {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === StatusEnum.ERROR) {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <Box sx={contactFormStyles.contact}>
      <h1>How can I help you?</h1>
      	<Formik
					initialValues={initialValues}
					validateOnBlur={false}
					//validationSchema={validateShema}
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
						//sx={styles.editBtn}
						color="primary"
						type="submit"
						variant="contained"
						disabled={isSubmitting}
					>
						Send Message
						{/*{intl.formatMessage({
							id: "admin.save",
							defaultMessage: "Save"
						})}*/}
					</Button>
        </Box>
      </Form>
			)}
			</Formik>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </Box>
  );
}

export default ContactForm;
