import React, { Component } from 'react'
import InputContainer from './InputContainer';
import TaskList from './TaskList';

/*
    step 1. Inside the render function -> initially define your static UI 
    step 2. Identify different variables that can change throughout the life time and write this variable 
            inside the state.
    step 3. rewrite render using those state variables
    step 4. For change the state we are use Event Listener  
*/

export default class Todo extends Component {
    state = {
        taskList: []
        
    }

    deleteTask = (dltTaskID) => {
        let filteredTask = this.state.taskList.filter((task) => {
            return dltTaskID !== task.id;
        })

        this.setState({
            taskList : filteredTask
        })
    }



    addTask = (currTask) => {
        let tempArr = [...this.state.taskList, {task : currTask, id : this.state.taskList.length}];
        this.setState({
            taskList: tempArr
        })
    }
    render() {
        return (
            <div>
               
                {/* PASSING PROPS TO CHILDREN COMPONENT */}
                <InputContainer addTask = {this.addTask} ></InputContainer>
                <TaskList taskList = {this.state.taskList} deleteTask = {this.deleteTask}></TaskList>
            </div>
        )
    }
}
