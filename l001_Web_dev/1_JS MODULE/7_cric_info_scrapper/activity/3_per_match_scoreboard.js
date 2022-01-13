const request = require("request");
const cheerio = require("cheerio");
const extract_batsman_stats_obj = require("./4_extract_batsman_stats");

function per_match_scoreboard(url) {
    request(url, cb);
}

function cb(err, response, html) {
    const $ = cheerio.load(html);
    const team_scoreboard_table_arr = $(".card.content-block.match-scorecard-table>.Collapsible");
    for(let i = 0; i < team_scoreboard_table_arr.length; i++) {
        const team_idx = i;
        const opp_team_idx = (i == 0) ? 1 : 0; // to identify opponent team
        const batsman_table = $(team_scoreboard_table_arr[team_idx]).find(".table.batsman");
        extract_batsman_stats_obj.extract_batsman_stats_key($, team_idx, opp_team_idx, batsman_table);
    }
}

module.exports = {
    per_match_scoreboard_key : per_match_scoreboard
}