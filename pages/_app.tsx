import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import "../styles/globals.css";
import Layout from "../components/layout/Layout/Layout";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;