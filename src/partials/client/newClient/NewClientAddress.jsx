import { get_client_address, edit_client_address } from '@/requests/client'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import IconLoading from '@/components/Icon/IconLoading'
import React, { useState, useEffect } from 'react'

function NewClientAddress() {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false)
    const [clientAddress, setClientAddress] = useState({
        address_id: null,
        client_id: null, 
        address: null,
        state: null,
        city: null,
        zip_code: null,
    })

    const handlerInput = async (value, nameKey) => {
        setClientAddress({
            ...clientAddress,
            [nameKey]: value,
        })
    }

    const getClientAddres = async () => {
        const resp = await get_client_address(session?.user?.client_id)
        if (resp.status === 200) {
            setClientAddress({
                address_id: resp?.data?.id,
                client_id: resp?.data?.client_id,
                address: resp?.data?.address,
                state: resp?.data?.state,
                city: resp?.data?.city,
                zip_code: resp?.data?.zip_code,
            })
        }
    }

    const editClientAddress = async () => {
        setLoading(true)
        const resp = await edit_client_address({...clientAddress})
        console.log(resp)
        if (resp.status === 200) {
            toast.success('Address edited', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            setLoading(false)
        } else {
            toast.error('Address not edited', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            setLoading(false)
        }
    }

    useEffect(() => {
        if (session) {
            getClientAddres()
        }
    }, [session])

    return (
        <div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="panel col-span-2">
                    <div className="mb-5">
                        <h5 className="mb-4 text-lg font-semibold">Add Your Address</h5>
                    </div>
                    {
                        console.log(clientAddress)
                    }
                    <div className="mb-5">
                        <div>
                            <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                <div className="md:col-span-2">
                                    <label htmlFor="billingAddress">Address</label>
                                    <input
                                        id="billingAddress"
                                        type="text"
                                        placeholder="Enter Address"
                                        className="form-input"
                                        defaultValue={clientAddress?.address}
                                        onChange={(e) => handlerInput(e.target.value, 'address')}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="billingCity">City</label>
                                    <input
                                        id="billingCity"
                                        type="text"
                                        placeholder="Enter City"
                                        className="form-input"
                                        defaultValue={clientAddress?.city}
                                        onChange={(e) => handlerInput(e.target.value, 'city')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="billingState">State</label>
                                    <input
                                        id="billingCity"
                                        type="text"
                                        placeholder="Enter City"
                                        className="form-input"
                                        defaultValue={clientAddress?.state}
                                        onChange={(e) => handlerInput(e.target.value, 'state')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="billingZip">Zip</label>
                                    <input
                                        id="billingZip"
                                        type="text"
                                        placeholder="Enter Zip"
                                        className="form-input"
                                        defaultValue={clientAddress?.zip_code}
                                        onChange={(e) => handlerInput(e.target.value, 'zip_code')}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={() => editClientAddress()}>
                                {loading ? (
                                    <>
                                        <IconLoading />
                                        Loading...
                                    </>
                                ) : (
                                    <>Save</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewClientAddress
