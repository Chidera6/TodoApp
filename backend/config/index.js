
module.exports = {
    environment: process.env.NODE_ENV || "production",
    port: process.env.PORT || 8000,
    database: process.env.DATABASE_URL,
    jwtConfig: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN
    }
  };

