import { render, screen } from "@testing-library/react";
import { Form, Formik} from "formik";
import { FormFieldText } from "./FormFieldText";
import "@testing-library/jest-dom";

const testFormName = "testName";

const initialValues = {
	testName: "initial value"
};

const testSubmit = jest.fn();

describe(
	"Component: FormFieldText",
	() => {
		it(
			"should render placeholder correctly ",
			() => {
				render(
					<Formik
					initialValues={initialValues}
					validateOnBlur={false}
					onSubmit={testSubmit}
			>
				{({
					isSubmitting
				}) => (
					<Form>
							<FormFieldText
								name={testFormName}
								title={testFormName}
								placeholder="testPlaceholder"
							/>
					</Form>
				)}
			</Formik>)

				expect(screen.getByPlaceholderText(/testPlaceholder/i)).toBeInTheDocument();
			}
		);
		it(
			"should render initialValues of FormField correctly ",
			() => {
				render(
					<Formik
					initialValues={initialValues}
					validateOnBlur={false}
					onSubmit={testSubmit}
			>
				{({
					isSubmitting
				}) => (
					<Form>
							<FormFieldText
								name={testFormName}
								title={testFormName}
								placeholder="testPlaceholder"
							/>
					</Form>
				)}
			</Formik>)
				expect(screen.getByDisplayValue(/initial value/i)).toBeInTheDocument();
			}
		);
	}
);
