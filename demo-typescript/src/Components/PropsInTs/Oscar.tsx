import { type } from 'os'
import React from 'react'

type OscarProsp = {
    children : React.ReactNode
}

function Oscar(props:OscarProsp) {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}

export default Oscar
