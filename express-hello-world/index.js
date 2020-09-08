const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('hello world');
});

app.listen(3000, () => {

});
