import { Card } from '@mui/material'

import React from 'react'
import CoverImg from '../../atoms/CoverImage/Index'
import TypographyCom from '../../atoms/Typography/Index'

function BookCardM() {
    return (
        <Card sx={{height: "500px", width: "300px"}}>
          <CoverImg images="https://s3-alpha-sig.figma.com/img/9ef8/4879/159f1a8fdf9dafb9b0fd0b3a69170efb?Expires=1642377600&Signature=EavnelSPnBjQuB815mZwYn2sn6lUS1-er9oSuadzRXwxJnveSrAJoYPbwSaM7~NP6N2cdCb~zZw1D4dZMMTZPBW3QwCCVsv9OlkyFuL0WZt~XCMkMjdXjdXKvczF~Fr5dWQ~g-d6Ai~twJhofJwJ54jqRLpTuAfZMS5qYhpqUaWW33ijKXENH5pT4TbO-FcMMcjOHXMAk9s9B0jZntHohkb88E2V72ZdbcSPupq~INbVwuoBqntwX1UT-VwyRZDXGmoWhfy0TslJexFw3nsULzGqbLw4ilxCi7Gcwt35ycXyF8ens6bA2qCWzEAmDpz8bSScF5cOpmpsjaR5lRUYyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></CoverImg>
          <TypographyCom>Beyond Entrepreneurship</TypographyCom>
        </Card>
    )
}

export default BookCardM
