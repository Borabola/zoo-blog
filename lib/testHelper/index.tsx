import {
	PropsWithChildren, ReactElement
} from "react";
import { render, RenderOptions } from "@testing-library/react"
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { theme } from "../../theme";
import AppIntlProvider from "../../hoc/AppIntlProvider"

export const renderWithWrapper = (
	ui: ReactElement,
	options?: RenderOptions
) => {

	const Wrapper = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
				<AppIntlProvider>
						<ThemeProvider theme={theme}>
							<SnackbarProvider>
								{children}
							</SnackbarProvider>
						</ThemeProvider>
				</AppIntlProvider>
		)
		return render(
				ui,
				{ wrapper: Wrapper, ...options}
			)
};
