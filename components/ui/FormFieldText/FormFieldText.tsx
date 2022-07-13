import { FC } from "react";
import { Field, FieldProps } from "formik";
import { checkeErrorForMetaField } from "../../../lib/validator/validator";
import { TextField as MuiTextField } from "@mui/material";
import { styles } from "./FormFieldText.styles";
import type { FormFieldTextProps } from "./FormFieldText.types";

export const FormFieldText: FC<FormFieldTextProps> = ({
	name, ...rest
}) => {
	return (
		<Field
			name={name}
			sx={rest.sx ?? styles.field }
		>
			{({ field, meta }: FieldProps) => {
				const { value, ...fieldProps } = field;
				return (
					<MuiTextField
						fullWidth
						margin="normal"
						variant="outlined"
						//variant={variant}
						color="primary"
						error={checkeErrorForMetaField(meta)}
						helperText={meta.touched ? meta.error : ""}
						value={value ?? ""}
						{...fieldProps}
						{...rest}
					/>
				);
			}}
		</Field>
	);
};

export default FormFieldText;
