import { FieldMetaProps } from "formik";

export const checkeErrorForMetaField = (meta: FieldMetaProps<Record<string, unknown>>) => {
	return Boolean(meta.touched && meta.error);
};