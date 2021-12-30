import React, {useState} from 'react'

function HookCounter2() {
    
    const [count, setstate] = useState(0)

    return (
        <div>
            {count}:
            <button onClick={() => {setstate(prevState => 0)}}>Reset</button>
            <button onClick={() => {setstate(prevState => prevState+1)}}>Increament</button>
            <button onClick={() => {setstate(prevState => prevState-1)}}>Decreament</button>
            <button onClick={() => {setstate(prevState => prevState+5)}}>Increament by 5</button>
        </div>
    )   
}

export default HookCounter2