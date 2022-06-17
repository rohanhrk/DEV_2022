// class Counter extends Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.incrementCount}>Count: {this.state.count}</button>
//             </div>
//         );
//     }
// }
// Rewrite the same component using react hooks
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React from 'react'
import { useState } from 'react';

export default function Question3() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>Count: {count}</button>
        </div>
    )
}
