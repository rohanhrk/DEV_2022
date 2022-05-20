let add_btn = document.querySelector(".add-btn");
let remove_btn = document.querySelector(".remove-btn");
let modal_cont = document.querySelector(".modal-cont");
let main_cont = document.querySelector(".main-cont");
let text_area = document.querySelector(".text-area");
let priority_color = document.querySelectorAll(".priority-color");
let toolbar_color = document.querySelectorAll(".color");
let all_ticket_color = document.querySelectorAll(".ticket-color");
let ticket_cont = document.querySelectorAll(".ticket-cont");

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
        <div class="task-cont" spellcheck="false">${task}</div>
        <div class="lock">
                <i class="fa-solid fa-lock"></i>
            </div>
    `
    main_cont.appendChild(ticket_cont);

    handleRemoveBtn(ticket_cont);
    handleToggleLock(ticket_cont);
    handleColor(ticket_cont);
    // handleFilter(ticket_cont);
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
    let task_cont = ticket_cont.querySelector(".task-cont");
    // listener to toggle lock key
    key_elem.addEventListener("click", (e) => {
        lock_flag = !lock_flag;
        if (lock_flag == false) {
            // unlock the key
            key_elem.classList.remove("fa-lock");
            key_elem.classList.add("fa-unlock");
            task_cont.setAttribute("contenteditable", "true");
        } else {
            // lock
            key_elem.classList.remove("fa-unlock");
            key_elem.classList.add("fa-lock");
            task_cont.setAttribute("contenteditable", "false");
        }
    })
}

function handleColor(ticket_cont) {
    let ticket_color = ticket_cont.querySelector(".ticket-color");
    ticket_color.addEventListener("click", (e) => {
        let currentTicketColor = ticket_color.classList[1];
        let currentTicketColorIdx = colors.findIndex((color)=> {
            return color == currentTicketColor;
        });
        currentTicketColorIdx = (currentTicketColorIdx + 1) % colors.length;
        let newTicketColor = colors[currentTicketColorIdx];

        ticket_color.classList.remove(currentTicketColor);
        ticket_color.classList.add(newTicketColor);
    })
}

toolbar_color.forEach((eachColor) => {
    eachColor.addEventListener("click", (e) => {
        let selectedColor = eachColor.classList[0];
        ticket_cont.forEach((eachTicket) => {
            eachTicket.style.display = none;
        })
    })
})