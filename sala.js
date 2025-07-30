const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const botCode = fs.readFileSync('bot.js', 'utf-8');
  res.send(`<html>
  <head><title>Bot Haxball</title></head>
  <body>
    <h1>Seu Bot de Haxball</h1>
    <p>Acesse o <a href="https://www.haxball.com/headless" target="_blank">Haxball Headless Host</a> e cole o código abaixo:</p>
    <pre style="background:#eee;padding:1em;"><code>${botCode.replace(/</g, '&lt;')}</code></pre>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
