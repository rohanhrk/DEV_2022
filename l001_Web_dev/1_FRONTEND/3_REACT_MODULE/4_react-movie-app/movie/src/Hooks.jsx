import React, { useEffect, useState } from 'react'

export default function Hooks() {
    // variable, setter function -> default state
    const [count, setCount] = useState(0);
    function fn() {
        document.title = `you click ${count} times`
    }

    // useEffect -> combination of multiple function like componentDidMount, componentDidUpdate
    // runs after every render including first render
    // useEffect(fn);

    // runs only once after render
    // replacemet of component did mount
    useEffect(fn, []);

    // runs after every render whenever the parameter inside the array is changes
    useEffect(fn, [count]);
    
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <span>{count}</span>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
        </div>
    )
}
