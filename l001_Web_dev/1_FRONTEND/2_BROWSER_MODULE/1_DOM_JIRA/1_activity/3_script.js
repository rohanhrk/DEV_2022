let add_btn = document.querySelector(".add-btn");
let remove_btn = document.querySelector(".remove-btn");
let modal_cont = document.querySelector(".modal-cont");
let main_cont = document.querySelector(".main-cont");
let text_area = document.querySelector(".text-area");
let priority_color = document.querySelectorAll(".priority-color");


let colors = ["light-blue", "light-green", "light-pink", "black"];
let modal_priority_color = colors[colors.length - 1];

let add_flag = false;
let remove_flag = false;
let lock_flag = true;

// listener to open modal
add_btn.addEventListener("click", (e) => {
    // 1. display modal
    // add_flag = true -> modal display
    // add_flag = false -> modal none
    add_flag = !add_flag;
    if (add_flag == true) {
        modal_cont.style.display = "flex";
    } else {
        modal_cont.style.display = "none";
    }
    // 2. generate ticket 
})

// listener to toggle remove btn on clicking
remove_btn.addEventListener("click", (e) => {
    remove_flag = !remove_flag;
})

// listener to set ticket color
priority_color.forEach((colorElem) => {
    colorElem.addEventListener("click", (e) => {
        priority_color.forEach((eachColorElem) => {
            eachColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");
        modal_priority_color = colorElem.classList[0];
    })
})

// listener add to generate ticket
modal_cont.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Shift") {
        let ticket_color = modal_priority_color;
        let ticket_id = shortid();
        let task = text_area.value;
        createTicket(ticket_color, ticket_id, task);

        // to get default state of text area
        text_area.value = "";
        modal_cont.style.display = "none";
        add_flag = !add_flag;
    }
})
function createTicket(ticket_color, ticket_id, task) {
    let ticket_cont = document.createElement("div");
    ticket_cont.setAttribute("class", "ticket-cont");
    ticket_cont.innerHTML = `
        <div class="ticket-color ${ticket_color}"></div>
        <div class="ticket-id">#${ticket_id}</div>
        <div class="task-cont">${task}</div>
        <div class="lock">
                <i class="fa-solid fa-lock"></i>
            </div>
    `
    main_cont.appendChild(ticket_cont);

    handleRemoveBtn(ticket_cont);
    handleToggleLock(ticket_cont);
}

function handleRemoveBtn(ticket_cont) {

    ticket_cont.addEventListener("click", (e) => {
        if (remove_flag) {
            ticket_cont.remove();
        }
    })

}
function handleToggleLock(ticket_cont) {
    let key_elem = ticket_cont.querySelector(".fa-lock");

    // listener to toggle lock key
    key_elem.addEventListener("click", (e) => {
        lock_flag = !lock_flag;
        if (lock_flag == false) {
            // unlock the key
            key_elem.classList.remove("fa-lock");
            key_elem.classList.add("fa-unlock");
        } else {
            // lock
            key_elem.classList.remove("fa-unlock");
            key_elem.classList.add("fa-lock");
        }
    })
}