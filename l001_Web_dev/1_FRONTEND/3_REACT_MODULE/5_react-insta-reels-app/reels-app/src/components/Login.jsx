import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const { login } = useContext(AuthContext);

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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => {
                        setEmail(e.currentTarget.value);
                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => {
                        setPassword(e.currentTarget.value);
                    }} />
                </div>
                <button type="submit" disabled={loader}>Login</button>
            </form>
        </div>
    )
}

export default Login