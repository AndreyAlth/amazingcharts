import conection from '@/db/conection'

export async function create_client({name}) {
    const text = `INSERT into clients (name, created) values($1, now()) returning *`
    const res = await conection.query(text, [name])
    return res.rows[0]
}

export async function validate_user_client(client_id) {
    const text = `select * from clients 
    inner join users on clients.id = users.client_id`
    const res = await conection.query(text, [client_id])
    return res.rowCount
}