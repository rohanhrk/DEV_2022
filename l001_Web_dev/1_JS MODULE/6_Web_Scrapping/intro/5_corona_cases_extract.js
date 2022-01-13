const request = require("request");
const cheerio = require("cheerio");

console.log("before");
request("https://www.worldometers.info/coronavirus", cb);
function cb(err, response, html) {
    if(err) {
        console.log("Error : " , err);
    } else {
        handleHtml(html);
    }
}

function handleHtml(html) {
    let selTool = cheerio.load(html); // extraction of html file
    let contentArr = selTool(".maincounter-number");
    for(let i = 0; i < contentArr.length; i++) {
        let data = selTool(contentArr[i]).text();
        console.log("data : " , data);
    }
}

console.log("after")