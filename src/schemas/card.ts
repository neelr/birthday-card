import { Schema, Document, model, Types } from 'mongoose'

export interface ICard extends Document {
    name: string
    date: Date
    bgcolors: [string]
}

export const CardSchema: Schema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    bgcolors: {type:[String], maxlength: 3}
})