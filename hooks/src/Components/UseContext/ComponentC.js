import React, {useContext} from 'react'
import { UserContext1, UserContext2 } from '../../App'




function ComponentC() {
    const user1 = useContext(UserContext1)
    const user2 = useContext(UserContext2)
    return (
        <div>
           Hello!! {user1} {user2}
        </div>
    )
}

export default ComponentC
