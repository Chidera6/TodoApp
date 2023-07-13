const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/models');
const { port } = require('./config');
const routes = require('./routes/api');
const app = express();
app.use(express.json());
app.use(cors("*"));
app.use(routes);

db.sequelize.authenticate().then(() => {
  console.log('Database connection success! Sequelize is ready to use...');
  app.listen(port, () => console.log(`Listening on port ${port}...`));
})
.catch((err) => {
  console.log('Database connection failure.');
  console.error(err);
});


module.exports = app;