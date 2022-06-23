import React from 'react'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'

function GridContainer() {
    // classes
    let useStyles = makeStyles({
        size: {
            height: "20vh",
            backgroundColor: "lightgray"
        },
        color: {
            color: "lightgreen"
        }
    })
    let classes = useStyles();
    // width => divided into 12 equal part
    return (
        <div>
            {/* The container centers your content horizontally. It's the most basic layout element. */}
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={5} sm={5} md={5} lg={10}>
                        <Paper className={[classes.size, classes.color]}> Hello </Paper>
                    </Grid>

                    <Grid item xs={5} sm={3} md={5} lg={2}>
                        <Paper className={classes.size}> Hello </Paper>
                    </Grid>

                    <Grid item xs={5} sm={6} md={2}>
                        <Paper className={classes.size}> Hello </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default GridContainer