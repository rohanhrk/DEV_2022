const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const all_match_result_obj = require("./2_all_match_result");

/* Create IPL folder */ 
const ipl_path = path.join(__dirname,"ipl");
dirCreater(ipl_path);
function dirCreater(src) {
    if (fs.existsSync(src) == false) {
        fs.mkdirSync(src);
    }
}

// ==================================================================================================
// url ==> // https://www.espncricinfo.com/series/ipl-2020-21-1210595
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url, cb);
function cb(err, response, html) {
    if(err) {
        console.log(err);
    } else {
        extract_homepage(html);
    }
}

function extract_homepage(html) {
    const $ = cheerio.load(html);
    const view_all_result_elem = $(".widget-items.cta-link");
    const anchor = $(view_all_result_elem[0]).find("a");
    const href = $(anchor).attr("href");
    // console.log(href);
    const view_all_result_url = "https://www.espncricinfo.com" + href;
    // console.log(full_link);
    all_match_result_obj.all_match_result_key(view_all_result_url);
}