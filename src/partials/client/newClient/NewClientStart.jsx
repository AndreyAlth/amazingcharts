import React, { useState } from 'react'
import NewClient from './NewClient'
import NewClientContainer from './NewClientContainer'
import NewClientAddress from './NewClientAddress'
import NewClientAdmin from './NewClientAdmin'

function NewClientContainer2() {
    const [startClient, setStartClient] = useState(false)
    return (
        <div>
            {!startClient && <NewClient setStartClient={setStartClient}/>}
            {startClient && <NewClientContainer/>}
            {/* {tap === 3 && <NewClientAddress tap={tap} setTap={setTap}/>} */}
            {/* {tap === 4 && <NewClientAdmin tap={tap} setTap={setTap}/>} */}
        </div>
    )
}

export default NewClientContainer2
