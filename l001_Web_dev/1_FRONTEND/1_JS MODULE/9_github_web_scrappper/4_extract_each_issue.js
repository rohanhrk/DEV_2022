const request = require('request');
const cheerio = require("cheerio");
const store_process_json_obj = require("./5_store_data_in_json_file");
const store_process_pdf_obj = require("./6_store_data_in_pdf_file");

function extract_each_issue(url, topic_name, repo_name) {
    request(url, cb);
    function cb(err, response, html) {
        if(err) {
            console.log(err);
        } else {
            extract_each_issue_page(html, topic_name, repo_name);
        }
    }
}

function extract_each_issue_page(html, topic_name, repo_name) {
    const $ = cheerio.load(html);
    const issues_elem_arr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    // console.log("   " + repo_name);
    const issue_arr = [];
    for(let i = 0; i < issues_elem_arr.length; i++) {
        const href = $(issues_elem_arr[i]).attr("href");
        issue_arr.push("https://github.com" + href);
    }

    store_process_json_obj.store_process_json_key(topic_name, repo_name, issue_arr);
    store_process_pdf_obj.store_process_pdf_key(topic_name, repo_name, issue_arr)
}

module.exports = {
    extract_each_issue_key : extract_each_issue
}