import conection from '@/db/conection'

export async function insert_rel_user_socket({user_id, socket_id}) {
    console.log(user_id, socket_id)
    const text = `INSERT into rel_user_socket (user_id, socket_id) values($1, $2) returning *`
    const res = await conection.query(text, [user_id, socket_id])
    return res.rows[0]
}