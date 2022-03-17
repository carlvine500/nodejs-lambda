script = `
const playwright = require('playwright-aws-lambda');
exports.main = async () => {
    browser = await playwright.launchChromium({headless:true});
    const context = await browser.newContext();
    var page = await browser.newPage();
    await  page.goto("http://vpn-ningxia.successchannel.tech?tingfeng");
    console.log('Page title: ', await page.title());
    await page.screenshot({path:'/tmp/eg.png'})
    await browser.close();
};
`;
var strToBase64 = Buffer.from(script,'utf-8').toString('base64');
console.log(strToBase64);
var base64ToStr = Buffer.from(strToBase64,'base64').toString('utf-8');
var data={}
data.scriptName  = "test1.js";
data.scriptBase64 = strToBase64;
console.log(JSON.stringify(data));

// 6M限制
`
{
"scriptName":"test3.js",
"scriptBase64":"CmNvbnN0IHBsYXl3cmlnaHQgPSByZXF1aXJlKCdwbGF5d3JpZ2h0LWF3cy1sYW1iZGEnKTsKCgpjb25zdCBzbGVlcCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4gc2V0VGltZW91dChyZXMsIDMwMDApKTsKCmV4cG9ydHMubWFpbiA9IGFzeW5jICgpID0+IHsKICAgIGJyb3dzZXIgPSBhd2FpdCBwbGF5d3JpZ2h0LmxhdW5jaENocm9taXVtKHtoZWFkbGVzczp0cnVlfSk7CiAgICBjb25zdCBjb250ZXh0ID0gYXdhaXQgYnJvd3Nlci5uZXdDb250ZXh0KCk7CgogICAgdmFyIHBhZ2UgPSBhd2FpdCBicm93c2VyLm5ld1BhZ2UoKTsKCiAgICBhd2FpdCAgcGFnZS5nb3RvKCJodHRwOi8vdnBuLW5pbmd4aWEuc3VjY2Vzc2NoYW5uZWwudGVjaD90aW5nZmVuZyIpOwogICAgCiAgICBjb25zb2xlLmxvZygnUGFnZSB0aXRsZTogJywgYXdhaXQgcGFnZS50aXRsZSgpKTsKICAgIGF3YWl0IHBhZ2Uuc2NyZWVuc2hvdCh7cGF0aDpgL3RtcC9lZy5wbmdgfSkKICAgIGF3YWl0IGJyb3dzZXIuY2xvc2UoKTsKCn07Cg=="
}
`