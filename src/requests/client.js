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

export const create_empty_client = async ({user_id}) => {
    try {
        const res = await api.post('/api/client/create_empty_client', {
            user_id
        })
        return res
    } catch (error) {
        return error
    }
}
