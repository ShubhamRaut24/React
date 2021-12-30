import React from 'react'

 function ConditionalS() {

  let  isLoggedIn = false;

   if(isLoggedIn)
   {
       return(
           <div>
               <p>Welcome User</p>
           </div>
       )
   }
   else{
       return (
        <div>
        <p>Welcome Guest</p>
        </div>
       )
   }
    



}
export default ConditionalS;