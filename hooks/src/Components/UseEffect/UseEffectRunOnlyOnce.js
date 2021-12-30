import React,{useEffect,useState} from 'react'

function UseEffectRunOnlyOnce() {

const [x, setX] = useState(0);
const [y, setY] = useState(0);

const logMousePosition = event =>{
    console.log("mouse event")
    setX(event.clientX)
    setY(event.clientY)
}

useEffect( () =>
{
    console.log("useEffect called")
    window.addEventListener('mousemove',logMousePosition)
},[])

    return (
        <div>
            Hooks X - {x} and Y - {y}
        </div>
    )
}

export default UseEffectRunOnlyOnce
