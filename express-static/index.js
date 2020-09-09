const express = require('express');
const path = require('path');
const app = express();

const joinedPaths = path.join(__dirname, 'public');
const fileServed = express.static(joinedPaths);

app.use(fileServed);
app.listen(3000);
