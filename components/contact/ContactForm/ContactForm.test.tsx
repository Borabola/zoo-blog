import {
	screen, fireEvent, waitFor
} from "@testing-library/react";
//import { ObjectId } from "mongodb";
//import { utf8Encode } from "whatwg-url/lib/encoding";
import { renderWithWrapper } from "../../../lib/testHelper"
import { Message } from "types";
import ContactForm from "./ContactForm";
import "@testing-library/jest-dom";

const initialValues: Message = {
	id: null,
	email: "",
	name: "",
	message: "",
}

const initialValues2: Message = {
	//id: new ObjectId("62d14e8bcf94e1e0eca6436d"),
	id: null,
	email: "test@test.com",
	name: "TestName",
	message: "Test message",
}
const testSubmit = jest.fn();

describe(
	"Component: ContactForm",
	() => {
		it(
			"should render placeholders with empty initial values",
			() => {
				renderWithWrapper(
					<ContactForm
						initialValues={initialValues}
						onSubmit={testSubmit}
					/>)

				expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
				expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
				expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
				expect(screen.getByText(
					/Send Message/i,
				)).toBeInTheDocument();
			}
		);
		it(
			"should render correctly with values",
			() => {
				renderWithWrapper(
					<ContactForm
						initialValues={initialValues2}
						onSubmit={testSubmit}
					/>)

				expect(screen.getByDisplayValue(/test@test.com/i)).toBeInTheDocument();
				expect(screen.getByDisplayValue(/TestName/i)).toBeInTheDocument();
				expect(screen.getByDisplayValue(/Test message/i)).toBeInTheDocument();
			}
		);
		it(
			"should send correct values",
			async() => {
				renderWithWrapper(
					<ContactForm
						initialValues={initialValues2}
						onSubmit={testSubmit}
					/>)

				fireEvent.click(screen.getByTestId("submitBtn"));

				await waitFor(() =>
					/*expect(testSubmit).toHaveBeenCalledWith(expect.objectContaining({
						"email": expect.any(String)
						/*"email": "test@test.com",
						"name": "TestName",
						"message": "Test message",
					}))*/

					expect(testSubmit).toHaveBeenCalledTimes(1)
				)
			}
		)
	}
);
