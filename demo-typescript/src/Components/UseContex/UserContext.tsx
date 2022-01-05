import { type } from "os";
import React ,{useState,createContext} from 'react'

type AuthUser = {
    name : string,
    email : string
}

type UserContextType = {
    user: AuthUser | null
    setuser: React.Dispatch<React.SetStateAction<AuthUser|null>>
}

type UserContextProviderProps = {
    children : React.ReactNode
}

 export const UserContext = createContext<UserContextType|null>(null)

 function UserContextProvider({children}:UserContextProviderProps)
 {
      const [user, setuser] = useState<AuthUser | null>(null)
     return(
         <UserContext.Provider value={{user, setuser}}>
          {children}
         </UserContext.Provider>

     )
 }
  
 export default UserContextProvider