const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

app.use(bodyParser.json())
//app.use(cors({
//    origin: ["http://example1.com", /\.example2\.com$/]
//}))
app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))