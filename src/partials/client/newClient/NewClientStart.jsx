import React, { useState } from 'react'
import NewClient from './NewClient'
import NewClientContainer from './NewClientContainer'

function NewClientStart() {
    const [startClient, setStartClient] = useState(false)
    return (
        <div>
            {!startClient && <NewClient setStartClient={setStartClient}/>}
            {startClient && <NewClientContainer/>}
        </div>
    )
}

export default NewClientStart
