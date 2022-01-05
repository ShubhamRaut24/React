import React from 'react'

type PersonType ={
    names: {
        first:string,
        last: string
    }
}

function Person(props:PersonType) {
    return (
        <div>
            <h2>{props.names.first} {props.names.last}</h2>
        </div>
    )
}

export default Person
