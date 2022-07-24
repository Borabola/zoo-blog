import { FC } from "react";
import {
	screen, fireEvent, waitFor
} from "@testing-library/react";
import { renderWithWrapper } from "../../lib/testHelper"
import { useIntl } from "react-intl";
import { useEnqueueSnackbar } from "./useEnqueueSnackbar";

const TestComponent: FC = () => {
	const intl = useIntl();
	const {
		enqueueSnackbarError,
		enqueueSnackbarSuccess,
		enqueueSnackbarWarning
	} = useEnqueueSnackbar();

	const clickHandler = () => {
		enqueueSnackbarSuccess("Success Message");
		enqueueSnackbarError("Error Message");
		enqueueSnackbarWarning("Warning Message")

	}

	return (
		<button onClick={clickHandler}></button>
	);
};

describe(
	"Page: Home: AllPosts",
	() => {
		it(
			"should render correctly ",
			async () => {

				renderWithWrapper(
					<TestComponent />
				);

				fireEvent.click(screen.getByRole("button"));

				await waitFor(() => {
					expect(screen.getByText(/Success Message/i)).toBeInTheDocument();
					expect(screen.getByText(/Error Message/i)).toBeInTheDocument();
					expect(screen.getByText(/Warning Message/i)).toBeInTheDocument();
				})
			}
		);
	}
);
