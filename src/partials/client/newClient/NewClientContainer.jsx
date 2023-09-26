import React, { useState } from 'react'
import NewClient from './NewClient'
import NewClientHome from './NewClientHome'
import NewClientAddress from './NewClientAddress'
import NewClientAdmin from './NewClientAdmin'

function NewClientContainer() {
    const [tap, setTap] = useState(1)
    return (
        <div>
            {tap === 1 && <NewClient setTap={setTap}/>}
            {tap === 2 && <NewClientHome tap={tap} setTap={setTap}/>}
            {tap === 3 && <NewClientAddress tap={tap} setTap={setTap}/>}
            {tap === 4 && <NewClientAdmin tap={tap} setTap={setTap}/>}
        </div>
    )
}

export default NewClientContainer
