import React from 'react'
import { useState, useEffect } from 'react'
import auth from './firebase';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState(null);
    const [mainLoader, setMainLoader] = useState(true);

    // user -> user data
    // loading -> loading
    // error -> show

    const handleSubmit = async (e) => {
        // alert(email + password);
        try {
            setLoader(true);

            // async
            let res = await auth.signInWithEmailAndPassword(email, password);
            setUser(res.user);

            setLoader(false);
        } catch (error) {
            setError(true);
            setLoader(false);
        }
        setEmail("");
        setPassword("");
    }

    const handleLogout = async () => {
        console.log("hi");
        setLoader(true);
        await auth.signOut();
        setUser(null);
        setLoader(false);
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user);
            setUser(user);
            setMainLoader(false);
        })
    }, []);

    return (
        <>
            {
                mainLoader == true ? <h1>wait for a second</h1> :
                    loader == true ? <h1> Loading....</h1> :
                        user != null ?
                            <>
                                {/* User logout */}
                                <h1>User LoggedIn {user.uid}
                                    <button onClick={handleLogout}>Logout</button>
                                </h1>
                            </>
                            :
                            <>
                                {/* User email and password form */}
                                <h1>Firebase login</h1>
                                <input type="email" value={email} onChange={(e) => {
                                    setEmail(e.currentTarget.value);
                                }} />
                                <input type="password" value={password} onChange={(e) => {
                                    setPassword(e.currentTarget.value);
                                }} />
                                <input type="button" value="submit" onClick={handleSubmit} />
                            </>

            }
        </>
    )
}
