import { validate_user_client } from '@/backend/db/client'

export default async function GET(req, res) {
    const { client_id } = req.params

    try {
        const resp = await validate_user_client(client_id)
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}
