import React from 'react'
import { useContext } from 'react';

// 1 => contaxt
const Context = React.createContext("Bad Word");

export default function ContextParent() {
    return (
        <div>
            <VisitFriendsHouse></VisitFriendsHouse>

            {/* If we want to change the context then we should modify the value of context in nearest parent */}
            <Context.Provider value = "please don't use bad word">
                <VisitGrandmasHouse></VisitGrandmasHouse>
            </Context.Provider>
        </div>
    )
}

function VisitFriendsHouse() {
    const language = useContext(Context);
    return (
        <>
            <h1>This is my friends house</h1>
            <span>{language}</span>
        </>
    )
}

function VisitGrandmasHouse() {
    const language = useContext(Context);
    return (
        <>
            <h1>This is my grandmas house</h1>
            <span>{language}</span>
        </>
    )
}
