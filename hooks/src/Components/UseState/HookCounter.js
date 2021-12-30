import React, {useState} from 'react'

function HookCounter() {
    
    const [count, setstate] = useState(0)

    
    
    return (
        <div>
            <button onClick={() => {setstate(count+1)}}>State function counter {count}</button>
        </div>
    )
}

export default HookCounter
