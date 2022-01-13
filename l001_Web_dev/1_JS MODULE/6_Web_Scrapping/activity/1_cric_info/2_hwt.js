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
            extract_hwt_name_wicket($, win_team_name);
        }
    }
}

function extract_hwt_name_wicket($, win_team_name) {
    // let htmlStr = "";
    const curr_html = $(".match-scorecard-page .Collapsible");
    let bowler_name = "";
    let bowler_wicket = 0;
    for (let i = 0; i < curr_html.length; i++) {
        // htmlStr += $(curr_html[i]).html();
        const curr_team_html = $(curr_html[i]);
        const curr_team_innings = curr_team_html.find(".header-title.label").text();
        const curr_team_name = curr_team_innings.split("INNINGS")[0].trim();
        // console.log(curr_team_name);
        // data extract from loosing team innings

        if (curr_team_name != win_team_name) {
            // const my_req_win_team = curr_team_name;
            // console.log(my_req_win_team);
            const my_req_win_team_innings = $(curr_html[i]);
            const bowling_table = $(my_req_win_team_innings).find(".table.bowler");
            const table_row = $(bowling_table).find("tr");
            for (let r = 0; r < table_row.length; r++) {
                if ($(table_row[r]).find("td").length == 11) {
                    const table_col = $(table_row[r]).find("td");
                    const curr_bowler_name = $(table_col[0]).text();
                    const curr_bowler_wicket = $(table_col[4]).text();
                    // console.log(`wining team ${win_team_name} bowler name : ${curr_bowler_name} wicket : ${curr_bowler_wicket}`);
                    if (curr_bowler_wicket >= bowler_wicket) {
                        bowler_name = curr_bowler_name;
                        bowler_wicket = curr_bowler_wicket;
                    }
                }
            }
        }

    }
    console.log(`wining team ${win_team_name} hwt_bowler_name : ${bowler_name} wicket : ${bowler_wicket}`);
    // console.log(htmlStr);
}