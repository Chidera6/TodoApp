module.exports = {
    environment: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 5000,
    DATABASE_URL:process.env.DATABASE_URL,
    db: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST
    },
    jwtConfig: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  };