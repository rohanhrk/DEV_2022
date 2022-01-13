// fileSystem
// files can be create, read, update, delete

// ========_CREATE_File_========
let fs = require("fs");
// fs.openSync("createFile.js", "w");

// ========_READ_File_========
// Returns the contents of the path.
let buffer = fs.readFileSync("1_child_process.js");
console.log("buffer data " + buffer);

// ========_create write_========
// no file -> create 
// file  exist-> content replace 
fs.writeFileSync("createFile.js", "My Name is Rohan");

// ========_UPDATE_========
fs.appendFileSync("createFile.js", "today I am happy");

// ========_REMOVE_========
fs.unlinkSync("createFile.js");

// ============================================================================================================
// ========_FOLDER(directory)_========
// ===================================

// ========_CREATE_========
fs.mkdirSync("createMyDirectory");

fs.writeFileSync("createMyDirectory/merifile.txt", "Mera content");
// ========_READ_========
// Reads the contents of the directory.
let content = fs.readdirSync("createMyDirectory"); // return array
console.log(content);

for(let i = 0; i < content.length; i++) {
    console.log("file " + content[i] + " is removed");
    // remove file
    fs.unlinkSync("createMyDirectory/" + content[i]);
}

// ========_REMOVE FOLDER_========
fs.rmdirSync("createMyDirectory");


// check file exist or not
let doesPathExist = fs.existsSync("abc.js");
console.log(doesPathExist);
doesPathExist = fs.existsSync("2_os.js");
console.log(doesPathExist);

let detailsObj = fs.lstatSync(__dirname + "\\3_file_system.js");
// console.log(detailsObj);
let ans = detailsObj.isFile();
console.log(ans);
ans = detailsObj.isDirectory();
console.log(ans);

// ==============_DIRECTORY_PATH_==============
// C:\Users\abc\Desktop\PEPCODING\WEB DEVELOPEMENT\2_Fun_With_Node_js

// ==============_FILE_PATH_==============
// C:\Users\abc\Desktop\PEPCODING\WEB DEVELOPEMENT\2_Fun_With_Node_js\3_file_system.js



fs.mkdirSync("createMyDirectory");
for(let i = 1; i <= 10; i++) {
    let dirPathToMake = "createMyDirectory/" + `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `# readme for ${dirPathToMake}`);
}
