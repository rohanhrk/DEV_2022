import { Card, CardContent, Grid, Container, CardMedia, TextField, makeStyles } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { storage, firestore, database } from '../firebase';
import GridContainer from '../MaterialUIComponent/Grid';



function Signup(props) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { signup } = useContext(AuthContext);

  let useStyle = makeStyles({
    marginBottom: {
      marginBottom: "4px"
    },
  })

  let classes = useStyle();

  function handleFileSubmit(e) {
    let file = e?.currentTarget?.files[0];
    if (file != null) {
      console.log(e.currentTarget.files[0]);
      setFile(e.currentTarget.files[0]);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    try {
      setLoader(true);

      // step 1 => get user id through user signup
      let signup_res = await signup(email, password); // async function -> return response
      let uid = signup_res.user.uid; // user id
      console.log(uid);

      // step 2 => upload profile pic in a path => 'users/uid/profileImage'
      /*
        storage.ref(path) => Returns a Reference representing the location in the Database corresponding to the provided path. 
        If no path is provided, the Reference will point to the root of the Database.  
      */
      const uploadImageListener = storage.ref(`users/${uid}/profileImage`).put(file);
      uploadImageListener.on('state_changed', progressFn, errorFn, successFn);
      function progressFn(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      }

      function errorFn(error) {
        setError(error);
        setLoader(false);
      }

      async function successFn() {
        // step 3 : get profile pic download link
        let downloadUrl = await uploadImageListener.snapshot.ref.getDownloadURL(); // A Promise that resolves with the download URL 
        console.log(downloadUrl);

        // step 4 : Gets a DocumentReference instance that refers to the document at the specified path and we store user details
        database.users.doc(uid).set({
          email: email,
          userName: userName,
          userId: uid,
          createdAt: database.getUserTimeStamp(),
          profileImageURL: downloadUrl
        })
        setLoader(false);
        props.history.push("/"); // automatically go to home page after signup
      }
    } catch (error) {
      setError("");
      setLoader(false);
    }
  }
  return (
    <div>
      <Container>

        <Grid>
          <Grid container>
            <Grid item sm={6}>
              <Card variant="outlined">
                <CardMedia
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                />
                <CardContent>
                  {/* full name */}
                  <TextField id="outlined-basic" className={classes.marginBottom} label="Full Name" variant="outlined" size="small" style={{display:"block", width: "100rem"}} value={userName} onChange={(e) => {
                    setUserName(e.currentTarget.value);
                  }} />
                  {/* email */}
                  <TextField id="outlined-basic" className={classes.marginBottom} label="Enter Email" variant="outlined" size="small" style={{display:"block", width: "70%"}} value={email} onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }} />
                  {/* password */}
                  <TextField id="outlined-basic" className={classes.marginBottom} label="Enter Password" variant="outlined" size="small" style={{display:"block", width: "70%"}} value={password} onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }} />
                  {/* photo */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

{/* <form onSubmit={handleSignup}> */ }
{/* userName */ }
{/* <div>
    <label htmlFor="userName">UserName</label>
    <input type="text" id="userName" value={userName} onChange={(e) => {
      setUserName(e.currentTarget.value);
    }} />
  </div> */}
{/* email */ }
{/* <div>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" value={email} onChange={(e) => {
      setEmail(e.currentTarget.value);
    }} />
  </div> */}
{/* password */ }
{/* <div>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" value={password} onChange={(e) => {
      setPassword(e.currentTarget.value);
    }} />
  </div> */}
{/* profile photo */ }
{/* <div>
    <label htmlFor="profile-image">Profile Image</label>
    <input type="file" id="profile-image" accept="image/*" onChange={(e) => {
      handleFileSubmit(e);
    }} />
  </div>
  <button type="submit" disabled={loader}>Signup</button>
</form> */}

export default Signup