const puppeteer = require("puppeteer");
const email = 'heyehad525@icesilo.com';
const password = 'roh1999@HRk';
const hacker_rank_login_url = "https://www.hackerrank.com/auth/login";
let browser;
let global_page;
let solution_tab;

const browserOpen = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
});

browserOpen.then(function (browserObj) {
    browser = browserObj
    const page_open_promise = browserObj.newPage();
    return page_open_promise;
}).then(function (newTabe) {
    global_page = newTabe;
    const goto_hackerrank_login_page_promise = global_page.goto(hacker_rank_login_url);
    return goto_hackerrank_login_page_promise;
}).then(function () {
    const wait_for_login_page_visible_promise = global_page.waitForSelector(".login-form.auth-form.theme-m", { visible: true });
    return wait_for_login_page_visible_promise;
}).then(function () {
    const user_id_will_be_type_promise = global_page.type("input[type = 'text']", email, { delay: 100 });
    return user_id_will_be_type_promise;
}).then(function () {
    const password_will_be_type_promise = global_page.type("input[type = 'password']", password, { delay: 100 });
    return password_will_be_type_promise;
}).then(function () {
    const login_btn_click_promise = global_page.click("button[type = 'submit']", { delay: 500 });
    return login_btn_click_promise;
}).then(function () {
    const wait_for_topic_page_and_click_on_algorithm_promise = waitAndClick("div[data-automation='algorithms']");
    return wait_for_topic_page_and_click_on_algorithm_promise;
}).then(function () {
    const wait_for_warmup_check_box_and_click_promise = waitAndClick("input[value='warmup']");
    return wait_for_warmup_check_box_and_click_promise;
}).then(function () {
    const wait_for_warmup_page_load_page_promise = global_page.waitForSelector(".challenge-submit-btn", { visible: true });
    return wait_for_warmup_page_load_page_promise;
}).then(function () {
    function storeAllQuestionLinksInArr() {
        let all_elem = document.querySelectorAll("a[data-analytics='ChallengeListChallengeName']");
        let question_list_arr = [];
        for (let i = 0; i < all_elem.length; i++) {
            question_list_arr.push(all_elem[i].getAttribute("href"));
        }
        return question_list_arr;
    }

    let question_list_arr_promise = global_page.evaluate(storeAllQuestionLinksInArr);
    return question_list_arr_promise;
}).then(function (quesn_arr) {
    console.log(quesn_arr.length);
    let question_will_be_solve_promise = bringSolutionCode(quesn_arr[0]);
    // for(let i = 1; i < quesn_arr.length; i++) {
    //     question_will_be_solve_promise = question_will_be_solve_promise.then(function() {
    //         return bringSolutionCode(quesn_arr[i]);
    //     })
    // }
    return question_will_be_solve_promise;
})

function bringSolutionCode(question_url) {
    return new Promise(function (resolve, reject) {
        const fullLink = `https://www.hackerrank.com${question_url}`;
        const goto_question_page_promise = global_page.goto(fullLink);
        goto_question_page_promise.then(function () {
            const wait_for_question_page_and_click_promise = waitAndClick("a[data-attr2='Leaderboard']");
            return wait_for_question_page_and_click_promise;
        }).then(function () {
            const wait_for_leaderboard_and_click = waitAndClick("a[data-attr2 = 'cpp']");
            return wait_for_leaderboard_and_click;
        }).then(function () {
            const wait_for_four_sec = global_page.waitForTimeout(4000);
            return wait_for_four_sec;
        }).then(function () {
            const all_tabs = browser.pages();
            return all_tabs;
        }).then(function (tabs) {
            solution_tab = tabs[tabs.length - 1];
            const ctrl_key_will_be_pressed_promise = solution_tab.keyboard.down("Control", { delay: 500 });
            return ctrl_key_will_be_pressed_promise;
        }).then(function () {
            const A_will_be_pressed_promise = solution_tab.keyboard.press("KeyA", { delay: 500 });
            return A_will_be_pressed_promise;
        }).then(function () {
            const C_will_be_press_promise = solution_tab.keyboard.press("KeyC", { delay: 500 });
            return C_will_be_press_promise;
        }).then(function () {
            const solution_tab_will_be_close_promise = solution_tab.close();
            return solution_tab_will_be_close_promise;
        }).then(function () {
            questionSolver();
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject(err);
        })
    })
}

function questionSolver() {
    return new Promise(function (resolve, reject) {
        const goback_promise = global_page.goBack();
        goback_promise.then(function () {
            const wait_for_3_sec = global_page.waitForTimeout(3000);
            return wait_for_3_sec;
        }).then(function () {
            const click_on_checkbox_promise = global_page.click(".view-lines", { delay: 500 });
            return click_on_checkbox_promise;
        }).then(function () {
            const ctrl_key_will_be_pressed_promise = global_page.keyboard.down("Control", { delay: 500 });
            return ctrl_key_will_be_pressed_promise;
        }).then(function () {
            const A_will_be_pressed_promise = global_page.keyboard.press("KeyA", { delay: 500 });
            return A_will_be_pressed_promise;
        }).then(function () {
            const key_V_will_be_press_promise = global_page.keyboard.press("KeyV", { delay: 500 });
            return key_V_will_be_press_promise;
        }).then(function () {
            const key_ctrl_will_be_up_promise = global_page.keyboard.up("Control", { delay: 500 });
            return key_ctrl_will_be_up_promise;
        }).then(function () {
            const click_on_submit_button = global_page.click(".hr-monaco-submit", { delay: 500 });
            return click_on_submit_button;
        }).then(function () {
            const wait_for_10_sec = global_page.waitForTimeout(10000);
            return wait_for_10_sec;
        }).then(function () {
            const goback_promise = global_page.goBack();
            return goback_promise;
        }).then(function () {
            const wait_for_2_sec = global_page.waitForTimeout(2000);
            return wait_for_2_sec;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject(err);
        })
    })
}

function waitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        const wait_for_selector = global_page.waitForSelector(selector, { visible: true });
        wait_for_selector.then(function () {
            const click_on_selector = global_page.click(selector, { delay: 500 });
            return click_on_selector;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject(err);
        })
    })
}