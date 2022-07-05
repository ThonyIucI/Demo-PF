require('dotenv').config()
const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env

const server = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_DATABASE}`, {
    logging: false,
    native: false,
  }
);

module.exports = {
    server
}