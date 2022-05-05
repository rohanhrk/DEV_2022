const fs = require("fs");
const path = require("path");

function create_directory(dir_path) {
    if(fs.existsSync(dir_path) == false) {
        fs.mkdirSync(dir_path);
    }
}
function store_process_json(topic_name, repo_name, issue_arr) {
    /* Create folder */ 
    const folder_to_make = path.join(__dirname, topic_name);
    create_directory(topic_name);

    /* create json file inside folder */ 
    const file_to_make = path.join(folder_to_make, repo_name + ".json");
    fs.writeFileSync(file_to_make, JSON.stringify(issue_arr));
}

module.exports = {
    store_process_json_key : store_process_json
}