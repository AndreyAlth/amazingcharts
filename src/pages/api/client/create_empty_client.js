import { create_empty_client } from '@/backend/db/client'

export default async function GET(req, res) {
    const { user_id } = req.params

    try {
        const resp = await create_empty_client(client_id)
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}
