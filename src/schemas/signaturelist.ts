import { Schema, Document, model } from 'mongoose'
import { ISignature, SignatureSchema } from './signature';

export interface ISignatureList extends Document{
    signatures: [ISignature]
}

export const signatureListSchema: Schema = new Schema({
    signatures: { type: [SignatureSchema] }
})

const SignatureList = model<ISignatureList>('SignatureList', signatureListSchema)
export default SignatureList