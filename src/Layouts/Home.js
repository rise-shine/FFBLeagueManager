import React from 'react'
import { Grid } from '@material-ui/core';
import News from "./News"


const style = {
    Paper: { padding: 20, margin:10}
}

export default props =>
    <Grid container>
        <Grid item sm>
            <News style={style}>
                Left panel
            </News>
        </Grid>
        <Grid item sm>
            <News style={style}>
                Right panel
            </News>
        </Grid>
    </Grid>
