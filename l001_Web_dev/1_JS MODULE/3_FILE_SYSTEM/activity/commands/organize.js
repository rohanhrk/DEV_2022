let fs = require("fs");
let path = require("path");

//file extension list
let extensionList = {
    Audio: ['aif', 'cda', 'mid', 'mp3', 'mpa', 'ogg', 'wav', 'wma', 'wpl'],
    Compressed: ['7z', 'arj', 'deb', 'pkg', 'rar', 'rpm', 'tar.gz', 'z', 'zip'],
    Dis: ['bin', 'dmg', 'ios', 'toast', 'vcd'],
    Datebase: ['csv', 'dat', 'db', 'log', 'mdb', 'sav', 'sql', 'tar', 'xml'],
    Email: ['email', 'eml', 'emlx', 'msg', 'oft', 'ost', 'pst', 'vcf'],
    Executable: ['apk', 'bat', 'bin', 'cgi', 'com', 'exe', 'gadget', 'jar', 'msi', 'py', 'wsf'],
    Image: ['ai', 'bmp', 'gif', 'ico', 'jpeg', 'jpg', 'png', 'ps', 'psd', 'svg', 'tif', 'tiff'],
    Programming: ['asp', 'aspx', 'pl', 'css', 'htm', 'html', 'js', 'jsp', 'part', 'php', 'py', 'rss', 'xhtml', 'c', 'cgi', 'class', 'cpp', 'cs', 'h', 'java', 'php', 'py', 'sh', 'swift', 'vb'],
    System: ['bak', 'cab', 'cfg', 'cpl', 'cur', 'dll', 'dmp', 'drv', 'icns', 'ico', 'ini', 'lnk', 'msi', 'sys', 'tmp'],
    Video: ['3g2', '3gp', 'avi', 'flv', 'h264', 'm4v', 'mkv', 'mov', 'mp4', 'mpg', 'mpeg', 'rm', 'swf', 'vob', 'wmv'],
    Documents: ['doc', 'docx', 'odt', 'pdf', 'rtf', 'te']
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

function organizeFiles(srcPath) {
    // src -> folder create
    let folderToMake = path.join(srcPath, "downloaded_organized_files"); // C:\Users\abc\Downloads\Download_organized_files

    // if destination folder is not present in folder 'src'
    // create destination folder
    if (fs.existsSync(folderToMake) == false) {
        fs.mkdirSync(folderToMake);
    }

    // abstraction
    organizeHelper(srcPath, folderToMake);
    // not present -> create a directory
    // organize -> files inside different folder
}

// source -> destination
function organizeHelper(src, dest) {
    // content read
    // check given src is file or not
    let isFile = isFileOrNot(src);

    if(isFile == true) {
        // file
        // check extention
        let folderName = checkExtension(src);
        
        // copy file
        sendFile(src, dest, folderName);
    } else {
        // read content
        let content = readContent(src);
        for(let idx = 0; idx < content.length; idx++) {
            let child = content[idx];
            let childPath = path.join(src, child);
            organizeHelper(childPath, dest);
        }
    }
}

// ========_check_extension_========
// =================================
function checkExtension(src) {
    //C:\Users\abc\Desktop\PAB\2_File_System_10_02_2021\activity\commands\view.js
    let extension = path.basename(src).split(".")[1]; // js
    for(let type in extensionList) {
        for(let idx = 0; idx < extensionList[type].length; idx++) {
            if(extension == extensionList[type][idx]) 
                return type;
        }
    }

    return "others";
}

// ========_File_send_========
// ===========================
function sendFile(srcFilePath, dest, folderName) {
    let folderToMake = path.join(dest, folderName);
    if(fs.existsSync(folderToMake) == false) {
        fs.mkdirSync(folderToMake);
    }

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(folderToMake, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlink(srcFilePath);
}

// C:\Users\abc\Downloads
function organizeFn(src) {
    // create "organize_files" folder
    organizeFiles(src);
}

module.exports = {
    organizeKey : organizeFn
}