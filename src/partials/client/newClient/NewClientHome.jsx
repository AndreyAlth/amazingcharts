import React, { useEffect, useState } from 'react'
import { edit_client_general_info, get_client } from '@/requests/client'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import IconLoading from '@/components/Icon/IconLoading'

function NewClientHome() {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false)
    const [client, setClient] = useState({
        name: '',
        email: '',
        website: '',
        phone: '',
        description: '',
    })

    const handlerInput = async (value, nameKey) => {
        setClient({
            ...client,
            [nameKey]: value,
        })
    }

    const getClient = async () => {
        const resp = await get_client(session?.user?.client_id)
        if (resp.status === 200) {
            setClient({
                name: resp?.data?.name,
                email: resp?.data?.email,
                website: resp?.data?.website,
                phone: resp?.data?.phone,
                description: resp?.data?.description,
            })
        }
    }

    const editClient = async () => {
        setLoading(true)
        const resp = await edit_client_general_info({ ...client, client_id: session.user?.client_id })
        if (resp.status === 200) {
            toast.success('Company edited', {
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
            toast.error('Company not edited', {
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
            getClient()
        }
    }, [session])

    return (
        <div>
            <div className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                <h6 className="mb-5 text-lg font-bold">General Information</h6>
                <div className="flex flex-col sm:flex-row">
                    {/* <div className="mb-5 w-full sm:w-2/12 ltr:sm:mr-4 rtl:sm:ml-4">
                        <img
                            src="/assets//images/profile-34.jpeg"
                            alt="img"
                            className="mx-auto h-20 w-20 rounded-full object-cover md:h-32 md:w-32"
                        />
                    </div> */}
                    <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="form-input"
                                defaultValue={client?.name}
                                onChange={(e) => handlerInput(e.target.value, 'name')}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="mail"
                                className="form-input"
                                defaultValue={client?.email}
                                onChange={(e) => handlerInput(e.target.value, 'email')}
                            />
                        </div>
                        <div>
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                type="url"
                                pattern="https://.*"
                                size="30"
                                className="form-input"
                                defaultValue={client?.website}
                                onChange={(e) => handlerInput(e.target.value, 'website')}
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Contact Number</label>
                            <div className="flex space-x-5">
                                <input
                                    id="address"
                                    type="text"
                                    className="form-input"
                                    defaultValue={client?.phone}
                                    onChange={(e) => handlerInput(e.target.value, 'phone')}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location">Company description</label>
                            <textarea
                                id="location"
                                type="textarea"
                                className="form-input"
                                defaultValue={client?.description}
                                onChange={(e) => handlerInput(e.target.value, 'description')}
                            />
                        </div>
                        <div className="mt-3 sm:col-span-2">
                            <button className="btn btn-primary" onClick={() => editClient()}>
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

export default NewClientHome
