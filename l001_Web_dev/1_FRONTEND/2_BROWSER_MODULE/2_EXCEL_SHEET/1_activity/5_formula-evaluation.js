// listener to all cell to set value
for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
        let cell = document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur", (e) => {
            let address = addressBar.value; // get address name 
            let [cell, cellProp] = getCellAndCellProp(address); // get cell and sheetDB access
            let enteredData = cell.innerText; // UI Change(cell)

            // if value changed, also update value in children cell
            if(cellProp.value != "" && enteredData != cellProp.value) {
                cellProp.value = enteredData; // DB change
                removeChildFromParent(address); // remove myself(child) from parent DB 
                cellProp.formula = ""; // remove old formula 
                
                updateChildrenCell(address); // update children cell
                return;
            }

            cellProp.value = enteredData; // DB change
        })
    }
}

// listenter to formula bar to evaluate formula entered 
let formulaBar = document.querySelector(".formula-bar");
formulaBar.addEventListener("keydown", (e) => {
    let inputFormula = formulaBar.value; // get the formula -> ( A1 + A2 )
    if(e.key === "Enter" && inputFormula) {
        let address = addressBar.value; // get address name 
        let [cell, cellProp] = getCellAndCellProp(address); // get cell and sheetDB access
        
        // If formula changed, remove Parent-children relationship
        if(inputFormula != cellProp.formula) {
            // remove myself(child) from parent DB
            removeChildFromParent(address);
        }

        let evaluatedValue = evaluateFormula(inputFormula); // Evaluate the formula -> get value
       
        // To update UI and cellProp in DB
        setCellUIAndCellProp(evaluatedValue, inputFormula);
        addChildToParent(inputFormula); // add yourself(child) to parent

        // set formula bar to default
        formulaBar.value = "";

        // also update children cell
        updateChildrenCell(address);
    }

})


// ==========================================_FUNCTION_==========================================
function removeChildFromParent(childAddress) {
    let [childCell, childCellProp] = getCellAndCellProp(childAddress);
    let formula = childCellProp.formula;// get formula from children DB
    let formulaArr = formula.split(" ");
    for(let i = 0; i < formulaArr.length; i++) {
        let ch = formulaArr[i].charAt(0);
        // check ch is valid or not
        if(ch >= 'A' && ch <= 'Z') {
            // work
            // find required child from parent and remove it from parent
            let [parentCell, parentCellProp] = getCellAndCellProp(formulaArr[i]);
            let index = parentCellProp.children.indexOf(childAddress);
            parentCellProp.children.splice(index, 1);
        }
    }
}
function updateChildrenCell(parentAddress) {
    let [parentCell, parentCellProp] = getCellAndCellProp(parentAddress);
    let childrenArr = parentCellProp.children;
    for(let i = 0; i < childrenArr.length; i++) {
        let childrenAddress = childrenArr[i]; // get children address
        let [childCell, childCellProp] = getCellAndCellProp(childrenAddress); // get child cell and DB
        let evaluateValue = evaluateFormula(childCellProp.formula); // re evaluate formlua

        // to update UI and DB
        childCell.innerText = evaluateValue; // UI update

        childCellProp.value = evaluateValue; // DB update

        // recursion
        updateChildrenCell(childrenAddress);
    }
} 
function evaluateFormula(formula) {
    // ( A1 + A2 )
    // split string with respet to space(" ")
    let formulaArr = formula.split(" "); // ["(", "A1", "+", "A2", ")"]
    for(let i = 0; i < formulaArr.length; i++) {
        let asciiValue = formulaArr[i].charCodeAt(0); // A1 ->  A -> 65

        // check ascii value is valid or not
        if(asciiValue >= 65 && asciiValue <= 90) {
            let value = getValue(formulaArr[i]); // get the value of address
            formulaArr[i] =  value;
        }
    }

    // ["(", "10", "+", "10", ")"]
    let newFormula = formulaArr.join(" "); // ( 10 + 10 )
    return eval(newFormula); // 20
}

function getValue(elem) {
    let [cell, cellProp] = getCellAndCellProp(elem);
    let value = cellProp.value;
    return value;
}
function addChildToParent(inputFormula) {
    let formulaArr = inputFormula.split(" ");
    for(let i = 0; i < formulaArr.length; i++) {
        let ch = formulaArr[i].charAt(0);

        // check character is valid or not
        if(ch >= 'A' && ch <= 'Z') {
            let childAddress = addressBar.value;
            let [cell, cellProp] = getCellAndCellProp(formulaArr[i]);
            cellProp.children.push(childAddress);
        }
    }
}

function setCellUIAndCellProp(evaluatedValue, formula) {
    let address = addressBar.value; // get address name from address bar
    let [cell, cellProp] = getCellAndCellProp(address); // get cell and sheetDB access

    // UI update
    cell.innerText = evaluatedValue; // set value

    // DB update
    cellProp.value = evaluatedValue; // set value
    cellProp.formula = formula; // set formula
}
