/* 
    In this file we are storing data of JSON in a excel file 
    and read a excel file using 'xlsx' module
*/ 

const xlsx = require("xlsx");

const json = [{
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
}]

/* ==============_Write a excel files_============== */ 
/* 1. book_new() => creates a new workbook in the sheet */ 
const newWB = xlsx.utils.book_new();

/* 2. json_to_sheet() => converts an array of JavaScript objects to a worksheet */
const newWS = xlsx.utils.json_to_sheet(json);

/* 3. book_append_sheet(WB, WS, 'mySheet') => appends worksheet to the workbook with the name ‘mySheet’. */ 
xlsx.utils.book_append_sheet(newWB, newWS, 'mySheet');

/* XLSX.writeFile(newWB, ‘abc.xlsx’) => attempts to write wb to ‘sampleData.export.xlsx’.*/ 
xlsx.writeFile(newWB, 'abc.xlsx');


/* ==============_Read a excel files_============== */
const WB = xlsx.readFile("abc.xlsx"); 
const WS_data = WB.Sheets['mySheet'];
const jsonData = xlsx.utils.sheet_to_json(WS_data);
console.log(jsonData);