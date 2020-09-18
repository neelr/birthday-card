import { Schema, Document, model } from 'mongoose'

let emailRegex: RegExp = /\S+@\S+\.\S+/

export interface IInstance extends Document {
    password: string
    roomcode: string
    email: string
}

export const InstanceSchema: Schema = new Schema({
    password: {type: String, required: true, maxlength: [40, 'password cannot be more than 40 characters']},
    roomcode: {type: String, required: true, unique: [true, 'roomcode already taken']},
    email: {type: String, required: false, match: [emailRegex, 'invalid email']}
})

export const Instance = model('cardconfig', InstanceSchema)