const Sequelize = require("sequelize")
require('dotenv').config();

const Connection = new Sequelize(process.env.DB_NAME,
  process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  timezone: "-03:00",
  logging: false

})
module.exports = Connection