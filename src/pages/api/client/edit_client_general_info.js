import { edit_client_general_info } from '@/backend/db/client'

export default async function POST(req, res) {
    const { client_id, name, email, website, phone, desc } = req.body
    // res.json({ client_id, name, email, website, phone, desc })
    const client = await edit_client_general_info({ client_id, name, email, website, phone, desc })
    res.json(client)
}
