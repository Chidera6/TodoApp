const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const db = require('./db/models');
const { port,environment } = require('./config');
const routes = require('./routes');
const isProduction = environment === 'production';
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(cors("*"));

app.use(
  helmet.crossOriginResourcePolicy({ 
    policy: "cross-origin" 
  })
);

app.use(csurf({
      cookie: 
     {secure: isProduction,
     sameSite: isProduction && "Lax",
     httpOnly: true
    }
  })
);


app.use(routes);

db.sequelize.authenticate().then(() => {
  console.log('Database connection success! Sequelize is ready to use...');
  app.listen(port, () => console.log(`Listening on port ${port}...`));
})
.catch((err) => {
  console.log('Database connection failure.');
  console.error(err);
});

/*
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

const { ValidationError } = require('sequelize');
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
*/
module.exports = app;