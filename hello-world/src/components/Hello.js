import React from "react";

// JSX

// function Hello(){
//     return(       
//        <div>
//          <h1>Hello World</h1>
//        </div> )
    
// }

const Hello = () =>{                            // now code uses JSX that makes this very easy and simple
                   return( <div>
                     <h1>Hello Amigo!!</h1>
                    </div>)
                   }


//Without using JSX

// const Hello = () =>{

//     return React.createElement('div',null,
//     React.createElement('h1',{id :"hello",className :"dummyclass"},"Hello Amigo!!")) 
// }

export default Hello;