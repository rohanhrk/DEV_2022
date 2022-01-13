/*
    In this file we are working on how to read/write a JSON file
*/ 

const fs = require("fs");

/* 
    read a JSON file 
    ==>fs.readFileSync(fileName)
*/
const content_in_buffer = fs.readFileSync("./1_intro.json");
console.log(content_in_buffer);
console.log("=========================================");
const content = JSON.parse(content_in_buffer);
console.log(content);

/*_================================_OR_================================*/
// const content = require("./1_intro.json");


/* 
    write a JSON file 
    ==>fs.writeFileSync(fileName, object)

    step 1 : push data 
    step 2 : convert object to string
    step 3 : write
*/
content.push(
    {
        "name": "Rahul",
        "last name": "Hazarika",
        "father's name": "Late Pranjal Hazarika",
        "mother's names": "jinu hazarika",
        "siblings": [
            "Rohan Hazarika",
            "Mintu Hazarika"
        ],
        "age": 21,
        "address": {
            "country": "India",
            "state": "Assam",
            "city": "Guwahati",
            "pin-code": 781036
        }
    }
)
const content_after_convert_to_string = JSON.stringify(content);
fs.writeFileSync("./1_intro.json", content_after_convert_to_string);
