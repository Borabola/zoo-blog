import { TextFieldProps } from "@mui/material";

export type FormFieldTextProps = Omit<TextFieldProps, "name"> & {
	name: string,
};
