const request = require("request");
// feature -> request
console.log("Before");
request('https://www.worldometers.info/coronavirus', cb);
function cb(err, response, html) {
    console.log("error : " + err); // Print the error if one occurred
    console.log("statusCode : " + response); // Print the response status code if a response was received
    console.log("html : " + html); // Print the HTML for the Google homepage.
}
console.log("after");