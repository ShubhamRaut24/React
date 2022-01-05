import React from 'react'

type propType = {
    name : string ,
    messageCount ?: number
    isLoggedIn : boolean

}

function PropsEg(props:propType) {
    return (
        <div>

            {
            <h2>{props.isLoggedIn?`Welcome ${props.name} !! You have ${props.messageCount} Unread messeges`:'welcome guest'}</h2>
            }
            
        </div>
    )
}

export default PropsEg
