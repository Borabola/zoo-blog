import { ReactNode } from "react";

export type DataProps<T> = {
	[key:string]: T
};

export type LocaleProps = DataProps<string>;

export type MessagesProps = DataProps<LocaleProps>;


export type AppIntlProps = {
	children: ReactNode
};
