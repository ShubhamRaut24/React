
import React from 'react'
import Login from './Login'

type PrivateProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType
}

function Private({isLoggedIn, Component}:PrivateProps) {
    if(isLoggedIn){
    return (
        <div>
          <Component/>  
        </div>
    )}
    else
    {
        return(
            <Login></Login>
        )
    }
}

export default Private
