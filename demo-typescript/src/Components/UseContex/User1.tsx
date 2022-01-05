import { useContext } from 'react'
import { UserContext } from './UserContext'
import React , {useState} from 'react'



function User1() {
 
    const userContext = useContext(UserContext)

    const handleLogin = () =>{
      if( userContext){
          userContext.setuser({
            name : 'vishal',
            email : 'vishal123@gmail.com'
          })
      }
    }

    const handleLogout = () => {
        if(userContext){
            userContext.setuser(null)
        }
       
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h3>user name is {userContext?.user?.name}</h3>
            <h3>user email is {userContext?.user?.email}</h3>
        </div>
    )
}

export default User1
