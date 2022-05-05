const puppeteer = require("puppeteer");
const email = 'heyehad525@icesilo.com';
const password = 'roh1999@HRk';
const hacker_rank_login_url = "https://www.hackerrank.com/auth/login";

(async function () {
    try {
        const browserOpenInstance = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });

        const newTab = await (await browserOpenInstance).newPage();
        await newTab.goto(hacker_rank_login_url);
        await newTab.type("input[type = 'text']", email, { delay: 100 });
        await newTab.type("input[type = 'password']", password, { delay: 100 });
        await newTab.click("button[type = 'submit']", { delay: 500 });
        await waitAndClick("div[data-automation='algorithms']", newTab);
        await waitAndClick("input[value='warmup']", newTab);
        await newTab.waitForSelector("a[data-analytics='ChallengeListChallengeName']", { visible: true });
        const question_arr = await newTab.evaluate(storeAllQuestionLinksInArr, "a[data-analytics='ChallengeListChallengeName']");

        for (let i = 0; i < question_arr.length; i++) {
            await bringSolutionCode(question_arr[i], newTab, browserOpenInstance);
        }
    } catch (error) {
        console.log(error);
    }


})();

async function bringSolutionCode(question_url, currentTab, browserInstance) {
    try {
        const fullLink = `https://www.hackerrank.com${question_url}`;
        await currentTab.goto(fullLink);
        await waitAndClick("a[data-attr2='Leaderboard']", currentTab);
        await waitAndClick("a[data-attr2 = 'cpp']", currentTab);
        await currentTab.waitForTimeout(4000);
        const allTab = await browserInstance.pages();
        const solution_tab = allTab[allTab.length - 1];
        await solution_tab.keyboard.down("Control", { delay: 500 });
        await solution_tab.keyboard.press("KeyA", { delay: 500 });
        await solution_tab.keyboard.press("KeyC", { delay: 500 });
        await solution_tab.close();
        await questionSolver(currentTab);
    } catch (error) {
        console.log(error);
    }
}

async function questionSolver(currentTab) {
    await currentTab.goBack();
    await currentTab.waitForTimeout(3000);
    await currentTab.click(".view-lines", { delay: 500 });
    await currentTab.keyboard.down("Control", { delay: 500 });
    await currentTab.keyboard.press("KeyA", { delay: 500 });
    await currentTab.keyboard.press("KeyV", { delay: 500 });
    await currentTab.keyboard.up("Control", { delay: 500 });
    await currentTab.click(".hr-monaco-submit", { delay: 500 });
    await currentTab.waitForTimeout(10000);
    await currentTab.goBack();
    await currentTab.waitForTimeout(2000);
}

async function waitAndClick(selector, currentTab) {
    try {
        await currentTab.waitForSelector(selector, { visible: true });
        await currentTab.click(selector);
    } catch (error) {
        console.log(error);
    }
}

async function storeAllQuestionLinksInArr(selector) {
    try {
        let all_elem = await document.querySelectorAll(selector);
        let question_list_arr = [];
        for (let i = 0; i < all_elem.length; i++) {
            question_list_arr.push(all_elem[i].getAttribute("href"));
        }
        return question_list_arr;
    } catch (error) {
        console.log(error);
    }
}