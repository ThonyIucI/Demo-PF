require('dotenv').config()
const { Sequelize } = require('sequelize')

<<<<<<< HEAD
const Template  = require('./models/templates.js')
=======
const Template = require('./models/templates.js')
>>>>>>> fdc4589fc470d1ed655a04de8689f1134f233253

const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/ecommerce`, {
    logging: false,
    native: false,
  }
);

const modelTemplate = Template(sequelize)

module.exports = {
  sequelize,
  modelTemplate
}