const playwright = require('playwright-aws-lambda');
exports.main = async () => {
    browser = await playwright.launchChromium({headless:true});
    const context = await browser.newContext();
    var page = await browser.newPage();
    await  page.goto("http://vpn-ningxia.successchannel.tech?tingfeng");
    console.log('Page title: ', await page.title());
    await page.screenshot({path:`/tmp/eg.png`})
    await browser.close();
};

// main()