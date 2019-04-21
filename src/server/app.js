const express = require('express');
const app = express();
const data = require('../data.json');
const cors = require('cors');

app.use(cors());

app.get('/users', function (req, res) {
  res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});