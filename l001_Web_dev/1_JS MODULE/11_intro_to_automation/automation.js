/* step 1 : require */ 
const puppeteer = require("puppeteer");
const url = "https://www.google.com/";
let glob_page;

/* step 2 : then we can use the launch() method to create a browser instance */
const browser_open_promise = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args : ["--start-maximized"]
});
browser_open_promise.then(function (browser) {
    console.log("browser is opened");
    /* step 3 : Next we can use the pages() method on the browser object to get the array of page object */
    const all_tabs_promise = browser.pages(); 
    return all_tabs_promise;
}).then(function (tabs) {
    glob_page = tabs[0];

    /* step 4 : Next up we call the goto() method on the page object to load that page */ 
    const goto_promise =  glob_page.goto(url);
    return goto_promise;
}).then(function () {
    console.log("reached google home page");
})
