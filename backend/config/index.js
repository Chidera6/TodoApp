module.exports = {
  environment: process.env.NODE_ENV,
  database: process.env.DATABASE_URL,
  port: process.env.PORT || 6000,
  
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  }
};

