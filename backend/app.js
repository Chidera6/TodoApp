const express = require('express');
require('express-async-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { environment } = require('./config');
const { ValidationError } = require('sequelize');
const app = express();
const db = require('./db/models');
app.use(cookieParser());
app.use(express.json());
const corsOptions = {
  origin: '',
};
app.use(cors(corsOptions));
app.use(routes);

db.sequelize.authenticate().then(() => {
  console.log('Database connection success! Sequelize is ready to use...');
  app.listen(port, () => console.log(`Listening on port ${port}...`));
})
.catch((err) => {
  console.log('Database connection failure.');
  console.error(err);
});
console.log('Current environment:', environment);
const isProduction = environment === 'production';
// Error handling middleware

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});


app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
  });
});

module.exports = app;
