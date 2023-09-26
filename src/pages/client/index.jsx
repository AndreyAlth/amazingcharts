import React from 'react'
import { useSession } from 'next-auth/react'
import NewClientStart from '@/partials/client/newClient/NewClientStart'
import ClientProfile from '@/partials/client/Profile/ClientProfile'

function Dashboard() {
    const { data: session } = useSession()
    return (
        <div>
            {
                session?.user?.client_id ? <ClientProfile /> : <NewClientStart/>
            }
        </div>
    )
}

export default Dashboard
