import React, {useState} from 'react'

function HookWithArray() {

const [item, setItem] = useState([])

const addNumber = () =>{
    setItem([...item, {
        id: item.length,
        value: Math.floor(Math.random()*1000)+1
    }])
}

    return (
        <div>
            <button onClick={addNumber}>Print random Number</button>
            {
                item.map(items =>(<p key={items.id}>{items.value}</p>) )
            }
        </div>
    )
}

export default HookWithArray
