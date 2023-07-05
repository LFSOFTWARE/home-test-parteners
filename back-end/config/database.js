const Sequelize = require("sequelize")


const Connection = new Sequelize('users','root','password',{
    host:'localhost',
    dialect: 'mysql',
    timezone:"-03:00"

})
module.exports = Connection