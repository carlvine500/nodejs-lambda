const playwright = require('playwright-aws-lambda');
// const {handler} = require("./app");

exports.handler = async (event, context) => {
    let browser = null;

    try {
        browser = await playwright.launchChromium();
        const context = await browser.newContext();

        const page = await context.newPage();
        await page.goto(event.url || 'https://baidu.com');
        // /tmp以外其它目录是只读的,如果有需要可以挂载到efs
        await page.screenshot({path:`/tmp/eg1.png`})
        console.log('Page title: ', await page.title());
    } catch (error) {
        throw error;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

// handler;