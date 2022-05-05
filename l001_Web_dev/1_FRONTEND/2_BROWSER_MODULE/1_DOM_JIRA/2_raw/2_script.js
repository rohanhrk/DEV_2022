// event listener
let inputBox = document.querySelector(".input_box");
let taskList = document.querySelector(".task-list");

console.log(inputBox);
// addEventListener -> assync function
inputBox.addEventListener("keypress", function(e) {
    console.log("key press was called");
    console.log("event", e);
    if(e.key == 'Enter') {
        // console.log("key is pressed");
        // page add
        let task = inputBox.value;

        // create
        let taskElem = document.createElement("li");

        // attribute
        taskElem.setAttribute("class", "task");
        taskElem.innerText = task;

        // element append
        taskList.appendChild(taskElem);
        inputBox.value = "";

        // element feature
        taskElem.addEventListener("dblclick", function() {
            taskElem.remove();
        });

    }
});