import { getConnection } from '../dbConnnect'
import { CardConfig } from '../../../schemas/cardconfig'
import { route } from 'next/dist/next-server/server/router'

getConnection()

export default async (req, res) => {
    const { method } = req
    
    switch (method) {
        case 'GET':
            try {
                const cardConfig = await CardConfig.findOne({parent_instance: req.body.id})
                res.status(200).json({ success: true, data: cardConfig }) 
            } catch (error) {
                res.status(400).json({success: false})
            }
    }
}