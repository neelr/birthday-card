import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '../../.env') })

export const BASE_ID = process.env.BASE_ID
export const API_KEY = process.env.API_KEY