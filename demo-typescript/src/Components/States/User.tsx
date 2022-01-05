import { type } from 'os'
import React , {useState} from 'react'

type AuthUser = {
    name : string,
    email : string
}

function User() {
 
    const  [user, setuser] = useState<AuthUser | null>(null)

    const handleLogin = () =>{
        setuser({
            name : 'vishal',
            email : 'vishal123@gmail.com'
        })
    }

    const handleLogout = () => {
        setuser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h3>user name is {user?.name}</h3>
            <h3>user email is {user?.email}</h3>
        </div>
    )
}

export default User
