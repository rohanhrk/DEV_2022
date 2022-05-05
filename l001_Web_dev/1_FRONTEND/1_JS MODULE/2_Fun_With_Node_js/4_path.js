let fs = require("fs");
// The path module provides utilities for working with file and directory paths
let path = require("path");
// for(let i = 1; i <= 10; i++) {
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake, "readme.md"), `# readme for ${dirPathToMake}`);
// }

let extensionName = path.extname(path.join(__dirname, "2_os.js"));
console.log("extensionName is " + extensionName);

let name = path.basename(__dirname);
console.log("current directory is " + name);

name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);