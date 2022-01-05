import { type } from 'os'
import React from 'react'

type ContainerProps ={
    style:React.CSSProperties
}

function Container( props:ContainerProps) {
    return (
        <div style={props.style}>
            Text Goes Here!!
        </div>
    )
}

export default Container
