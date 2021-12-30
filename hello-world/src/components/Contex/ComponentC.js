import React from 'react'
import { UserConsumer } from './userContext'

function ComponentC() {
    return (
       

            <UserConsumer>
                {
                    username =>{
                        return <div> Component C and value passed  from app.js is {username} </div>
                    }
                }
           
            </UserConsumer>
       
    )
}

export default ComponentC
