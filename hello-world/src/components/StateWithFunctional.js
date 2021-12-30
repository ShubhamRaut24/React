import { useState } from "react"


function StateWithFunctional() {

    const [name, setName] = useState("Puneet")
     
   function changeName()
    {
        setName("Chetan")
      
    }
  
    return (
        <div>
             <h1>{name}</h1>
             <button onClick = {changeName}>Change Name</button>
        </div>
    )
}

export default StateWithFunctional
