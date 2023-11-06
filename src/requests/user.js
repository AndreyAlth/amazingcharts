import api from './api'

export const getUserByEmail = async ({email}) => {
    try {
        const res = await api.post('http://localhost:3000/api/user/signin', {
            email
        })
        return res
    } catch (error) {
        return error
    }
}
