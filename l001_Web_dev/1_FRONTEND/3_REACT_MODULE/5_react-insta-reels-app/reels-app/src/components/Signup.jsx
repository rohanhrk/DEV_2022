import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { storage, firestore, database } from '../firebase';

function Signup(props) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { signup } = useContext(AuthContext);

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
      <form onSubmit={handleSignup}>
        {/* userName */}
        <div>
          <label htmlFor="userName">UserName</label>
          <input type="text" id="userName" value={userName} onChange={(e) => {
            setUserName(e.currentTarget.value);
          }} />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => {
            setEmail(e.currentTarget.value);
          }} />
        </div>
        {/* password */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => {
            setPassword(e.currentTarget.value);
          }} />
        </div>
        {/* profile photo */}
        <div>
          <label htmlFor="profile-image">Profile Image</label>
          <input type="file" id="profile-image" accept ="image/*" onChange={(e) => {
            handleFileSubmit(e);
          }} />
        </div>
        <button type="submit" disabled={loader}>Signup</button>
      </form>
    </div>
  )
}

export default Signup