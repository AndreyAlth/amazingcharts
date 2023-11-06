import { get_user_by_email } from '@/backend/db/user'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body
        const user = await get_user_by_email(email)
        if (!user) {
            res.status(404)
        }
        res.json(user)
    }
}
