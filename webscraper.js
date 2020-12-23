const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log({srcTxt});
}

scrapeProduct('https://www.amazon.com/MSI-GeForce-Architecture-Overclocked-Graphics/dp/B08CLV8CKP/ref=sr_1_1?crid=2RR02ABIUXDRP&dchild=1&keywords=rtx+2080&qid=1608760817&sprefix=rtx%2Caps%2C235&sr=8-1')