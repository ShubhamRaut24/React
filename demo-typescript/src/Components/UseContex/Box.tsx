import React, {useContext} from 'react'
import { TheamContext } from './TheamContex'
import Theam from './Theam'

function Box() {

    const theam = useContext(TheamContext)
    return (
        <div style={{backgroundColor:theam.primary.main, color:theam.secondary.main}}>
            Theam Context
        </div>
    )
}

export default Box
