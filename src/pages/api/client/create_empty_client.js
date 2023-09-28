import { create_empty_client } from '@/backend/db/client'
import { add_client_user } from '@/backend/db/user'

export default async function POST(req, res) {
    const { user_id } = req.body

    try {
        const client = await create_empty_client()

    if (client?.id) {
        const resp = await add_client_user({ client_id: client.id, user_id })
        res.status(200).json(resp)
    }
    } catch (error) {
        res.status(404).json('Hubo un error al crear el cliente')
        
    }
}
