let fs = require("fs");
let path = require("path");

// Helper function
function viewHelper(dirName, mode) {
    if(mode == "flat") {
        viewFlat(dirName);
    } else if(mode == "tree") {
        viewTree(dirName, "");
    } else { 
        console.log("kindly give valid mode");
    }
}

// export
module.exports = {
    viewKey : viewHelper
}

// ===========================================================================================
// ======================_CHECK_FILE_OR_NOT_======================
// ===============================================================
function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}

// ===========================================================================================
// ======================_READ_CONTENT_======================
// ==========================================================
function readContent(src) {
    return fs.readdirSync(src);
}

// ===========================================================================================
// ==============================_FLAT_VIEW_==============================
// =======================================================================
function viewFlat(src) {
    // check the given src path is file or not
    let isFile = isFileOrNot(src);
    if(isFile == true) {
        // file
        console.log(src + "*");
    } else {
        // directory
        // print directory
        console.log(src);

        // read content of directory src
        let content = readContent(src);
        for(let idx = 0; idx < content.length; idx++) {
            let child = content[idx];
            let childPath = path.join(src, child);
            viewFlat(childPath);
        }

    }
}

// ===========================================================================================
// ==============================_TREE_VIEW_==============================
// =======================================================================
function viewTree(src, indent) {
    // check given src is file or not
    let isFile = isFileOrNot(src);
    if(isFile == true) {
        // file
        console.log(indent + "├──" + path.basename(src));
    } else {
        // print directory
        let dirName = path.basename(src);
        console.log(indent + "└──" + dirName);
        // content read from os
        let content = readContent(src);
        for(let idx = 0; idx < content.length; idx++) {
            let child = content[idx];
            let childPath = path.join(src, child);
            viewTree(childPath, indent + "\t");
        }
    }
}