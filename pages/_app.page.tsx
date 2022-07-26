import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { theme } from "../theme";
import AppIntlProvider from "../hoc/AppIntlProvider"
import "../styles/globals.css";
import Layout from "../components/layout/Layout/Layout";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
		<AppIntlProvider>
			<ThemeProvider theme={theme}>
				<SnackbarProvider
							maxSnack={5}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center",
							}}
							preventDuplicate
							iconVariant={{
								error: <ErrorOutlineIcon style={{ color: "#fff", marginRight: "8px" }} />
							}}
							autoHideDuration={3000}
						>
				<Layout>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" type="image/png" href="/images/site/favicon-zoo-32x32.png"
				/>
					</Head>
					<Component {...pageProps} />
				</Layout>
				</SnackbarProvider>
			</ThemeProvider>
		</AppIntlProvider>
	);
}

export default MyApp;
