import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '../../.env') })

export const MONGO_URL = process.env.MONGO_URL