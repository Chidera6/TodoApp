const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(routes);
module.exports = app;