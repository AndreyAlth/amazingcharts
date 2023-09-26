import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import NewClientContainer from '@/partials/client/newClient/NewClientContainer'
import NewClientHome from '@/partials/client/newClient/NewClientHome'

function Dashboard() {
  const { data: session } = useSession()
  return (
    <div>
      {
        // session?.user?.client_id ? <div>Sí hay cliente</div> : <newClientContainer/>
        <NewClientContainer/>
      }
    </div>
  )
}

export default Dashboard