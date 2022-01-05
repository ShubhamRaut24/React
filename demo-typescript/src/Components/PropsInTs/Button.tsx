import React from 'react'


type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void 
}
function Button(props:ButtonProps) {
    return (
        <div>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}

export default Button
