#!/usr/bin/env node
// steps to make node js global
// 1. npm init -y
// 2. shebang syntax 
// 3. bin proberty
// npm link
// require commands
let helperObj = require("./commands/help");
let viewObj = require("./commands/view");
let organizeObj = require("./commands/organize");

// =======_Input_=======
let input = process.argv.slice(2);
let command = input[0];

switch(command) {
    case "help":
        helperObj.helperKey();
        break;
    case "view":
        viewObj.viewKey(input[1], input[2]);
        break;
    case "organize" :
        organizeObj.organizeKey(input[1]);
        break;
    default :
        console.log("kindly give correct command");
        break;    
}


