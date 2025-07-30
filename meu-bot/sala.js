const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
  });

  const page = await browser.newPage();
  await page.goto('https://www.haxball.com/headless', { waitUntil: 'networkidle2' });

  // Mostrar logs do Haxball no console
  await page.exposeFunction('consoleLog', text => console.log(text));

  // Lê o código do bot.js
  const botScript = fs.readFileSync('bot.js', 'utf8');

  // Executa o bot dentro da página headless
  await page.evaluate(botScript);
})();
