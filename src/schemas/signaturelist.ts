import { Schema, Document, model } from 'mongoose'
import { ISignature, SignatureSchema } from './signature'
import { IInstance } from './instance'

export interface ISignatureList extends Document{
    signatures: [ISignature]
    parent_instance: IInstance['_id']
}

export const signatureListSchema: Schema = new Schema({
    signatures: { type: [SignatureSchema] },
    parent_instance: { type: Schema.Types.ObjectId }
})

const SignatureList = model<ISignatureList>('SignatureList', signatureListSchema)
export default SignatureList