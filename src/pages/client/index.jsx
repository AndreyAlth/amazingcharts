import React from 'react'
import { useSession } from 'next-auth/react'
import NewClientStart from '@/partials/client/newClient/NewClientStart'
import ClientProfile from '@/partials/client/Profile/ClientProfile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Dashboard() {
    const { data: session } = useSession()
    return (
        <div>
            {
                session?.user?.client_id ? <ClientProfile /> : <NewClientStart/>
            }
            <ToastContainer />
        </div>
    )
}

export default Dashboard
