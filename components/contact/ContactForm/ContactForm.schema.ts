import {
	object,
	string
} from "yup";

export const validateShema = () => object({
	email: string().email().max(255).required(),
	name: string().max(50).required(),
	message: string().max(500).required()
});
