import { Message } from "types";

export type ContactFormContent = Omit<Message, "id">;
