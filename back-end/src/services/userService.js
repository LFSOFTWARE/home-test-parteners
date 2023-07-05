const sequelize = require('sequelize');
const Connection = require('../../config/database');
const { User } = require('../models');

async function getAllUsers(page, limit, q) {
  try {
    const offset = (page - 1) * limit;
    const where = {}

    if (q) {
      where = {
        [sequelize.Op.or]: [
          { name: { [sequelize.Op.like]: `%${q}%` } },
          { city: { [sequelize.Op.like]: `%${q}%` } },
          { country: { [sequelize.Op.like]: `%${q}%` } },
          { favorite_sport: { [sequelize.Op.like]: `%${q}%` } },
        ],
      }
    }
    
    const users = await User.findAll({
      offset,
      limit,
      where
    });

    return users;
  } catch (error) {
    throw new Error('Error while getting users' + error);
  }
}


async function createUserLote(users) {
  try {
    const createdUsers = await createUsers(users);
    return createdUsers;
  } catch (error) {
    console.error(error);
    throw new Error('Error while creating users');
  }
}

async function createUsers(users) {
  let transaction;

  try {
    transaction = await Connection.transaction();

    const createdUsers = await User.bulkCreate(users, { transaction, returning: true });
    await transaction.commit();

    return createdUsers;
  } catch (error) {
    if (transaction) await transaction.rollback();
    console.error('Erro ao cadastrar usuários:', error);
  }
}

module.exports = {
  getAllUsers,
  createUserLote
};