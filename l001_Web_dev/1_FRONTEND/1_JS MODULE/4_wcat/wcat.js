#!/usr/bin/env node
// =========_require_module_=========
let fs = require("fs");

// =========_input_=========
let inputArr = process.argv.slice(2);
// console.log(inputArr);

// =========================
// seperate option and files
let optionArr = [];
let filesArr = [];
for (let idx = 0; idx < inputArr.length; idx++) {
    let firstChar = inputArr[idx].charAt(0);
    if (firstChar == "-") {
        optionArr.push(inputArr[idx]);
    } else {
        filesArr.push(inputArr[idx]);
    }
}
// console.log("option : " + optionArr);
// console.log("files : " + filesArr);

// =============================================================================
// ========_EDGE_CASE_========
// option check
let isBothPresent = optionArr.includes("-n") && optionArr.includes("-b");
if(isBothPresent) {
    console.log("either enter -n or -b option");
}
// existance
for(let idx = 0; idx < filesArr.length; idx++) {
    let isPresent = fs.existsSync(filesArr[idx]);
    if(isPresent == false) {
        console.log(`file ${filesArr[idx]} is not present`);
        return;
    }
}
// =============================================================================
// ========_DISPLAY_CONTENT_=========
let content = "";
for (let idx = 0; idx < filesArr.length; idx++) {
    let bufferContent = fs.readFileSync(filesArr[idx]);
    content += bufferContent + "\r\n";
}
// console.log(content);

let contentArr = content.split("\r\n");
// console.log(contentArr);

// =========_COMMAND_=========
// 1. -s command
// convert big line breaks into a singular file 
let is_S_present = optionArr.includes("-s");
if (is_S_present) {
    for (let idx = 1; idx < contentArr.length; idx++) {
        if ((contentArr[idx] == "" && contentArr[idx - 1] == "") || (contentArr[idx] == "" && contentArr[idx - 1] == null)) {
            contentArr[idx] = null;
        }
    }
    let tempArr = [];
    for (let idx = 0; idx < contentArr.length; idx++) {
        if (contentArr[idx] != null) {
            tempArr.push(contentArr[idx]);
        }
    }
    contentArr = tempArr;
}
// console.log(contentArr.join("\n"));

// 2. -n command
let is_N_present = optionArr.includes("-n");
if (is_N_present) {
    for (let idx = 0; idx < contentArr.length; idx++) {
        contentArr[idx] = `${idx + 1} ${contentArr[idx]}`;
    }
}
// console.log(contentArr.join("\n"));

// 3. -b command
let is_B_present = optionArr.includes("-b");
if (is_B_present) {
    let count = 1;
    for (let idx = 0; idx < contentArr.length; idx++) {
        if(contentArr[idx] != "") {
            contentArr[idx] = `${count++} ${contentArr[idx]}`;
        }
    }
}
console.log(contentArr.join("\n"));


