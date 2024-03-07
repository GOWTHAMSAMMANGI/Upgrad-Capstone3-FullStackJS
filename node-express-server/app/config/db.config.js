module.exports = {
  HOST: "nodedb.c5kkw6o6a6h1.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "admin123",
  DB: "mynodedb",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
