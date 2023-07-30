import { Document } from "mongoose";

export class Ask extends Document {
    ask: string;
    questions: string[];
    response: string
}
