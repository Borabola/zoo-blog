import { FormikHelpers } from "formik";
import { Message } from "types";

export type ContactFormContent = Omit<Message, "id">;

export type ContactFormProps = {
	initialValues: Message;
	onSubmit: (values: Message, form: FormikHelpers<Message>) => void;
};
