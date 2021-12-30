import React, {useEffect,useState} from 'react'

function IntervalHookCounter() {
    const[Count, setCount] = useState(0)



const tick = () =>{
    setCount(Count+1)
}

useEffect(() =>{
    const interval = setInterval(tick,1000)
   
    return() =>{
        clearInterval(interval)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[Count])

    return (
        <div>
            <h3>{Count}</h3>
        </div>
    )
}

export default IntervalHookCounter
