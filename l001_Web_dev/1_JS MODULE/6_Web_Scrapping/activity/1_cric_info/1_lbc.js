const request = require("request");
const cheerio = require("cheerio");

/*
    given input -> commentary page url
    https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
*/ 
const url = " https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if(err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}

// inspect
// unique
function extractHTML(html) {
    const $ = cheerio.load(html);
    const elementsArr = $(".match-comment-wrapper .match-comment-long-text");;
    const text = $(elementsArr[0]).text();
    const htmlData = $(elementsArr[0]).html();
    console.log("text data : ", text);
    console.log("html data : ", htmlData);
}

console.log("After");