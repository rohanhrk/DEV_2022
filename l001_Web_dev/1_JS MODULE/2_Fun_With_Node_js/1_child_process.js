let cp = require("child_process");
console.log("trying to open calculator");
cp.execSync("calc");
console.log("opened calculator");