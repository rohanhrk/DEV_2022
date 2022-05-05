const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");

// request send
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extract_html(html);
    }
}

// extraction -> using cheerio
function extract_html(html) {
    const $ = cheerio.load(html);
    const team_name_elem_arr = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .team");
    // console.log(team_name_elem_arr.length);
    for (let i = 0; i < team_name_elem_arr.length; i++) {
        const team_name_elem = $(team_name_elem_arr[i]);
        const has_class = team_name_elem.hasClass("team-gray");
        /* find wining team */ 
        if (!has_class) {
            const win_team_name = team_name_elem.find(".name").text().trim();
            // console.log(win_team_name);
            extract_player_details($, win_team_name);
        }
    }
}

function extract_player_details($, win_team_name) {
    // let htmlStr = "";
    const curr_html = $(".match-scorecard-page .Collapsible");
    for (let i = 0; i < curr_html.length; i++) {
        // htmlStr += $(curr_html[i]).html();
        const curr_team_html = $(curr_html[i]);
        const curr_team_innings = curr_team_html.find(".header-title.label").text();
        const curr_team_name = curr_team_innings.split("INNINGS")[0].trim();
        // console.log(curr_team_name);
        // data extract from loosing team innings

        if (curr_team_name == win_team_name) {
            // const my_req_win_team = curr_team_name;
            // console.log(my_req_win_team);
            const my_req_win_team_innings = $(curr_html[i]);
            const batsman_table = $(my_req_win_team_innings).find(".table.batsman");
            const batsman_arr = $(batsman_table).find(".batsman-cell");
            for(let r = 0; r < batsman_arr.length; r++) {
                let href = $(batsman_arr[r]).find("a").attr("href");
                let playerName = $(batsman_arr[r]).text();
                let fullLink = "https://www.espncricinfo.com" + href;
                extract_player_birthday(fullLink, playerName, win_team_name);
            }
        }

    }
}

function extract_player_birthday(fullLink, playerName, win_team_name) {
    request(fullLink,cb);
    function cb(err, response, html) {
        if(err) {
            console.log(err);
        } else {
            let $ = cheerio.load(html);
            let player_detail_arr = $(".player-card-description.gray-900");
            let birthdate = $(player_detail_arr[1]).text();
            console.log(`${playerName} is played for ${win_team_name} and was born on ${birthdate}`);
        }
    }
}