import { Button } from '@mui/material'
import React from 'react'
 import SaveIcon from '@mui/icons-material/Save'
 import { Typography } from '@mui/material'


function IndexB() {
    return (
        <div>

            <Button variant="contained"
            
            startIcon={<SaveIcon
            color=""/>}
            color="error"
            size="large"
                
            >Contained</Button>
           <div>  
               <Typography>Hello</Typography>

               

               </div>

         
        </div>
    )
}

export default IndexB
