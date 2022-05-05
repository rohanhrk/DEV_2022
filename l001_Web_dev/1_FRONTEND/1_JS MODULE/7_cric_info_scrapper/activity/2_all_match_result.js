const request = require("request");
const cheerio = require("cheerio");
const per_match_scoreboard_obj = require("./3_per_match_scoreboard");

function all_match_result(url) {
    request(url, cb);
}

function cb(err, response, html) {
    if(err) {
        console.log(err);
    } else {
        extract_all_match_result_page(html);
    }
}

function extract_all_match_result_page(html) {
    const $ = cheerio.load(html);
    const match_block_elem =  $(".col-md-8.col-16 .match-score-block .match-info-link-FIXTURES");
    for(let r = 0; r < match_block_elem.length; r++) {
        const href = $(match_block_elem[r]).attr("href");
        // console.log(href)
        const match_scoreboard_url = "https://www.espncricinfo.com" + href;
        // console.log(match_scoreboard_url);
        per_match_scoreboard_obj.per_match_scoreboard_key(match_scoreboard_url);
    }
}

module.exports = {
    all_match_result_key : all_match_result
}