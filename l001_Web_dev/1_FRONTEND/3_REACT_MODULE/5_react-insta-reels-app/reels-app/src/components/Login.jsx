import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, TextField, Typography, Paper, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const { login } = useContext(AuthContext);
    let useStyles = makeStyles({
        centerDivs: {
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            alignItems: "center",
        },
        crousel: {
            height: "10rem",
            backgroundColor: "lightgray"
        },
        centerElements: {
            display: "flex",
            flexDirection: "column",
        },
        alignCenter: {
            justifyContent: "center"
        },
        marginBottom: {
            marginBottom: "4px"
        },
        buttonWidth: {
            width: "100%",
        },
        image: {
            height: "6rem",
            backgroundSize: "contain"
        }
    })

    let classes = useStyles();
    const handleSubmit = async (e) => {
        e.preventDefault(); // it prevent to page reloading
        try {
            setLoader(true);
            await login(email, password); // login => async function
            setLoader(false);
            props.history.push("/"); // redirect to home page => feed page
        } catch {
            // error
            setError(true);
            setLoader(false);

            // reset email and password
            setEmail("");
            setPassword("");
        }
    }
    return (
        <div className={classes.centerDivs}>
            <Container>
                <Grid >
                    <Grid container className="classes.alignCenter" spacing={2}>
                        <Grid item sm={4} >
                            <Paper className={classes.crousel} >Crousel</Paper>
                        </Grid>
                        <Grid item sm={5}>
                            <Card variant="outlined">
                                <CardMedia
                                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                                    className={classes.image}
                                />
                                <CardContent className={classes.centerElements}>
                                    <TextField className={classes.marginBottom} id="outlined-basic" label="email" type="email" variant="outlined" value={email} size="small" display="block" onChange={(e) => {
                                        setEmail(e.currentTarget.value);
                                    }} />


                                    <TextField className={classes.marginBottom} id="outlined-basic" label="password" type="password" variant="outlined" value={password} display="block" size="small" onChange={(e) => {
                                        setPassword(e.currentTarget.value);
                                    }} />
                                    <LinkButton
                                        content="Forget Password"
                                        route="/signup"
                                    ></LinkButton>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="primary" className={classes.buttonWidth} onClick={handleSubmit} disabled={loader}>Login</Button>
                                </CardActions>
                            </Card>
                            <Card>
                                <Typography style={{ textAlign: "center" }}>
                                    Don't have an account?
                                    <LinkButton
                                        content="Signup"
                                        route="/signup"
                                    ></LinkButton>
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


function LinkButton(props) {
    return (
        <Button variant="text">
            <Link to={props.route}>
                {props.content}
            </Link>
        </Button>
    )
}

export default Login