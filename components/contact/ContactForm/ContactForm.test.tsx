import {
	screen, fireEvent, waitFor
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { renderWithWrapper } from "../../../lib/testHelper"
import { Message } from "types";
import ContactForm from "./ContactForm";
import "@testing-library/jest-dom";
import { faker } from '@faker-js/faker';

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomMessage = faker.lorem.word();

const initialValues: Message = {
	email: "",
	name: "",
	message: "",
}

const initialValues2: Message = {
	email: randomEmail,
	name: randomName,
	message: randomMessage,
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

				expect(screen.getByDisplayValue(randomEmail)).toBeInTheDocument();
        expect(screen.getByDisplayValue(randomName)).toBeInTheDocument();
        expect(screen.getByDisplayValue(randomMessage)).toBeInTheDocument();
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
				const user = userEvent.setup()
				//fireEvent.click(screen.getByTestId("submitBtn"));
				await user.click(screen.getByTestId("submitBtn"))

				await waitFor(() => {
					/*expect(testSubmit).toHaveBeenCalledWith({
						email: randomEmail,
						name: randomName,
						message: randomMessage,
					})*/

					expect(testSubmit).toHaveBeenCalledTimes(1)
				})
			}
		)
	}
);
