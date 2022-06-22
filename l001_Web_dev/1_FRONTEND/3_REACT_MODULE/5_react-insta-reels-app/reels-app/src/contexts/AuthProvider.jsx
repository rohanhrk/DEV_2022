import React from 'react'
import { useState, useEffect } from 'react';
import auth from '../firebase';

export const AuthContext = React.createContext();

// children => the component inside the AuthProvider component
function AuthProvider({ children }) {
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

    function signup(email, password) {
        /*
            => Creates a new user account associated with the specified email address and password.
            => On successful creation of the user account, this user will also be signed in to your application.
            => User account creation can fail if the account already exists or the password is invalid.
        */
        return auth.createUserWithEmailAndPassword(email, password);
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
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider