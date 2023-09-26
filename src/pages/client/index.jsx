import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import NewClientContainer from '@/partials/client/newClient/NewClientStart'
import ClientProfile from '@/partials/client/Profile/ClientProfile'

function Dashboard() {
    const { data: session } = useSession()
    return (
        <div>
            {
                session?.user?.client_id ? <ClientProfile /> : <NewClientContainer/>
            }
        </div>
    )
}

export default Dashboard
