import { get_client_address, get_client } from '@/requests/client'

export const getClient = async (client_id, setValue) => {
    const resp = await get_client(client_id)
    if (resp.status === 200) {
        setValue({
            name: resp?.data?.name,
            email: resp?.data?.email,
            website: resp?.data?.website,
            phone: resp?.data?.phone,
            description: resp?.data?.description,
        })
    }
}

export const getClientAddres = async (client_id, setValue) => {
    const resp = await get_client_address(client_id)
    if (resp.status === 200) {
        setValue({
            address_id: resp?.data?.id,
            client_id: resp?.data?.client_id,
            address: resp?.data?.address,
            state: resp?.data?.state,
            city: resp?.data?.city,
            zip_code: resp?.data?.zip_code,
        })
    }
}