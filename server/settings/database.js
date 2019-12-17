require("dotenv").config();

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    operatorsAliases: false
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    operatorsAliases: false
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    operatorsAliases: false
  }
};
