import { Schema, Document, model } from 'mongoose'

export interface IInstance extends Document {
    password: string,
    roomcode: string
}

export const InstanceSchema: Schema = new Schema({
    password: {type: String, required: true, maxlength: [40, 'password cannot be more than 40 characters']},
    roomcode: {type: String, required: true, unique: true}
})

export const Instance = model('cardconfig', InstanceSchema)