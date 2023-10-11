
const puppeteer = require('puppeteer');

const takeScreenShot = async () => {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
 
    await page.goto('https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Enflasyon+Verileri/Tuketici+Fiyatlari')
    await page.screenshot({
     path: 'full.png',
     fullPage: true
    })
    console.log(await page.title())
  

    const data = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll('table tr td'))
      return tds.map(td => td.innerHTML)
    });
  
    //You will now have an array of strings
    //[ 'One', 'Two', 'Three', 'Four' ]
    console.log(data);
    //One
    console.log(data[0]);
    const fs = require('fs');
fs.writeFile('./rates.json', JSON.stringify(data), err => err ? console.log(err): null);
    await browser.close()
   })()}
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