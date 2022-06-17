import React, { useState, useEffect } from 'react'
import auth from '../firebase';

export const AuthContext = React.createContext();
export function AuthProvider({ children }) {
    const [currentUser, setUser] = useState();
    const [loading, setLoding] = useState(true);
    
    async function login(email, password) {
        // firebase
        return await auth.signInWithEmailAndPassword(email, password);
    }

    async function signOut() {
        // firebase signout
        return auth.signOut();
    }

    useEffect(() => {
        // eventListener
        console.log("added event Listener");
        const cleanUp = auth.onAuthStateChanged(user => {
            console.log("user", user);
            setUser(user);
            setLoding(false);
        })
        return cleanUp;
    }, []);

    const value = {
        login, signOut, currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext