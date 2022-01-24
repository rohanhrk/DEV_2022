const puppeteer = require("puppeteer");
const email = 'heyehad525@icesilo.com';
const password = 'roh1999@HRk';
const hacker_rank_login_url = "https://www.hackerrank.com/auth/login";
let global_page;
let global_quesn_page_url;

const browserOpen = puppeteer.launch({
    headless : false,
    defaultViewport: null,
    args: ["--start-maximized"]
});

browserOpen.then(function(browserObj) {
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
    const user_id_will_be_type_promise = global_page.type("input[type = 'text']", email, {delay : 150});
    return user_id_will_be_type_promise;
}).then(function() {
    const password_will_be_type_promise = global_page.type("input[type = 'password']", password, {delay : 150});
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
    console.log(current_page_url);
    // for(let i = 0; i < quesn_arr.length; i++) {
        questionSolver(quesn_arr[0], current_page_url);
    // }
})

function questionSolver(quesn, current_page_url) {
    return new Promise(function(resolve, reject) {
        const click_on_quesn_promise = quesn.click();
        return click_on_quesn_promise;
    }).then(function() {
        const wait_for_quesn_page_promise = global_page.waitForSelector("a[data-attr2='Problem']", {visible : true});
        return wait_for_quesn_page_promise;
    }).then(function() {
        // global_quesn_page_url = global_page.url();
        const click_on_leaderboard_promise = global_page.click("a[data-attr2='Leaderboard']", {delay : 100});
        return click_on_leaderboard_promise;
    }).then(function() {
        const wait_for_leaderboar_promise = global_page.waitForSelector(".ellipsis.solutions", {visible : true});
        return wait_for_leaderboar_promise;
    }).then(function() {
        const click_on_view_solution_promise = global_page.click(".ellipsis.solutions");
        return click_on_view_solution_promise;
    })
    // .then(function() {
    //     const wait_for_checkbox_promise = global_page.waitForSelector(".checkBoxWrapper", {visible : true});
    //     return wait_for_checkbox_promise;
    // })
    
    // .then(function() {
    //     const click_on_checkbox_promise = global_page.click(".checkBoxWrapper", {delay : 100});
    //     return click_on_checkbox_promise;
    // }).then
    
    // .then(function() {
    //     resolve();
    // }).catch(function() {
    //     reject();
    // })

}


