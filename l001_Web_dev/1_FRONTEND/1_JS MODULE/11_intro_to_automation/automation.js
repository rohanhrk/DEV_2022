/* step 1 : require */
const puppeteer = require("puppeteer");
const url = "https://www.google.com/";
let glob_page;

/* step 2 : then we can use the launch() method to create a browser instance */
const browser_open_promise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
});
browser_open_promise.then(function (browser) {
    console.log("browser is opened");
    /* step 3 : Next we can use the pages() method on the browser object to get the array of page object */
    const all_tabs_promise = browser.pages();
  
    return all_tabs_promise;
}).then(function (tabs) {
    console.log(tabs.length);
    glob_page = tabs[0];

    /* step 4 : Next up we call the goto() method on the page object to load that page */
    const goto_promise = glob_page.goto(url);
    return goto_promise;
}).then(function () {
    // console.log("reached google home page");

    /* waiting for the element to appear on the page */
    const element_wait_promise = glob_page.waitForSelector("input[type = 'text']", { visible: true });
    return element_wait_promise;
}).then(function () {
    /* type anything on that page using selector*/ 
    const key_will_be_send_promise = glob_page.type("input[type = 'text']", "pepcoding");
    return key_will_be_send_promise; 
}).then(function() {
    const enter_will_be_press_promise = glob_page.keyboard.press("Enter");
    return enter_will_be_press_promise;
}).then(function() {
    // console.log("reached to the pepcoding page");
    const element_wait_promise = glob_page.waitForSelector(".LC20lb.MBeuO.DKV0Md", {visible : true});
    return element_wait_promise;
}).then(function() {
    const mouse_click_promise = glob_page.click(".LC20lb.MBeuO.DKV0Md");
    return mouse_click_promise;
}).catch(function(err) {
    console.log(err);
})


/*
    links ==>
        https://pptr.dev/
        https://flaviocopes.com/puppeteer/
        https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/
*/ 