const request = require("request");
const cheerio = require("cheerio");
const path = require("path");
const extract_each_repo_obj = require("./3_extract_each_repo");

function extract_each_topic(url, topic_name) {
    request(url, cb);
    function cb(err, response, html) {
        if (err) {
            console.log(err);
        } else {
            extract_each_topic_page(html, topic_name);
        }
    }
}



function extract_each_topic_page(html, topic_name) {
    const $ = cheerio.load(html);
    const repo_elem_arr = $(".f3.color-fg-muted.text-normal.lh-condensed");
    // console.log(repo_arr.length);
    // extract top 8 repo
    // console.log(topic_name + " ====> ");
    for (let i = 0; i < 8; i++) {
        const repo_anchor_arr = $(repo_elem_arr[i]).find("a");
        const href = $(repo_anchor_arr[1]).attr("href");
        // console.log(href);
        const repo_full_url = "https://github.com" + href;
        const repo_name = path.basename(repo_full_url);
        // console.log(repo_full_url);
        extract_each_repo_obj.extract_each_repo_key(repo_full_url, topic_name, repo_name);
    }
}

module.exports = {
    extract_each_topic_key : extract_each_topic
}