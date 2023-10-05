import { edit_client_address } from '@/backend/db/client'

export default async function POST(req, res) {
    const { address_id, client_id, address, state, city, zip_code } = req.body
    const client = await edit_client_address({ address_id, client_id, address, state, city, zip_code })
    res.json(client)
}
