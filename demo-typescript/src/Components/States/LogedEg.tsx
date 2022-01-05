import React,{useState} from 'react'



function LogedEg() {
     const [isLoggedIn, setisLoggedIn] = useState(false)

const handleLogin = () =>{
    setisLoggedIn(true)
}
const handleLogout = () => {
    setisLoggedIn(false)
}

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <h3>{isLoggedIn ? 'Loged In ': 'Loged out'}</h3>
        </div>
    )
}

export default LogedEg
