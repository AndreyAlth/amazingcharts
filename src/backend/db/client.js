import conection from '@/db/conection'

export async function create_empty_client() {
    const text = `INSERT into clients (name) values(null) returning *`
    const res = await conection.query(text, [])
    return res.rows[0]
}

export async function validate_user_client(client_id) {
    const text = `select * from clients 
    inner join users on clients.id = users.client_id`
    const res = await conection.query(text, [client_id])
    return res.rowCount
}

export async function edit_client_general_info({ client_id, name, email, website, phone, description }) {
    const text = `update clients set name = $2, email = $3, website = $4, phone = $5, description = $6 where id = $1 returning *`
    const res = await conection.query(text, [client_id, name, email, website, phone, description ])
    return res.rowCount
}

export async function get_client(client_id) {
    const text = `select * from clients where id = $1`
    const res = await conection.query(text, [client_id])
    return res.rows[0]
}
