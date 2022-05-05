const extract_match_info_obj = require("./5_extract_match_info");

function extract_batsman_stats($, team_idx, opp_team_idx, batsman_table) {
    /* match no. , date, venue, result and opponent name for that match */ 
    const match_description_arr = $(".match-header-container .description").text().split(",");
    // console.log(match_description_arr);
    const match_num = match_description_arr[0].trim();
    const venue = match_description_arr[1].trim();
    const date = match_description_arr[2].trim(); 
    const result = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text").text();
    
    const teams_arr = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .team .name-detail");
    const team_name = $(teams_arr[team_idx]).text();
    const opp_team_name = $(teams_arr[opp_team_idx]).text();

    // console.table(`match_number : ${match_num} venue : ${venue} date : ${date} result : ${result} team : ${team_name} opp team : ${opp_team_name}`);

    /* player name, run, sixes, four, SR, */ 
    const table_raw = $(batsman_table[team_idx]).find("tbody tr");
    for(let c = 0; c < table_raw.length; c++) {
        const table_col = $(table_raw[c]).find("td");
        if($(table_col[0]).hasClass("batsman-cell")) {
            const player_name = $(table_col[0]).text().trim();
            const runs = $(table_col[2]).text().trim();
            let ball = $(table_col[3]).text().trim();
            const fours = $(table_col[5]).text().trim();
            const sixes = $(table_col[6]).text().trim(); 
            const strike_rate = $(table_col[7]).text().trim();
            // console.log(`${player_name} | ${runs} | ${fours} | ${sixes} | ${strike_rate}`);

            extract_match_info_obj.extract_match_info_key(team_name, player_name, match_num, runs, ball, fours, sixes, strike_rate, date, venue, result, opp_team_name);
        }
    }
}

module.exports = {
    extract_batsman_stats_key : extract_batsman_stats
}