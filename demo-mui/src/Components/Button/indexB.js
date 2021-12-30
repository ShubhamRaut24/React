import { Button } from '@mui/material'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save'

function indexB() {
    return (
        <div>

            <Button variant="contained"
            startIcon={<SaveIcon/>}
            >Contained</Button>
         
        </div>
    )
}

export default indexB
