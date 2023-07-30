import * as mongoose from "mongoose";

export const askSchema = new mongoose.Schema({
    ask: {type: String , required: true , default: ""},
    questions: {type: [String] , required: true , default: [""]},
    response: {type: String , required: true , default: ""}
})
