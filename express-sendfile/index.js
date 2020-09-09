const express = require('express');
const app = express();

app.use((req, res, next) => {
  const options = { root: __dirname };
  res.sendFile(req.originalUrl, options);
});

app.listen(3000);
