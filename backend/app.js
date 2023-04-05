const express = require('express');
const app = express();
const port = 4000;

app.get('/api', (req, res) => {
  res.send('api');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
