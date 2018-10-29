const express = require('express');
const app = express();
const PORT = 5000;
module.exports = app;

app.get('/', (req, res) => {
  res.send('hello fucking fuck jenkins')
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
});

