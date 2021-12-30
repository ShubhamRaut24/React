import React from "react"

const HelloP = (props) => {  
                              
    return( 
    <div>
      <h1>Hello {props.name} You are {props.race} </h1>
      {props.children}
    </div>
    )
}



// const HelloP = ({name,race,children}) => {  
                              
//     return( 
//     <div>
//       <h1>Hello {name} You are {race} </h1>
//       {children}
//     </div>
//     )
// }

export default HelloP;
