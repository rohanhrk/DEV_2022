// Question_1 : Here we have class component that updates the state using the input from a form.
// export default class Profile extends Component {
//     state = {
//         name: "Backbencher",
//         age: 23,
//     };

//     onNameChange = (e) => {
//         this.setState({
//             name: e.target.value,
//         });
//     };

//     onAgeChange = (e) => {
//         this.setState({
//             age: e.target.value,
//         });
//     };
//     render() {
        // return (
        //     <div>
        //         <form>
        //             <input
        //                 type="text"
        //                 value={this.state.name}
        //                 onChange={this.onNameChange}
        //             />
        //             <input
        //                 type="text"
        //                 value={this.state.age}
        //                 onChange={this.onAgeChange}
        //             />
        //             <h2>
        //                 Name: {this.state.name}, Age: {this.state.age}
        //             </h2>
        //         </form>
        //     </div>
        // );
//     }
// }

// Rewrite the same component using react hooks

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, { Component } from 'react'
import { useState } from 'react';
export default function Question1() {
    const [name, setName] = useState("Backbencher");
    const [age, setAge] = useState("23");

     return (
            <div>
                <form>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.currentTarget.value);
                        }}
                    />
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => {
                            setAge(e.currentTarget.value);
                        }}
                    />
                    <h2>
                        Name: {name}, Age: {age}
                    </h2>
                </form>
            </div>
        );
}
