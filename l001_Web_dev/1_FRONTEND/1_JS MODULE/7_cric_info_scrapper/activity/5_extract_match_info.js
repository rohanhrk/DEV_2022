const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");
/* 
    IPL (folder)  
    |___>Team (folder)
           |_____>PlayerName.xlsx (File)
*/

function extract_match_info(team_name, player_name, match_no, runs, ball, fours, sixes, sr, date, venue, result, opponent) {
    const team_path = path.join(__dirname, "ipl", team_name);
    dirCreater(team_path)
    const file_path = path.join(team_path, player_name + ".xlsx");
    const content = excel_reader(file_path, player_name);
    let player_obj = {
        match_no: match_no,
        runs: runs,
        ball: ball,
        fours: fours,
        sixes: sixes,
        sr: sr,
        date: date,
        venue: venue,
        result: result,
        opponentName: opponent
    }
    content.push(player_obj);
    excel_writer(file_path, content, player_name);
}

/* Create directory */ 
function dirCreater(src) {
    if (fs.existsSync(src) == false) {
        fs.mkdirSync(src);
    }
}

/* create a excel file */
function excel_writer(file_path, json, sheet_name) {
    /* 1. book_new() => creates a new workbook in the sheet */
    const newWB = xlsx.utils.book_new();

    /* 2. json_to_sheet() => converts an array of JavaScript objects to a worksheet */
    const newWS = xlsx.utils.json_to_sheet(json);

    /* 3. book_append_sheet(WB, WS, 'mySheet') => appends worksheet to the workbook with the name ‘mySheet’. */
    xlsx.utils.book_append_sheet(newWB, newWS, sheet_name);

    /* XLSX.writeFile(newWB, ‘abc.xlsx’) => attempts to write wb to ‘sampleData.export.xlsx’.*/
    xlsx.writeFile(newWB, file_path);
}

/* read a Excel file */
function excel_reader(file_path, sheet_name) {
    if (fs.existsSync(file_path) == false)
        return [];
    const WB = xlsx.readFile(file_path);
    const WS_data = WB.Sheets[sheet_name];
    const jsonData = xlsx.utils.sheet_to_json(WS_data);
    return jsonData;
}

module.exports = {
    extract_match_info_key : extract_match_info
}