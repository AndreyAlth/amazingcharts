import React from 'react'
import { ToastContainer } from 'react-toastify'
import NewClientContainer from '@/partials/client/newClient/NewClientContainer'

function ClientEdit() {
  return (
    <div>
        <NewClientContainer/>
        <ToastContainer />
    </div>
  )
}

export default ClientEdit