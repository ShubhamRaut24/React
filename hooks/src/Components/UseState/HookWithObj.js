import React,{useState} from 'react'

function HookWithObj() {
 

const [name, setName] = useState({fName : '', lName : ''})

    return (
        <form>
            <input type="text" value={name.fName} onChange={event => setName({...name,fName: event.target.value})}></input>
            <input type="text" value={name.lName} onChange={event => setName({...name,lName: event.target.value})}></input>

            <h3>Your first name is {name.fName}</h3>
            <h3>Your last name is {name.lName}</h3>
        </form>
    )
}

export default HookWithObj
