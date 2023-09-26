import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import NewClientContainer from '@/partials/client/newClient/NewClientStart'
import ClientProfile from '@/partials/client/Profile/ClientProfile'
// import NewClientHome from '@/partials/client/newClient/NewClientHome'

function Dashboard() {
    const { data: session } = useSession()
    return (
        <div>
            {
                // session?.user?.client_id ? <div>Sí hay cliente</div> : <newClientContainer/>
                // <NewClientContainer/>
                <ClientProfile />
            }
        </div>
    )
}

export default Dashboard
