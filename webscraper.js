const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('src');
    const imgURL = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const title= await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="price_inside_buybox"]');
    const txt2 = await el3.getProperty('textContent');
    const price= await txt2.jsonValue();

    console.log({imgURL, title, price});

    browser.close();
}

scrapeProduct('https://www.amazon.com/MSI-GeForce-Architecture-Overclocked-Graphics/dp/B08CLV8CKP/ref=sr_1_1?crid=2RR02ABIUXDRP&dchild=1&keywords=rtx+2080&qid=1608760817&sprefix=rtx%2Caps%2C235&sr=8-1')