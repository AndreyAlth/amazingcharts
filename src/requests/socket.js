import api from './api'

export const get_socket = async (user_id) => {
    try {
        const res = await api.get('/api/socket', {
            params: {
                user_id,
            },
        })
        return res
    } catch (error) {
        return error
    }
}