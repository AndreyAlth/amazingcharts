

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

export const edit_client_general_info = async ({ client_id, name, email, website, phone, description }) => {
    try {
        const res = await api.post('/api/client/edit_client_general_info', {
            client_id,
            name,
            email,
            website,
            phone,
            description,
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
                client_id,
            },
        })
        return res
    } catch (error) {
        return error
    }
}

export const get_client_address = async (client_id) => {
    try {
        const res = await api.get('/api/client/get_client_address', {
            params: {
                client_id,
            },
        })
        return res
    } catch (error) {
        return error
    }
}

export const edit_client_address = async ({ address_id, client_id, address, state, city, zip_code }) => {
    try {
        const res = await api.post('/api/client/edit_client_address', {
            address_id,
            client_id,
            address,
            state,
            city,
            zip_code,
        })
        return res
    } catch (error) {
        return error
    }
}
