const request = require("request");
const cheerio = require("cheerio");
const extract_each_topic_obj = require("./2_extract_each_topic");
const path = require("path");

// url => "https://github.com/topics"
const url = "https://github.com/topics";
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extract_topic_page(html);
    }
}

function extract_topic_page(html) {
    const $ = cheerio.load(html);
    const topics_elem_arr = $(".col-12.col-sm-6.col-md-4.mb-4");
    // console.log(topics_arr.length);

    for (let i = 0; i < topics_elem_arr.length; i++) {
        const anchor_elem = $(topics_elem_arr[i]).find("a");
        const href = $(anchor_elem).attr("href");
        const each_topic_url = "https://github.com" + href;
        const topic_name = path.basename(each_topic_url);

        // console.log(each_topic_url);
        extract_each_topic_obj.extract_each_topic_key(each_topic_url, topic_name);
    }
}
