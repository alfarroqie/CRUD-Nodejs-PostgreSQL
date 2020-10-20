module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "563654",
    DB: "newsdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };