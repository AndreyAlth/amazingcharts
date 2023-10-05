import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import IconPencilPaper from '@/components/Icon/IconPencilPaper';
import IconHome from '@/components/Icon/IconHome'
import IconUser from '@/components/Icon/IconUser'
import IconPhone from '@/components/Icon/IconPhone'
import IconLocation from '@/components/Icon/IconLocation'
import IconMail from '@/components/Icon/IconMail'
import { useSession } from 'next-auth/react'
import {getClient, getClientAddres} from '@/hooks/client'

function ClientProfile() {
    const { data: session } = useSession()
    const [client, setClient] = useState({
        name: null,
        email: null,
        website: null,
        phone: null,
        description: null,
    })
    const [clientAddress, setClientAddress] = useState({
        address_id: null,
        client_id: null, 
        address: null,
        state: null,
        city: null,
        zip_code: null,
    })

    useEffect(() => {
        if (session) {
            getClient(session?.user?.client_id, setClient)
            getClientAddres(session?.user?.client_id, setClientAddress)
        }
    }, [session])
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Company
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Profile</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Profile</h5>
                            <Link
                                href="/client/edit"
                                className="btn btn-primary rounded-full p-2 ltr:ml-auto rtl:mr-auto">
                                <IconPencilPaper />
                            </Link>
                        </div>
                        {console.log({client, clientAddress})}
                        <div className="mb-5">
                            {/* <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/assets/images/profile-34.jpeg"
                                    alt="img"
                                    className="mb-5 h-24 w-24 rounded-full  object-cover"
                                />
                                <p className="text-xl font-semibold text-primary">Jimmy Turner</p>
                            </div> */}
                            <ul className="m-auto mt-5 flex max-w-[300px] flex-col space-y-4 font-semibold text-white-dark">
                                {client.name && (
                                <li className="flex items-center gap-2">
                                <IconHome />
                                {client?.name}
                                </li>
                                )}
                                
                                <li className="flex items-center gap-2">
                                <IconLocation />
                                    {`${clientAddress.address ? clientAddress.address : ''}, ${clientAddress.state ? clientAddress.state : ''}, ${clientAddress.city ? clientAddress.city: ''}, ${clientAddress.zip_code ? clientAddress.zip_code : ''} .`}
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconUser className="w-5 h-5" />
                                    {client?.website}
                                </li>
                                <li>
                                    <button className="flex items-center gap-2">
                                        <IconMail className="w-5 h-5 shrink-0" />
                                        <span className="truncate text-primary">{client?.email}</span>
                                    </button>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconPhone />
                                    <span className="whitespace-nowrap" dir="ltr">
                                        {client?.phone}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientProfile
