
const puppeteer = require('puppeteer');

const takeScreenShot = async () => {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://soundcloud.com/')
    await page.screenshot({ path: 'hover.png' })
    await browser.close()
   })()
};

takeScreenShot();
export default async function (req, res) {
  try {
    const response = await takeScreenShot();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(response));
  }

  catch (error) {
    res.json(error);
    res.status(405).end();
  }
}