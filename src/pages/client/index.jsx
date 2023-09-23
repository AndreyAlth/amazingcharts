import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

function Dashboard() {
  const { data: session } = useSession()
  return (
    <div>
      {console.log(session)}
      {
        // client ? <div>Sí hay cliente</div> : <div>No hay cliente</div>
      }
    </div>
  )
}

export default Dashboard