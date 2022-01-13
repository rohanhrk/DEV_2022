const request = require("request");
const cheerio = require("cheerio");
const extract_each_issue_obj = require("./4_extract_each_issue");

function extract_each_repo(url, topic_name, repo_name) {
    request(url, cb);
    function cb(err, response, html) {
        if(err) {
            console.log(err);
        } else {
            get_issue_page(html, topic_name, repo_name);
        }
    }
}

function get_issue_page(html, topic_name, repo_name) {
    const $ = cheerio.load(html);
    const issue_elem = $("#issues-tab");
    const issue_href = $(issue_elem).attr("href");
    const issue_full_link = "https://github.com" + issue_href;
    extract_each_issue_obj.extract_each_issue_key(issue_full_link, topic_name, repo_name);    
}


module.exports = {
    extract_each_repo_key: extract_each_repo
}