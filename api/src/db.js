require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/ecommerce`, {
    logging: false,
    native: false,
  }
);

module.exports = {
  sequelize
}