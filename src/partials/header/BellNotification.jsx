import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Dropdown from '@/components/Dropdown'
import { useSession } from 'next-auth/react'
import io from 'socket.io-client'
import { get_socket } from '@/requests/socket'
let socket

function BellNotification() {
    const { data: session } = useSession()
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: 'user-profile.jpeg',
            message: '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: '45 min ago',
        },
        {
            id: 2,
            profile: 'profile-34.jpeg',
            message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
            time: '9h Ago',
        },
        {
            id: 3,
            profile: 'profile-16.jpeg',
            message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
            time: '9h Ago',
        },
    ])
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false

    const removeNotification = (value) => {
        setNotifications(notifications.filter((user) => user.id !== value))
    }

    const socketInitializer = async () => {
        const user_id = session?.user?.user_id
        await get_socket(user_id)
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('update-notification', (e) => {
            // if (e.user_id === session.user.user_id) {
            //     setInput(e.input_value)
            // }
            console.log('evento detectado')
            console.log(e)
        })
    }

    useEffect(() => {
        if (session) {
            socketInitializer()
        }
    }, [session])

    return (
        <div className="dropdown shrink-0">
            <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={
                    <span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path d="M12 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {notifications.length > 0 && (
                            <span className="absolute -top-2 h-5 w-5 ltr:-right-1 rtl:left-1">
                                <span className="absolute -top-[0px] inline-flex h-full w-full animate-ping rounded-full bg-notification/50 opacity-75 ltr:-left-[1px] rtl:-right-[1px]"></span>
                                <span className="relative inline-flex h-[18px] w-[18px] rounded-full  bg-notification">
                                    <span className="text-xs font-semibold text-center w-full">
                                        {' '}
                                        {notifications.length}
                                    </span>
                                </span>
                            </span>
                        )}
                    </span>
                }>
                <ul className="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]">
                    <li onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-4 py-2 font-semibold">
                            <h4 className="text-lg">Notification</h4>
                            {notifications.length ? (
                                <span className="badge bg-primary/80">{notifications.length}New</span>
                            ) : (
                                ''
                            )}
                        </div>
                    </li>
                    {notifications.length > 0 ? (
                        <>
                            {notifications.map((notification) => {
                                return (
                                    <li
                                        key={notification.id}
                                        className="dark:text-white-light/90"
                                        onClick={(e) => e.stopPropagation()}>
                                        <div className="group flex items-center px-4 py-2">
                                            <div className="grid place-content-center rounded">
                                                <div className="relative h-12 w-12">
                                                    <img
                                                        className="h-12 w-12 rounded-full object-cover"
                                                        alt="profile"
                                                        src={`/assets/images/${notification.profile}`}
                                                    />
                                                    <span className="absolute right-[6px] bottom-0 block h-2 w-2 rounded-full bg-success"></span>
                                                </div>
                                            </div>
                                            <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                                                <div className="ltr:pr-3 rtl:pl-3">
                                                    <h6
                                                        dangerouslySetInnerHTML={{
                                                            __html: notification.message,
                                                        }}></h6>
                                                    <span className="block text-xs font-normal dark:text-gray-500">
                                                        {notification.time}
                                                    </span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                                                    onClick={() => removeNotification(notification.id)}>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <circle
                                                            opacity="0.5"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                        <path
                                                            d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                            <li>
                                <div className="p-4">
                                    <button className="btn btn-primary btn-small block w-full">
                                        Read All Notifications
                                    </button>
                                </div>
                            </li>
                        </>
                    ) : (
                        <li onClick={(e) => e.stopPropagation()}>
                            <button
                                type="button"
                                className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent">
                                <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="#a9abb6"
                                        stroke="#ffffff"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-info rounded-full bg-primary">
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                No data available.
                            </button>
                        </li>
                    )}
                </ul>
            </Dropdown>
        </div>
    )
}

export default BellNotification
