import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
function Login(props) {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoader] = useState(true);
    const handleSubmit = async (e) => {
        // alert(email + password);
        try {
            setLoader(true);

            // async
            await login(email, password);

            setLoader(false);
            props.history.push("/");
        } catch (error) {
            setLoader(false);
        }
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h1>Firebase login</h1>
            <input type="email" value={email} onChange={(e) => {
                setEmail(e.currentTarget.value);
            }} />
            <input type="password" value={password} onChange={(e) => {
                setPassword(e.currentTarget.value);
            }} />
            <input type="button" value="submit" onClick={handleSubmit} />
        </div>
    )
}

export default Login