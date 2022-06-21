import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [currTask, setCurrTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleSubmit = () => {
        const newTaskList = [...taskList];
        newTaskList.push({
            id: Date.now(),
            currTask: currTask,
        });

        setTaskList(newTaskList);
        setCurrTask("");
    }
    const handleDelete = (task_id) => {
        const newTaskObj = taskList.filter((taskObj) => {
            return taskObj.id != task_id;
        })
        setTaskList(newTaskObj);
    }

    // ======== USE EFFECT METHOD =========
    // Method 1 : useEffect without dependency array
    // useEffect(() => {
    //     console.log("It will run on initial component loaded and also on every rander");

    //     // return cleanup function
    //     return () => {
    //         console.log("my cleanup will executed after every next rander before every next useEffect");
    //     }
    // })

    // Method 2 : useEffect with empty dependy array
    // useEffect(() => {
    //     console.log("It will run only once when initially component is loaded");

    //     // return cleanUp function
    //     return () => {
    //         console.log("my cleanup will executed before unmount (when main component will removed from UI)");
    //     }
    // }, []);

    // Method 3 : useEffect with dependancy array
    // useEffect(() => {
    //     console.log("It will run on initial component loaded and also on every rander of dependant state changed");

    //     // return clean up function
    //     return () => {
    //         console.log("my cleanup will executed after every next dependent rander before every next dependant useEffect");
    //     }
    // }, [taskList]);

    // Method 4 : useEffect with cleanUp function
    // function cleanUp() {
    //     console.log("clean function is executed after the next rander, before the next useEffect");
    // }

    // useEffect(() => {
    //     console.log("It will run on initial component loaded and also on every rander of taskList list state changed");
    //     return cleanUp;
    // }, [taskList]);

    return (
        <div>
            <input type="text" value={currTask} onChange={(e) => {
                setCurrTask(e.currentTarget.value);
            }} />
            <span>
                <button type="button" value="submit" onClick={handleSubmit}>Add Task</button>
            </span>
            <ul>
                {
                    taskList.map((taskObj) => {
                        return (
                            <ListItem key={taskObj.id} taskObj={taskObj} handleDelete={handleDelete}></ListItem>
                        )
                    })
                }
            </ul>
        </div>
    )

    // import React from 'react'

    function ListItem(props) {
        const { taskObj, handleDelete } = props;
        useEffect(() => {
            console.log("It will excecuted whenever added in UI");

            // cleanup will executed before unmount
            return(() => {
                console.log("My cleanup function will excecuted when I will be removed from UI before unmount");
            });
        }, []);
        return (
            <li key={taskObj.id} onClick={() => {
                handleDelete(taskObj.id)
            }}>{taskObj.currTask}</li>
        )
    }
}
