import React, { createContext } from "react";
import Theam from "./Theam";

type TheamContextProviderProps = {
  children : React.ReactNode
}

 export const TheamContext = createContext(Theam)

const TheamContextProvider = ({children,
}:TheamContextProviderProps) => {
    return <TheamContext.Provider value={Theam}>{children}</TheamContext.Provider>
}

export default TheamContextProvider