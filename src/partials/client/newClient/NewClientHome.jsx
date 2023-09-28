import React, { useEffect, useState } from 'react'
import { edit_client_general_info, get_client } from '@/requests/client'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

function NewClientHome() {
    const { data: session } = useSession()
    const [loading, setLoading] = useState(false)
    const [client, setClient] = useState({
        name: '',
        email: '',
        website: '',
        phone: '',
        desc: '',
    })

    const getClient = async () => {
        const resp = await get_client(session?.user?.client_id)
        if (resp.status === 200) {
            setClient({
            name: resp?.data?.name,
            email: resp?.data?.email,
            website: resp?.data?.website,
            phone: resp?.data?.phone,
            desc: resp?.data?.desc,
        })
        }
        
    }

    const editClient = async () => {
        // const resp =
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
    }

    useEffect(() => {
        getClient()
    }, [])

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
                            <input id="name" type="text" placeholder="Jimmy Turner" className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="mail" placeholder="hi@example.com" className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                type="url"
                                placeholder="www.company.com"
                                pattern="https://.*"
                                size="30"
                                className="form-input"
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Contact Number</label>
                            <div className="flex space-x-5">
                                <select
                                    id="country"
                                    className="form-select text-white-dark w-[20%]"
                                    name="country"
                                    defaultValue="United States">
                                    <option value="All Countries">All Countries</option>
                                    <option value="United States">United States</option>
                                    <option value="India">India</option>
                                    <option value="Japan">Japan</option>
                                    <option value="China">China</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <input id="address" type="text" placeholder="New York" className="form-input" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location">Company description</label>
                            <textarea id="location" type="textarea" placeholder="Location" className="form-input" />
                        </div>
                        {/* <div>
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" type="text" placeholder="+1 (530) 555-12121" className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Jimmy@gmail.com" className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="web">Website</label>
                            <input id="web" type="text" placeholder="Enter URL" className="form-input" />
                        </div> */}
                        <div className="mt-3 sm:col-span-2">
                            <button className="btn btn-primary" onClick={editClient}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewClientHome
