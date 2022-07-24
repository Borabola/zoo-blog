import { ObjectId } from "mongodb";

export type Message = {
	id?: ObjectId | null,
	email: string,
	name: string,
	message: string,
};
