const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
  debugger;
  res.send(200, 'Hello World');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})