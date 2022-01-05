import { type } from 'os'
import React from 'react'


type StatusProps ={
    status: 'loading' | 'success' | 'error'
}

function Status(props:StatusProps) {

    let messege
    if(props.status==="loading")
    {
         messege = "Loading.."
    }
    else if(props.status==="success")
    {
        messege = "Data Fetched successfully..."
    }
    else if(props.status==="error")
    {
        messege = "Error While fetching data"
    }
    
    return (
        <div>
            <h2>Status - {messege}</h2>
        </div>
    )
}

export default Status
