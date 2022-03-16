const {chromium} = require('playwright-core');


const sleep = () => new Promise((res, rej) => setTimeout(res, 3000));

const main = async () => {
    const browser = await chromium.launch({headless: false});
    var page = await browser.newPage();
    const context = { page: page };

    await  page.goto("https://baidu.com");
    
    console.log('Page title: ', await page.title());
    await page.screenshot({path:`eg.png`})
    await browser.close();

};

main()