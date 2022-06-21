import React from 'react'
import { useState, useEffect } from 'react';
import auth from '../firebase';

export const AuthContext = React.createContext();
function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(); // initially current user set as null
    const [loading, setLoading] = useState(true);

    function login(email, password) {
        /*
            Asynchronously signs in using an email and password.
            Fails with an error if the email address and password do not match.
        */
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signOut() {
        // Signs out the current user.
        return auth.signOut(); 
    }

    useEffect(() => {
        // event listener add
        console.log("event Listener add");

        // Adds an observer for changes to the user's sign-in state.
        const unsubscribe = auth.onAuthStateChanged((user) => {
            // User is signed in.
            console.log("user is signed in and inside listener", user);
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, []);

    let value = {
        currentUser,
        signOut,
        login,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider