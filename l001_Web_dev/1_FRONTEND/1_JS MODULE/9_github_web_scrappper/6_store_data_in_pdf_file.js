const fs = require("fs");
const path = require("path");
const pdf_document = require("pdfkit");

function create_directory(dir_path) {
    if(fs.existsSync(dir_path) == false) {
        fs.mkdirSync(dir_path);
    }
}
function store_process_pdf(topic_name, repo_name, issue_arr) {
    /* Create folder */ 
    const folder_to_make = path.join(__dirname, topic_name);
    create_directory(topic_name);

    /* create pdf file inside folder */ 
    const file_to_make = path.join(folder_to_make, repo_name + ".pdf");
    const content = JSON.stringify(issue_arr);
    let pdfDoc = new pdf_document();
    pdfDoc.pipe(fs.createWriteStream(file_to_make));
    pdfDoc.text(content);
    pdfDoc.end();
}

module.exports = {
    store_process_pdf_key : store_process_pdf
}