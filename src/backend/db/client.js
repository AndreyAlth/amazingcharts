import conection from '@/db/conection'

export async function create_client({name}) {
    const text = `INSERT into clients (name, created) values($1, now()) returning *`
    const res = await conection.query(text, [name])
    return res.rows[0]
}
export async function get_user(user_id) {
    const text = `select * from users where id = $1`
    const res = await conection.query(text, [user_id])
    return res.rowCount
}