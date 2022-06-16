// export class Banner extends Component {
//     state = {
//         count: 0,
//     };

//     updateState = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     };

//     componentDidMount() {
//         console.log("Boom");
//     }

//     componentDidUpdate() {
//         console.log("Boom");
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.updateState}>State: {this.state.count}</button>
//             </div>
//         );
//     }
// }

// Remove the redundant console.log statement using React hooks.

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Question2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Boom");
    });

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>State: {count}</button>
        </div>
    );
}
