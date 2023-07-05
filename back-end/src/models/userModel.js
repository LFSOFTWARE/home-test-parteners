const Sequelize = require("sequelize");
const connection = require("../../config/database");

const User = connection.define("user", {
   name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    favorite_sport:{
        type: Sequelize.STRING,
        allowNull: false,
    }

})

User.sync({force:true})

module.exports = User;