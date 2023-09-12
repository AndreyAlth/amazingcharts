import { get_user } from '@/backend/auth/database'

export default async function GET(req, res) {
    const user = await get_user()
    res.json(user)
}
