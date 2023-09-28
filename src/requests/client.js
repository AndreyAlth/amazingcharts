import api from './api'

export const validate_client = async (client_id) => {
    try {
        const res = await api.get('/api/client/validate_client', {
            params: {
                client_id,
            },
        })
        return res
    } catch (error) {
        return error
    }
}

export const create_empty_client = async ({ user_id }) => {
    try {
        const res = await api.post('/api/client/create_empty_client', {
            user_id,
        })
        return res
    } catch (error) {
        return error
    }
}

export const edit_client_general_info = async ({ client_id, name, email, website, phone, desc }) => {
    try {
        const res = await api.post('/api/client/edit_client_general_info', {
            client_id,
            name,
            email,
            website,
            phone,
            desc,
        })
        return res
    } catch (error) {
        return error
    }
}

export const get_client = async (client_id) => {
    try {
        const res = await api.get('/api/client/get_client', {
            params: {
                client_id
            }
        })
        return res
    } catch (error) {
        return error
    }
}