import React from 'react'
import {Typography} from '@mui/material'

type PropsType = {
   children:string 
}

function TypographyCom(props:PropsType) {
    return (
       <Typography>
         {props.children}
       </Typography>
    )
}

export default TypographyCom
