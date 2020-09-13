import { MONGO_URL } from '../../utils/env'
import { Connection, createConnection } from 'mongoose'

let conn: Connection = null

const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

export const getConnection = async (): Promise<Connection> => {
    if(conn == null){
        conn = await createConnection(MONGO_URL, connectionConfig)
    }
    return conn
}