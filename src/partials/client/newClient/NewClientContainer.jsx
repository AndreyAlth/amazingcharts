import Link from 'next/link'
import React, { useState } from 'react'
import IconHome from '@/components/Icon/IconHome'
import IconUser from '@/components/Icon/IconUser'
import IconPhone from '@/components/Icon/IconPhone'
import IconLocation from '@/components/Icon/IconLocation'
import NewClientHome from './NewClientHome'
import NewClientAddress from './NewClientAddress'
import NewClientAdmin from './NewClientAdmin'
import NewClientDangerZone from './NewClientDangerZone'

function NewClientContainer() {
    const [tap, setTap] = useState('home')
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Users
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Account Settings</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="mb-5 flex items-center justify-between">
                    <h5 className="text-lg font-semibold dark:text-white-light">Settings</h5>
                </div>
                <div>
                    <ul className="mb-5 overflow-y-auto whitespace-nowrap border-b border-[#ebedf2] font-semibold dark:border-[#191e3a] sm:flex">
                        <li className="inline-block">
                            <button
                                onClick={() => setTap('home')}
                                className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${
                                    tap === 'home' ? '!border-primary text-primary' : ''
                                }`}>
                                <IconHome />
                                Home
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => setTap('address')}
                                className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${
                                    tap === 'address' ? '!border-primary text-primary' : ''
                                }`}>
                                <IconLocation />
                                Address
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => setTap('admins')}
                                className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${
                                    tap === 'admins' ? '!border-primary text-primary' : ''
                                }`}>
                                <IconUser className="w-5 h-5" />
                                Administrators
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => setTap('danger-zone')}
                                className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${
                                    tap === 'danger-zone' ? '!border-primary text-primary' : ''
                                }`}>
                                <IconPhone />
                                Danger Zone
                            </button>
                        </li>
                    </ul>
                </div>
                {tap === 'home' && <NewClientHome />}
                {tap === 'address' && <NewClientAddress />}
                {tap === 'admins' && <NewClientAdmin />}
                {tap === 'danger-zone' && <NewClientDangerZone />}
            </div>
        </div>
    )
}

export default NewClientContainer
