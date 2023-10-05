import { edit_client_general_info } from '@/backend/db/client'

export default async function POST(req, res) {
    const { client_id, name, email, website, phone, description } = req.body
    const client = await edit_client_general_info({ client_id, name, email, website, phone, description })
    res.json(client)
}
