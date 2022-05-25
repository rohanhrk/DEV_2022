for(let i = 0; i < rows; i++) {
    for(let j = 0; j < close; j++) {
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur", (e) => {
            let address = addressBar.value;
            let [cell, cellProp] = getCellAndCellProp(address);
            let enteredData = cell.value;

            cellProp.value = enteredData;
            console.log("hello");
        })
    }
}

let formulaBar = document.querySelector(".formula-bar");
formulaBar.addEventListener("keydown", (e) => {
    let inputFormula = formulaBar.value; // get the formula
    if(e.key === "Enter" && inputFormula) {
        let evaluatedValue = evaluateFormula(inputFormula); // Evaluate the formula -> get value

        // To update UI and cellProp in DB
        setCellUIAndCellProp(evaluatedValue, inputFormula);
    }
})

function evaluateFormula(formula) {
    return eval(formula);
}

function setCellUIAndCellProp(evaluatedValue, formula) {
    let address = addressBar.value; // get address name
    let [cell, cellProp] = getCellAndCellProp(address);

    // UI update
    cell.innerText = evaluatedValue;

    // DB update
    cellProp.value = evaluatedValue;
    cellProp.formula = formula; 
}