import { get_client_address } from '@/backend/db/client'

export default async function GET(req, res) {
    const { client_id } = req.query

    try {
        const client = await get_client_address(client_id)

        if (client?.id) {
            res.status(200).json(client)
        }
    } catch (error) {
        console.log(error)
        res.status(404).json('Hubo un error con la ubicacion del cliente')
    }
}