import React, { Component } from 'react'

/*
    step 1. Inside the render function -> initially define your static UI 
    step 2. Identify different variables that can change throughout the life time and write this variable 
            inside the state.
    step 3. rewrite render using those state variables
    step 4. For change the state we are use Event Listener  
*/

export default class Todo extends Component {
    state = {
        taskList: ["Task-1", "Task-2", "Task-3", "Task-4", "Task-5"],
        currTask : ""
    }

    deleteTask = (dltTask) => {
        let filteredTask = this.state.taskList.filter((task) => {
            return dltTask !== task;
        })

        this.setState({
            taskList : filteredTask
        })
    }

    handleCurrTask = (e) => {
        let currValue = e.currentTarget.value;
        this.setState({
            currTask: currValue
        })
    }

    addTask = () => {
        let tempArr = [...this.state.taskList, this.state.currTask];
        this.setState({
            taskList: tempArr
        })
    }
    render() {
        return (
            <div>
                <div className="input-container">
                    <input type="text" value={this.state.currTask} onChange = {this.handleCurrTask}/>
                    <button onClick={this.addTask}>Submit</button>
                </div>
                <div className="task-list">
                    <ul>
                        {
                            this.state.taskList.map((task) => {
                                return (
                                    <li>
                                        <p>{task}</p>
                                        <button onClick={() => {this.deleteTask(task)}}>Delete</button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }
}
