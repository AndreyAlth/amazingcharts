import conection from '@/db/conection'

export async function create_user({ client_id, name, last_name, email, email_verified, profile_img }) {
    const text = `INSERT into users (client_id, name, last_name, email, email_verified, image, created) values($1, $2, $3, $4, $5, $6, now()) returning *`
    const res = await conection.query(text, [client_id, name, last_name, email, email_verified, profile_img])
    return res.rowCount
}

export async function get_user_by_email(email) {
    const text = `select * from users where email = $1`
    const res = await conection.query(text, [email])
    return res.rows[0]
}

export async function get_user(user_id) {
    const text = `select * from users where id = $1`
    const res = await conection.query(text, [user_id])
    return res.rowCount
}

export async function add_client_user({user_id, client_id}) {
    const text = `update users set client_id = $2 where id = $1 returning *`
    const res = await conection.query(text, [user_id, client_id])
    return res.rows[0]
}
