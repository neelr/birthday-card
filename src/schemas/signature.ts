import { Schema, Document, model } from 'mongoose'


export interface ISignature extends Document {
    first_name: string
    last_name: string
    message: string
}

export const SignatureSchema: Schema = new Schema({
    first_name: {type: String, required: true, maxlength: 20},
    last_name: {type: String, required: true, maxlength: 20},
    message: {type: String, required: true, maxlength: 300}
})