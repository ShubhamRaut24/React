import { type } from 'os'
import React from 'react'

type listType = {
    name: {
        id:number,
        first:string,
        last:string

    }[]
}

function PersonList(props:listType) {
    return (
        <div>
            {props.name.map(names=>{
                return(
                    <h3 key={names.id}>{names.first} {names.last}</h3>
                )
            })}
        </div>
    )
}

export default PersonList
