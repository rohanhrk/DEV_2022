const puppeteer = require("puppeteer");
const email = 'heyehad525@icesilo.com';
const password = 'roh1999@HRk';
const hacker_rank_login_url = "https://www.hackerrank.com/auth/login";
let global_page;
let global_quesn_page_url;
let browser;
let solution_tab;
let solution_code;
const browserOpen = puppeteer.launch({
    headless : false,
    defaultViewport: null,
    args: ["--start-maximized"]
});

browserOpen.then(function(browserObj) {
    browser = browserObj
    const page_open_promise = browserObj.newPage();
    return page_open_promise;
}).then(function(newTabe) {
    global_page = newTabe;
    const goto_hackerrank_login_page_promise = global_page.goto(hacker_rank_login_url);
    return goto_hackerrank_login_page_promise;
}).then(function() {
    const wait_for_login_page_visible_promise = global_page.waitForSelector(".login-form.auth-form.theme-m", {visible : true});
    return wait_for_login_page_visible_promise;
}).then(function() {
    const user_id_will_be_type_promise = global_page.type("input[type = 'text']", email);
    return user_id_will_be_type_promise;
}).then(function() {
    const password_will_be_type_promise = global_page.type("input[type = 'password']", password);
    return password_will_be_type_promise;
}).then(function() {
    const submit_btn_click_promise = global_page.click("button[type = 'submit']", {delay : 100});
    return submit_btn_click_promise;
}).then(function() {
    const wait_for_topic_page_promise = global_page.waitForSelector(".topics-list", {visible : true});
    return wait_for_topic_page_promise;
}).then(function() {
    const click_on_algorithm_promise = global_page.click("div[data-automation='algorithms']", {delay : 100});
    return click_on_algorithm_promise;
}).then(function() {
    const wait_for_warmup_check_box_promise = global_page.waitForSelector("input[value='warmup']", {visible : true});
    return wait_for_warmup_check_box_promise;
}).then(function() {
    const click_on_warmup_checkbox_promise = global_page.click("input[value='warmup']", {delay : 100});
    return click_on_warmup_checkbox_promise;
}).then(function() {
    const wait_for_warmup_page_load_page_promise = global_page.waitForSelector(".challenge-submit-btn", {visible : true});
    return wait_for_warmup_page_load_page_promise;
}).then(function() {
    const all_quesn_elem_arr = global_page.$$(".challenge-submit-btn");
    return all_quesn_elem_arr;
}).then(function(quesn_arr) {
    const current_page_url = global_page.url();
    bringSolutionCode(quesn_arr[0]);
    // questionSolver(quesn_arr[0]);
})

function bringSolutionCode(quesn) {
    return new Promise(function(resolve, reject) {
        const click_on_quesn_promise = quesn.click();
        click_on_quesn_promise.then(function() {
            const wait_for_quesn_page_promise = global_page.waitForSelector("a[data-attr2='Leaderboard']", {visible : true});
            return wait_for_quesn_page_promise;
        }).then(function() {
            global_quesn_page_url = global_page.url();
            const click_on_leaderboard_promise = global_page.click("a[data-attr2='Leaderboard']", {delay : 100});
            return click_on_leaderboard_promise;
        }).then(function() {
            const  wait_for_code_promise = global_page.waitForSelector("a[data-attr2 = 'cpp']", {visible : true});
            return wait_for_code_promise;
        }).then(function() {
            const click_on_view_solution = global_page.click("a[data-attr2 = 'cpp']", {delay : 300});
            return click_on_view_solution;
        }).then(function() {
            const wait_for_four_sec = global_page.waitForTimeout(4000);
            return wait_for_four_sec;  
        }).then(function() {
            const all_tabs = browser.pages();
            return all_tabs;
        }).then(function(tabs) {
            solution_tab = tabs[tabs.length - 1];
            const ctrl_key_will_be_pressed_promise = solution_tab.keyboard.down("Control");
            return ctrl_key_will_be_pressed_promise;
        }).then(function() {
            const A_will_be_pressed_promise = solution_tab.keyboard.press("KeyA");
            return A_will_be_pressed_promise;
        }).then(function() {
            const C_will_be_press_promise = solution_tab.keyboard.press("KeyC");
            return C_will_be_press_promise;
        }).then(function(code) {
            solution_code = code;
            const solution_tab_will_be_close_promise = solution_tab.close();
            return solution_tab_will_be_close_promise;
        }).then(function() {
            const goback_promise = global_page.goBack();
            return goback_promise;
        })
        .then(function() {
            resolve();
        }).catch(function(err) {
            console.log(err);
            reject();
        })
    })

    // function questionSolver(quesn) {
    //     return new Promise(function(resolve, reject) {

    //     })
    // }

}


