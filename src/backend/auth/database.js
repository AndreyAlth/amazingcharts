import conection from '@/db/conection'
// login
// create
export async function create_user({ email, password, username }) {
    const text = `insert into users (email, password, username) values($1, $2, $3)`
    const res = await conection.query(text, [email, password, username])
    return res.rowCount
}
// Verify
// change password
// get user
export async function get_user(user_id) {
    const text = `select * from users where id = $1`
    const res = await conection.query(text, [user_id])
    return res.rowCount
}
// delete
